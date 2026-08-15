export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  url: string;
  status: string;
  location: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'unfoundbox',
  author: 'Saurabh Nandwana',
  description: 'Notes from the edge of AI, video infrastructure, and the modern web platform. Building in the open.',
  url: 'https://unfoundbox.com',
  status: 'Building in the open',
  location: 'Udaipur, India & SE Asia',
  social: {
    github: 'https://github.com/unfoundbox',
    twitter: 'https://x.com/unfoundbox',
    linkedin: 'https://www.linkedin.com/in/saurabh-nandwana',
    instagram: 'https://www.instagram.com/_unfoundbox',
  },
};
