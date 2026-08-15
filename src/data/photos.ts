export interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  tag?: string;
}

export const nomadPhotos: PhotoItem[] = [
  {
    src: '/photos/bangkok-workspace.jpg',
    alt: 'Bangkok Workspace Setup',
    caption: '3 months deep work on WebGPU',
    location: 'Bangkok, TH',
    tag: 'Deep Work',
  },
  {
    src: '/photos/danang-beach.jpg',
    alt: 'Da Nang Nomading',
    caption: 'Beachside code sessions',
    location: 'Da Nang, VN',
    tag: 'Nomad',
  },
  {
    src: '/photos/koh-phangan-offsite.jpg',
    alt: 'Vectorly Offsite Koh Phangan',
    caption: 'Vectorly startup offsite',
    location: 'Koh Phangan, TH',
    tag: 'Offsite',
  },
  {
    src: '/photos/cancun-hopin.jpg',
    alt: 'Hopin Team Offsite Cancun',
    caption: 'Hopin global team gathering',
    location: 'Cancun, MX',
    tag: 'Hopin',
  },
  {
    src: '/photos/udaipur-home.jpg',
    alt: 'Udaipur Sanctuary',
    caption: 'Hometown base & winter building',
    location: 'Rajasthan, IN',
    tag: 'Sanctuary',
  },
  {
    src: '/avatar.jpg',
    alt: 'Saurabh on the road',
    caption: 'Unedited field portrait',
    location: 'On the road',
    tag: 'Builder',
  },
];
