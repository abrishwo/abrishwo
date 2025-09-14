import axios from 'axios';
import { projects, blogPosts } from '../lib/data';

// --- Configuration ---
// Load from environment variables
const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_API_URL || !STRAPI_API_TOKEN) {
  console.error(
    'Error: Please provide STRAPI_API_URL and STRAPI_API_TOKEN environment variables.'
  );
  console.log(
    'Example: STRAPI_API_URL="http://localhost:1337" STRAPI_API_TOKEN="your_token" yarn import-content'
  );
  process.exit(1);
}

const strapiClient = axios.create({
  baseURL: STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

/**
 * A generic function to import a collection of items into Strapi.
 * @param endpoint - The Strapi API endpoint (e.g., '/api/projects').
 * @param items - The array of items to import.
 * @param transform - A function to transform the item into the format Strapi expects.
 */
async function importCollection(endpoint: string, items: any[], transform: (item: any) => any) {
  console.log(`\nImporting into ${endpoint}...`);
  let successCount = 0;
  let errorCount = 0;

  for (const item of items) {
    try {
      const payload = { data: transform(item) };
      await strapiClient.post(endpoint, payload);
      console.log(`  - Successfully imported: "${(item as any).title || (item as any).name}"`);
      successCount++;
    } catch (error: any) {
      console.error(`  - Failed to import: "${(item as any).title || (item as any).name}"`);
      if (error.response?.data?.error) {
        console.error(`    Reason: ${JSON.stringify(error.response.data.error)}`);
      }
      errorCount++;
    }
  }
  console.log(`Import complete for ${endpoint}: ${successCount} succeeded, ${errorCount} failed.`);
}


async function main() {
  console.log('--- Starting Sample Content Import ---');

  // Import Projects
  await importCollection('/api/projects', projects, (p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    description: p.description,
    // Note: Tags and images would need to be handled separately,
    // as they are relations and media uploads. This basic script focuses on text content.
    liveUrl: p.liveUrl,
    githubUrl: p.githubUrl,
  }));

  // Import Pages (Blog Posts)
  await importCollection('/api/pages', blogPosts, (p) => ({
    title: p.title,
    slug: p.slug,
    description: p.description,
    date: p.date,
    author: p.author,
    content: p.content,
  }));

  console.log('\n--- Content Import Finished ---');
}

main().catch((error) => {
  console.error('\nAn unexpected error occurred:');
  console.error(error);
  process.exit(1);
});
