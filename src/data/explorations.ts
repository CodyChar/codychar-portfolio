export interface Exploration {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  thumbnail: string;
  order: number;
}

export const explorations: Exploration[] = [
  {
    slug: "lola-ai-intercom",
    title: "Lola — AI Desk Intercom",
    date: "March 2026 - In Progress",
    description: "A retro AI intercom that treats personality as a physical object.",
    thumbnail: "/images/explorations/ai-desk-intercom.jpg",
    order: 0,
  },
  {
    slug: "vibe-coded-game",
    title: "Vibe Coded Game",
    date: "December 2025",
    thumbnail: "/images/explorations/vibe-coded-game.png",
    order: 1,
  },
  {
    slug: "immersive-streaming-2",
    title: "Immersive Streaming 2",
    date: "January 2026",
    thumbnail: "/images/explorations/immersive-streaming-2.jpg",
    order: 2,
  },
  {
    slug: "immersive-streaming-1",
    title: "Immersive Streaming 1",
    thumbnail: "/images/explorations/immersive-streaming-1.png",
    order: 3,
  },
  {
    slug: "augmented-vhs",
    title: "Augmented VHS",
    date: "May 2023",
    thumbnail: "/images/explorations/augmented-vhs.png",
    order: 4,
  },
  {
    slug: "ar-keynote",
    title: "AR Keynote",
    date: "July 2019",
    thumbnail: "/images/explorations/ar-keynote.gif",
    order: 5,
  },
  {
    slug: "world-space-interactions",
    title: "World-space Interactions",
    description: "Exploration",
    thumbnail: "/images/explorations/world-space.png",
    order: 6,
  },
  {
    slug: "vr-sculpt-study",
    title: "VR Sculpt Study",
    description: "Exploration",
    thumbnail: "/images/explorations/vr-sculpt.jpg",
    order: 7,
  },
  {
    slug: "daily-3d-studies",
    title: "Daily 3D Studies",
    description:
      "A series of experimentation and fiddling, using Cinema 4D and Photoshop.",
    thumbnail: "/images/explorations/daily-3d.jpg",
    order: 8,
  },
  {
    slug: "motion-design-reel-2016",
    title: "Motion Design Reel 2016",
    thumbnail: "/images/explorations/motion-reel.jpg",
    order: 9,
  },
  {
    slug: "cube-motion-studies",
    title: "Cube Motion Studies",
    description: "A quick exploration of manual animation techniques",
    thumbnail: "/images/explorations/cube-motion.png",
    order: 10,
  },
];
