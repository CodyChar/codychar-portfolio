export interface ContentBlock {
  id: string;
  type: "text" | "image" | "video" | "heading" | "credits" | "spacer" | "embed";
  width: "full" | "1/2" | "1/3" | "2/3";
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
  items?: { role: string; name: string }[];
  autoload?: boolean;
  order: number;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  discipline: string;
  thumbnail: string;
  protected?: boolean;
  password?: string;
  blocks: ContentBlock[];
}

export const projects: Project[] = [
  {
    slug: "bonsai-fishtank",
    title: "Bonsai Fishtank",
    subtitle: "Head-Coupled Perspective",
    discipline: "Creative Technology, 3D, WebXR",
    thumbnail: "/images/projects/bonsai-fishtank.jpg",
    blocks: [
      {
        id: "bf-1",
        type: "heading",
        width: "full",
        content: "A screen that knows where your eyes are",
        order: 0,
      },
      {
        id: "bf-meta",
        type: "text",
        width: "full",
        content:
          "Role: Creative technologist, design, development. Timeline: April 2026. Medium: Babylon.js 9, MediaPipe Face Landmarker, Hosek-Wilkie sky model, cinematic post-processing.",
        order: 1,
      },
      {
        id: "bf-2",
        type: "heading",
        width: "full",
        content: "The idea",
        order: 2,
      },
      {
        id: "bf-3",
        type: "text",
        width: "full",
        content:
          "Head-coupled perspective (sometimes called \u201cfishtank VR\u201d) is one of the oldest tricks in spatial computing: track the viewer\u2019s head with a camera, then render the 3D scene from their exact viewpoint using off-axis projection. The screen becomes a window into a miniature world. No headset. No glasses. Just a laptop and a webcam.",
        order: 3,
      },
      {
        id: "bf-4",
        type: "text",
        width: "full",
        content:
          "The technique has been demonstrated in research labs for decades, but it almost never ships as a product because the calibration UX is brutal and the rendering needs to be flawless \u2014 any latency or jitter breaks the illusion instantly. This project was an attempt to solve both problems well enough that someone could just open a URL and feel it.",
        order: 4,
      },
      {
        id: "bf-embed",
        type: "embed",
        width: "full",
        src: "/bonsai",
        alt: "Bonsai Fishtank \u2014 Interactive Scene",
        caption: "Live react-three-fiber scene with head-coupled perspective. Enable camera for head tracking. Press H to toggle the HUD.",
        content: "16/9",
        autoload: true,
        order: 5,
      },
      {
        id: "bf-5",
        type: "heading",
        width: "full",
        content: "How it works",
        order: 6,
      },
      {
        id: "bf-6",
        type: "text",
        width: "1/2",
        content:
          "MediaPipe\u2019s Face Landmarker runs in the browser and returns a full facial transformation matrix every frame. From that matrix I extract the viewer\u2019s eye position in 3D space, then compute an off-axis perspective projection (Kooima 2009) that matches what you\u2019d see if you were actually looking through a physical window at a tiny diorama sitting behind your screen.",
        order: 7,
      },
      {
        id: "bf-7",
        type: "text",
        width: "1/2",
        content:
          "A 4-corner finger calibration flow maps your physical screen to the virtual scene. You align your fingertip, eye, and each screen corner at arm\u2019s length \u2014 four taps and the system knows the exact geometry of your setup. After that, head tracking takes over and the perspective shifts in real time as you move.",
        order: 8,
      },
      {
        id: "bf-8",
        type: "heading",
        width: "full",
        content: "Cinematic rendering",
        order: 9,
      },
      {
        id: "bf-9",
        type: "text",
        width: "full",
        content:
          "The scene is a miniature bonsai tree in a ceramic dish, rendered in Babylon.js 9 with a deliberately cinematic pipeline: Hosek-Wilkie atmospheric sky, real volumetric god-ray scattering (occlusion-aware, not a shader fake), depth of field, bloom, chromatic aberration, film grain, SSAO for contact shadows, and screen-space reflections on the ceramic. Every parameter is exposed in a live HUD so you can tune the look in real time.",
        order: 10,
      },
      {
        id: "bf-10",
        type: "text",
        width: "1/2",
        content:
          "The cinematic treatment is deliberate. Head-coupled perspective demos usually look like tech demos \u2014 flat lighting, debug geometry. The hypothesis was that if the scene is beautiful enough on its own, the spatial effect becomes \u201cwait, what?\u201d instead of \u201coh, a head-tracking demo.\u201d The rendering quality earns the viewer\u2019s attention before the spatial trick reveals itself.",
        order: 11,
      },
      {
        id: "bf-11",
        type: "text",
        width: "1/2",
        content:
          "A sibling version built in three.js served as the original prototype. The Babylon.js rebuild was motivated by the native volumetric light scattering, SSAO2 pipeline, and SSR support that would have required significant custom shader work in three.js. Both versions use identical MediaPipe tracking and calibration flows.",
        order: 12,
      },
      {
        id: "bf-12",
        type: "heading",
        width: "full",
        content: "Why it matters",
        order: 13,
      },
      {
        id: "bf-13",
        type: "text",
        width: "full",
        content:
          "Spatial computing is converging on headsets as the delivery mechanism. But billions of people already own a device with a screen and a camera pointed at their face. Head-coupled perspective turns that device into a spatial display with zero additional hardware. The gap between \u201claptop with a webcam\u201d and \u201cspatial experience\u201d is not a headset \u2014 it\u2019s software that understands where your eyes are.",
        order: 14,
      },
      {
        id: "bf-14",
        type: "text",
        width: "full",
        content:
          "This project is a proof of that thesis. Open a URL, calibrate in ten seconds, and your screen becomes a window into a tiny world. No app store. No headset. No friction. Just the web.",
        order: 15,
      },
    ],
  },
  {
    slug: "lola-ai-intercom",
    title: "Lola",
    subtitle: "AI Desk Intercom",
    discipline: "Product Design, Systems Architecture, Software",
    thumbnail: "/images/explorations/ai-desk-intercom.jpg",
    blocks: [
      {
        id: "lola-1",
        type: "heading",
        width: "full",
        content: "A retro AI intercom that treats personality as a physical object",
        order: 0,
      },
      {
        id: "lola-meta",
        type: "text",
        width: "full",
        content:
          "Role: Product design, industrial concept, systems architecture, software. Timeline: 2025\u20132026 (ongoing personal R&D). Medium: Gemini, ElevenLabs, Firebase, Raspberry Pi Zero 2 W, NFC, antique 1960s call box.",
        order: 1,
      },
      {
        id: "lola-2",
        type: "heading",
        width: "full",
        content: "The premise",
        order: 2,
      },
      {
        id: "lola-3",
        type: "text",
        width: "full",
        content:
          "Voice assistants today are invisible, always listening, and indistinguishable from one another. They sit on a shelf and wait to be summoned by a wake word. The interaction is frictionless in the worst way \u2014 there\u2019s no ritual, no object, no sense that something happened.",
        order: 3,
      },
      {
        id: "lola-4",
        type: "text",
        width: "full",
        content:
          "Lola is the opposite proposition: a voice assistant housed inside an antique 1960s call box \u2014 the kind of single-button unit that used to sit on a wall and route to a larger intercom system. One white plastic talk button. One speaker behind a metal grille. No screen. No handset. Press the button, speak, and the box answers back in a voice you chose.",
        order: 4,
      },
      {
        id: "lola-5",
        type: "text",
        width: "full",
        content:
          "It is a deliberate argument that magical technology is not about removing interface \u2014 it\u2019s about designing interface that feels inevitable for what the technology actually is.",
        order: 5,
      },
      {
        id: "lola-6",
        type: "heading",
        width: "full",
        content: "The design problem",
        order: 6,
      },
      {
        id: "lola-7",
        type: "text",
        width: "1/2",
        content:
          "No presence. The assistant has no body, no location, no sense of being a thing you can approach or walk away from.",
        order: 7,
      },
      {
        id: "lola-8",
        type: "text",
        width: "1/2",
        content:
          "No identity. Personality is a setting buried three menus deep, not something you can hold, hand to someone else, or put on a shelf.",
        order: 8,
      },
      {
        id: "lola-9",
        type: "text",
        width: "full",
        content:
          "The goal of Lola was to design a voice product where both problems were solved by the hardware itself \u2014 not by the software pretending harder.",
        order: 9,
      },
      {
        id: "lola-10",
        type: "heading",
        width: "full",
        content: "Design principles",
        order: 10,
      },
      {
        id: "lola-11",
        type: "text",
        width: "1/2",
        content:
          "The object should earn the interaction. No wake word. You press the single white talk button on the face of the box. The ritual is the affordance. This rules out passive surveillance by design \u2014 the device literally cannot hear you unless you\u2019re touching it.",
        order: 11,
      },
      {
        id: "lola-12",
        type: "text",
        width: "1/2",
        content:
          "Sub-two-second latency or it isn\u2019t a conversation. Anything over ~2 seconds from button-release to voice reply registers as \u201cwaiting for a computer.\u201d Under 2 seconds registers as \u201ctalking to something.\u201d This became the north-star performance budget.",
        order: 12,
      },
      {
        id: "lola-13",
        type: "text",
        width: "1/2",
        content:
          "Personality is a token, not a config. Swapping who you\u2019re talking to should feel like loading a different program into a Commodore 64 \u2014 physical, tactile, visible. The current build uses NFC tags; the planned next build embeds them inside 3.5\u201d floppy disks.",
        order: 13,
      },
      {
        id: "lola-14",
        type: "text",
        width: "1/2",
        content:
          "The device is disposable. The soul lives in the cloud. If Lola\u2019s Pi dies, I can flash a new one in an hour and everything comes back from Firebase. The hardware is a vessel.",
        order: 14,
      },
      {
        id: "lola-15",
        type: "heading",
        width: "full",
        content: "Key design decisions",
        order: 15,
      },
      {
        id: "lola-16",
        type: "text",
        width: "full",
        content:
          "Hold-to-talk, not wake word. Every consumer voice assistant uses a wake word. Lola rejects it. The tradeoff was explicit: lose hands-free activation, gain an unambiguous privacy contract and a more satisfying interaction. Pressing the talk button feels like calling someone on a ship \u2014 you commit to the conversation, and when you let go, it\u2019s their turn.",
        order: 16,
      },
      {
        id: "lola-17",
        type: "text",
        width: "full",
        content:
          "The button press is also the earliest possible moment to start pre-warming the audio pipeline, DNS-resolving every upstream API, and opening Gemini/ElevenLabs sessions. By the time the user finishes speaking, everything downstream is already warm. This is how Lola hits 1.8 seconds when a typical smart speaker sits at 3\u20134.",
        order: 17,
      },
      {
        id: "lola-18",
        type: "text",
        width: "full",
        content:
          "Persona swap as physical act. Moving persona swap to an NFC tag changed the feel completely. Tap a tag, a welcome line plays in the new voice (\u201cLogan here, clocking in\u201d), and you are talking to a different entity. This is the piece that gets the strongest reaction from people who try it. It is also the piece that has the least to do with AI and the most to do with product design.",
        order: 18,
      },
      {
        id: "lola-19",
        type: "text",
        width: "1/2",
        content:
          "Sound design as the primary UI. Lola has no screen. The entire interface is audio: button-press click, button-release click, open/close chimes, error tones, boot announcement, persona welcome lines, the voice itself. Every one of these is a designed sound, generated from a 1964-era SFX seed so they all share sonic DNA.",
        order: 19,
      },
      {
        id: "lola-20",
        type: "text",
        width: "1/2",
        content:
          "Aggressive latency engineering. Sentence-level TTS pipelining, connection pre-warming on button press, DNS pre-resolved at boot, Firebase auth token caching, and an interaction abort system. None of this is visible in the product. Invisible engineering is what lets the visible design stay simple.",
        order: 20,
      },
      {
        id: "lola-21",
        type: "heading",
        width: "full",
        content: "What it demonstrates",
        order: 21,
      },
      {
        id: "lola-22",
        type: "text",
        width: "full",
        content:
          "The next interesting wave of AI products will not be better chat boxes. They will be objects. The technology is now cheap enough, fast enough, and good enough that the interesting work is no longer \u201cwhat can the model do\u201d \u2014 it\u2019s \u201cwhat should this thing be, physically, in the world.\u201d",
        order: 22,
      },
      {
        id: "lola-23",
        type: "text",
        width: "full",
        content:
          "Lola is my argument for that thesis in built form. Every decision \u2014 the antique housing, the hold-to-talk button, the physical persona tokens, the sub-2-second latency target, the cloud-backed soul in a disposable body \u2014 is in service of making an LLM feel like a thing you have a relationship with, rather than a service you submit requests to.",
        order: 23,
      },
      {
        id: "lola-24",
        type: "heading",
        width: "full",
        content: "Current state",
        order: 24,
      },
      {
        id: "lola-25",
        type: "text",
        width: "full",
        content:
          "The system is running in my home. It handles calendar, email, SMS, Google Drive document lookup, Firestore notes, and cross-device messaging to Apple Notes. It has two personas shipped (Lola and Logan), each with their own voice, speech style, and conversational history. Persona swap works today via standalone NFC tags. End-to-end latency sits around 1.8 seconds on a good WiFi connection.",
        order: 25,
      },
      {
        id: "lola-26",
        type: "text",
        width: "full",
        content:
          "Next on the bench: the floppy-disk cartridge build (NFC tags embedded inside real 3.5\u201d floppies, read by a PN532 mounted inside a repurposed floppy drive), NeoPixel state animations (idle, listening, thinking, speaking), and a move to websocket-based TTS streaming to push latency below 1.5 seconds.",
        order: 26,
      },
    ],
  },
  {
    slug: "meta-ar-glasses",
    title: "Meta",
    subtitle: "AR Glasses",
    discipline: "Experiences Product Design",
    thumbnail: "/images/projects/meta-ar.gif",
    protected: true,
    blocks: [],
  },
  {
    slug: "tripp-xr",
    title: "TRIPP",
    subtitle: "AI Wellness Guide",
    discipline: "Mobile and VR App Design",
    thumbnail: "/images/projects/tripp-kokua-vr.gif",
    blocks: [
      {
        id: "tripp-1",
        type: "heading",
        width: "full",
        content: "Using tech for good",
        order: 0,
      },
      {
        id: "tripp-2",
        type: "text",
        width: "full",
        content:
          "As Head of Product Design at TRIPP, I spearheaded the 0-1 design strategy and development effort to integrate conversational AI into our mobile app, VR app and audio smart glasses platforms. My mission was to bridge the gap between emerging technology and human-centric design, ensuring that AI served our mission of fostering global mental health.",
        order: 1,
      },
      {
        id: "tripp-3",
        type: "text",
        width: "full",
        content:
          'TRIPP is a family of leading mental wellness apps and "Kokua" is the name of the AI agent we shipped.',
        order: 2,
      },
      {
        id: "tripp-4",
        type: "text",
        width: "full",
        content:
          "Our AI-powered experience have gone on to win several awards, for both mobile and VR versions.",
        order: 3,
      },
      {
        id: "tripp-5",
        type: "text",
        width: "1/2",
        content:
          "Kokua is a Hawaiian word (our CEO was born on O'ahu) that means to give openly, without the expectation of anything in return. This served as a guiding principal for how we built Kokua AI, as an empathetic AI.",
        order: 4,
      },
      {
        id: "tripp-6",
        type: "text",
        width: "1/2",
        content:
          "Available on iOS & Android. Mobile audio-only experiences, for when you are on the go.",
        order: 5,
      },
      {
        id: "tripp-7",
        type: "text",
        width: "full",
        content:
          "Immersive experiences for AR/VR devices like Quest, Apple Vision Pro, PlayStation VR 2 and more.",
        order: 6,
      },
      {
        id: "tripp-8",
        type: "heading",
        width: "full",
        content: "Interaction prototypes",
        order: 7,
      },
      {
        id: "tripp-9",
        type: "text",
        width: "full",
        content:
          "Behind the scenes look at my design process while working on Kokua XR.",
        order: 8,
      },
      {
        id: "tripp-10",
        type: "credits",
        width: "full",
        items: [
          { role: "Head of Product Design", name: "Cody Char" },
        ],
        order: 9,
      },
    ],
  },
  {
    slug: "minecraft",
    title: "Minecraft",
    subtitle: "Experiential Retail",
    discipline: "3D Design & Animation",
    thumbnail: "/images/projects/minecraft.png",
    blocks: [
      {
        id: "mc-1",
        type: "heading",
        width: "full",
        content: "Minecraft — Experiential Design & 3D Animation",
        order: 0,
      },
      {
        id: "mc-2",
        type: "text",
        width: "full",
        content:
          "Minecon is an annual convention where Minecraft fans get to celebrate all things blocky. Since each Microsoft Store serves as a host for the event, we needed a general awareness campaign that could help get the word out.",
        order: 1,
      },
      {
        id: "mc-3",
        type: "text",
        width: "1/2",
        content:
          "Communicate the when/where of Minecon in a playful and Minecrafty way. Design general awareness assets for all video wall fixtures, in all Microsoft Stores.",
        order: 2,
      },
      {
        id: "mc-4",
        type: "text",
        width: "1/2",
        content:
          "Microsoft Stores are kind of like snow flakes - no two are exactly alike. But one quality they all have in common is a badass video wall system. With over sixty different store layouts, these video walls range from 1,920 pixels to 57,600 pixels (yup). To account for such large variation, I designed a set of modular assets, allowing me to tailor every deliverable around each unique store layout.",
        order: 3,
      },
      {
        id: "mc-5",
        type: "text",
        width: "full",
        content:
          "Minecraft is all about whimsey and adventure, so why not incorporate a little of that into this Minecon theme? To bring the video walls to life, we used characters from the game including the spider, ghast, sheep and chicken.",
        order: 4,
      },
      {
        id: "mc-6",
        type: "text",
        width: "full",
        content:
          "We originally had the chicken get squished by a TNT block but eventually saved it from being smooshed...",
        order: 5,
      },
      {
        id: "mc-7",
        type: "credits",
        width: "full",
        items: [
          { role: "Creative Director", name: "Florin Gale" },
          { role: "Senior Art Director", name: "Jay Prochaska" },
          { role: "Project Manager", name: "Rhiannon Thumma" },
          { role: "Concept & Storyboarding", name: "Cody Char" },
          { role: "Design & Animation", name: "Cody Char" },
          { role: "Copy Writer", name: "Kelsi Auld" },
          { role: "Sound Design", name: "Jonathan Warman" },
          { role: "MoJang Liaison", name: "Jeff Rivait" },
          {
            role: "Minecon Announcement Video",
            name: "Brikk (Stockholm, Sweden)",
          },
        ],
        order: 6,
      },
    ],
  },
  {
    slug: "renault",
    title: "Renault",
    subtitle: "Experiential Retail",
    discipline: "Microsoft Retail",
    thumbnail: "/images/projects/renault.jpg",
    blocks: [
      {
        id: "ren-1",
        type: "heading",
        width: "full",
        content: "Renault Sport — Formula One Racing",
        order: 0,
      },
      {
        id: "ren-2",
        type: "text",
        width: "full",
        content:
          "Renault Sport and Microsoft teamed up to push the limits of Formula One racing. This video wall theme celebrates that partnership. As a cherry on top, German Renault driver, Nico Hulkenberg will be visiting the Microsoft Store in Austin, TX to meet fans.",
        order: 1,
      },
    ],
  },
  {
    slug: "microsoft-retail-portal",
    title: "Microsoft",
    subtitle: "Retail Web Portal",
    discipline: "E-Commerce Design & Prototyping",
    thumbnail: "/images/projects/microsoft-portal.png",
    blocks: [
      {
        id: "portal-1",
        type: "heading",
        width: "full",
        content: "Microsoft Retail Portal — UX/UI Design Prototype",
        order: 0,
      },
      {
        id: "portal-2",
        type: "text",
        width: "full",
        content:
          "While working at Microsoft on the experiential retail team, I helped lead and prototype a redesign for our e-commerce web portal. The mission was to adopt Microsoft's 'Fluent Design' principals of light, depth, motion, material and scale. I built this prototype, which was showcased in an executive review, entirely in After Effects with a combination of manual keyframing and Python expressions.",
        order: 1,
      },
      {
        id: "portal-3",
        type: "credits",
        width: "full",
        items: [
          { role: "Design Director", name: "Benson Chan" },
          { role: "Creative Director", name: "Liliana Aguila" },
          { role: "Design Lead & Prototyper", name: "Cody Char" },
        ],
        order: 2,
      },
    ],
  },
  {
    slug: "microsoft-nyc",
    title: "Microsoft",
    subtitle: "NYC Projection Mapping",
    discipline: "Microsoft Retail",
    thumbnail: "/images/projects/microsoft-nyc.gif",
    blocks: [
      {
        id: "nyc-1",
        type: "heading",
        width: "full",
        content: "Art Transition Theme — Microsoft Store New York Flagship",
        order: 0,
      },
      {
        id: "nyc-2",
        type: "text",
        width: "full",
        content:
          "Microsoft's New York flagship store needed a way to transition between content on its enormous exterior LED matrix. Originally, the content just cross-faded. The ask was to design a more interesting way to transition. The final result uses animated screens, affixed to robot arms, that procedurally disassemble and resemble any content you add. The interior of the screens utilize some alpha channel trickery to create a reusable overlay. As a result, we no longer need to bake the animation in. Time is money and this asset saved us both!",
        order: 1,
      },
      {
        id: "nyc-3",
        type: "text",
        width: "full",
        content:
          "References of the New York Flagship's LED screen that this piece was designed for. Notice that the perspective lines of the content match the viewer's perspective of the fixture from the street.",
        order: 2,
      },
      {
        id: "nyc-4",
        type: "text",
        width: "full",
        content:
          "The above is a visualization of the alpha channel stages, showing how the animation transitions from A to B without ever needing to re-render.",
        order: 3,
      },
      {
        id: "nyc-5",
        type: "text",
        width: "full",
        content: "An early motion exploration for the robot panels.",
        order: 4,
      },
    ],
  },
  {
    slug: "microsoft-surface",
    title: "Microsoft Surface Studio",
    subtitle: "",
    discipline: "3D Design & Rendering",
    thumbnail: "/images/projects/surface.jpg",
    blocks: [
      {
        id: "surface-1",
        type: "heading",
        width: "full",
        content: "Microsoft Surface Studio — Product Renders",
        order: 0,
      },
      {
        id: "surface-2",
        type: "text",
        width: "full",
        content:
          "The Surface Studio is a gorgeous device and it deserves extra care when texturing and lighting it in 3D. Here are a few of the test renders I designed for the Studio on Microsoft Store video walls. Rendered using Cinema 4D and Octane.",
        order: 1,
      },
    ],
  },
];
