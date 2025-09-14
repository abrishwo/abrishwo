import { Project, BlogPost, Testimonial } from './types';
import { projects as mockProjects, blogPosts as mockBlogPosts } from './data';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const REVALIDATE_TIME = 3600; // Revalidate every hour

/**
 * A helper function to construct the full URL for media files from Strapi.
 * @param url - The relative URL from the Strapi API.
 * @returns The absolute URL or a placeholder.
 */
function getStrapiMediaUrl(url: string | undefined | null): string {
  if (!url) {
    return '/images/placeholder.png'; // Default placeholder
  }
  if (url.startsWith('http')) {
    return url;
  }
  return `${API_URL}${url}`;
}

/**
 * Transforms raw Strapi data for any content type into a flatter structure.
 * @param strapiItem - A single item from the Strapi API response.
 * @returns A flattened object with an id and its attributes.
 */
function transformStrapiData(strapiItem: any): any {
  if (!strapiItem?.attributes) {
    return null;
  }
  return {
    id: strapiItem.id,
    ...strapiItem.attributes,
  };
}


// --- Data Fetching Functions ---

/**
 * Fetches all projects.
 * Falls back to local mock data if the CMS is unavailable.
 */
export async function getProjects(): Promise<Project[]> {
  if (!API_URL) {
    return mockProjects;
  }

  try {
    const response = await fetch(`${API_URL}/api/projects?populate=deep`, {
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) throw new Error('Failed to fetch projects');

    const json = await response.json();
    if (!json.data) return [];

    return json.data.map((item: any) => {
      const transformed = transformStrapiData(item);
      return {
        ...transformed,
        image: getStrapiMediaUrl(transformed.image?.data?.attributes?.url),
        tags: transformed.tags?.data?.map((tag: any) => tag.attributes.name) || [],
      };
    });
  } catch (error) {
    console.error('Error fetching projects from CMS, falling back to mock data.', error);
    return mockProjects;
  }
}

/**
 * Fetches all blog posts (from the 'Page' content type).
 * Falls back to local mock data if the CMS is unavailable.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!API_URL) {
    return mockBlogPosts;
  }

  try {
    const response = await fetch(`${API_URL}/api/pages?sort=date:desc&populate=image`, {
        next: { revalidate: REVALIDATE_TIME },
    });
    if (!response.ok) throw new Error('Failed to fetch blog posts');

    const json = await response.json();
    if (!json.data) return [];

    return json.data.map((item: any) => {
        const transformed = transformStrapiData(item);
        return {
            ...transformed,
            image: getStrapiMediaUrl(transformed.image?.data?.attributes?.url),
        };
    });
  } catch (error) {
    console.error('Error fetching blog posts from CMS, falling back to mock data.', error);
    return mockBlogPosts;
  }
}

/**
 * Fetches a single blog post by its slug.
 * Falls back to local mock data if the CMS is unavailable.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    if (!API_URL) {
        const post = mockBlogPosts.find((p) => p.slug === slug);
        return post || null;
    }

    try {
        const response = await fetch(`${API_URL}/api/pages?filters[slug][$eq]=${slug}&populate=image`, {
            next: { revalidate: REVALIDATE_TIME },
        });
        if (!response.ok) throw new Error(`Failed to fetch blog post: ${slug}`);

        const json = await response.json();
        if (!json.data || json.data.length === 0) return null;

        const transformed = transformStrapiData(json.data[0]);
        return {
            ...transformed,
            image: getStrapiMediaUrl(transformed.image?.data?.attributes?.url),
        };

    } catch (error) {
        console.error(`Error fetching post ${slug} from CMS, falling back to mock data.`, error);
        const post = mockBlogPosts.find((p) => p.slug === slug);
        return post || null;
    }
}


/**
 * Fetches all testimonials.
 * Returns an empty array if the CMS is unavailable, as there is no mock data.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
    if (!API_URL) {
        return []; // No mock data for testimonials
    }

    try {
        const response = await fetch(`${API_URL}/api/testimonials?populate=avatar`, {
            next: { revalidate: REVALIDATE_TIME },
        });
        if (!response.ok) throw new Error('Failed to fetch testimonials');

        const json = await response.json();
        if (!json.data) return [];

        return json.data.map((item: any) => {
            const transformed = transformStrapiData(item);
            return {
                ...transformed,
                avatar: getStrapiMediaUrl(transformed.avatar?.data?.attributes?.url),
            };
        });
    } catch (error) {
        console.error('Error fetching testimonials from CMS.', error);
        return [];
    }
}
