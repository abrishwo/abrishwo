import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';
import { Project } from '@/lib/types';

// Mock project data for testing
const mockProject: Project = {
  id: 1,
  title: 'Test Project',
  slug: 'test-project',
  category: 'Web',
  image: '/images/projects/test.png',
  description: 'This is a test project description.',
  tags: ['React', 'Next.js', 'TypeScript'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/test-project',
};

describe('ProjectCard', () => {
  it('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} />);

    // Check if the title is rendered
    expect(screen.getByText('Test Project')).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText('This is a test project description.')).toBeInTheDocument();

    // Check if the category is rendered
    expect(screen.getByText('Web')).toBeInTheDocument();

    // Check if all tags are rendered
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    // Check if links are present
    const links = screen.getAllByRole('link');
    expect(links.some(link => link.getAttribute('href') === 'https://github.com/example/test-project')).toBe(true);
    expect(links.some(link => link.getAttribute('href') === 'https://example.com')).toBe(true);
  });
});
