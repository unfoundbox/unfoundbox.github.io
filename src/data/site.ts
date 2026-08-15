export interface SiteConfig {
  title: string;
  author: string;
  tagline: string;
  description: string;
  url: string;
  status: string;
  location: string;
  email: string;
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    nomads: string;
    substack: string;
    medium: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'unfoundbox',
  author: 'Saurabh Nandwana',
  tagline: '0 → 1 Engineer · Local AI & Video Infra',
  description: 'Notes from the edge of AI, video infrastructure, and the modern web platform. Building in the open from Rajasthan and South East Asia.',
  url: 'https://unfoundbox.com',
  status: 'Building in the open',
  location: 'Udaipur · Bangkok · SE Asia',
  email: 'saurabh@unfoundbox.com',
  social: {
    github: 'https://github.com/unfoundbox',
    twitter: 'https://x.com/unfoundbox',
    linkedin: 'https://www.linkedin.com/in/saurabh-nandwana',
    instagram: 'https://www.instagram.com/_unfoundbox/',
    nomads: 'https://nomads.com/@unfoundbox',
    substack: 'https://saurabhnandwana.substack.com',
    medium: 'https://medium.com/@saurabhnandwana',
  },
};
