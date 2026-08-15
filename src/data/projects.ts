export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  url?: string;
  githubUrl?: string;
  badge?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'katana.video',
    tagline: 'High-Performance WebGPU Video Super-Resolution',
    description: 'Hardware-accelerated AI video upscaling running directly in the browser via WebGPU shaders, WebCodecs, and neural super-resolution models.',
    tags: ['WebGPU', 'WebCodecs', 'AI Video', 'Super-Resolution'],
    metrics: [
      { label: 'Inference', value: 'Web-Native' },
      { label: 'Latency', value: 'Real-time' },
      { label: 'Engine', value: 'WGSL / WASM' },
    ],
    url: 'https://github.com/unfoundbox',
    githubUrl: 'https://github.com/unfoundbox',
    badge: 'Lab Venture',
    featured: true,
  },
  {
    name: 'motionvector',
    tagline: 'Creative Motion & Video Generation Engine',
    description: 'Next-generation programmatic motion tooling, automated launch video pipelines, and 3D web-native render engines.',
    tags: ['Motion Graphics', 'TypeScript', 'Web Video', 'HyperFrames'],
    metrics: [
      { label: 'Stack', value: 'Astro / Next.js' },
      { label: 'Pipeline', value: 'Deterministic' },
    ],
    url: 'https://motionvector.dev',
    githubUrl: 'https://github.com/unfoundbox',
    badge: 'Active Studio',
    featured: true,
  },
  {
    name: 'launchy.video',
    tagline: 'AI Product Launch Videos',
    description: 'Turn a GitHub repo, launch brief, or product URL into a high-converting, crisp marketing video — without a traditional production studio.',
    tags: ['Video AI', 'Automated Render', 'SaaS', 'Marketing'],
    metrics: [
      { label: 'Output', value: '4K MP4' },
      { label: 'Turnaround', value: '< 2 mins' },
    ],
    url: 'https://launchy.video',
    badge: 'Live',
    featured: true,
  },
  {
    name: 'lookaround.space',
    tagline: 'Navigable 3D Web Spaces',
    description: 'Explore real-world places in immersive, navigable 3D Gaussian splatting and WebGL environments right in modern desktop and mobile browsers.',
    tags: ['3D Splats', 'WebGL', 'WebGPU', 'Next.js'],
    metrics: [
      { label: 'Format', value: '3D Splats' },
      { label: 'Runtime', value: 'Zero Install' },
    ],
    url: 'https://lookaround.space',
    badge: 'Live',
    featured: true,
  },
  {
    name: 'webgpu-video-processor',
    tagline: 'Open-Source Browser Video Processing Stack',
    description: 'GPU-accelerated media pipeline with WebCodecs decoders/encoders, custom WGSL compute shaders, and WebGL2 fallback matrices.',
    tags: ['Open Source', 'WebGPU', 'WebCodecs', 'TypeScript'],
    metrics: [
      { label: 'License', value: 'MIT' },
      { label: 'Stars / Community', value: 'Open Source' },
    ],
    url: 'https://github.com/unfoundbox',
    githubUrl: 'https://github.com/unfoundbox',
    badge: 'Open Source',
    featured: true,
  },
  {
    name: 'founderquest',
    tagline: 'Gamified Field Guide to the Founder Journey',
    description: 'An interactive, visual roadmap through the founder lifecycle — idea to initial revenue, validation, growth, and sustainable momentum.',
    tags: ['Interactive', 'Field Guide', 'Startups'],
    metrics: [
      { label: 'Format', value: 'Gamified Quest' },
      { label: 'Saved on Device', value: 'Local Storage' },
    ],
    url: '/founderquest/',
    badge: 'Interactive',
    featured: true,
  },
];
