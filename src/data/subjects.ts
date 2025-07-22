export interface Subject {
  slug: string;
  name: string;
  description: string;
}

export const subjects: Subject[] = [
  {
    slug: 'math',
    name: 'Mathematics',
    description: 'Explore the world of numbers, equations, and mathematical concepts. From basic arithmetic to advanced calculus and beyond.'
  },
  {
    slug: 'science',
    name: 'Science',
    description: 'Discover the wonders of the natural world through physics, chemistry, biology, and earth sciences.'
  },
  {
    slug: 'english',
    name: 'English',
    description: 'Master the art of language, literature, writing, and communication skills.'
  },
  {
    slug: 'history',
    name: 'History',
    description: 'Journey through time to understand past events, civilizations, and their impact on our modern world.'
  },
  {
    slug: 'art',
    name: 'Art',
    description: 'Express creativity through visual arts, drawing, painting, sculpture, and artistic appreciation.'
  }
];
