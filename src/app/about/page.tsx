export const metadata = {
  title: "About — Cody Char",
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-semibold tracking-tight md:text-5xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

function Chapter({
  period,
  company,
  role,
  children,
}: {
  period: string;
  company: string;
  role: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-border pt-10 md:grid-cols-[200px_1fr]">
      <div>
        <div className="text-sm text-muted">{period}</div>
        <div className="mt-1 text-lg font-semibold">{company}</div>
        <div className="text-sm text-muted">{role}</div>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-muted md:text-lg">
        {children}
      </div>
    </div>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-3 py-1 text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-3xl py-20 md:py-32">
        <p className="text-sm font-medium uppercase tracking-wider text-muted">
          About
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          I make advanced technology feel approachable, helpful, and human.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
          I&apos;m a hands-on design leader with 12 years in tech and 7+ years
          specializing in XR. I&apos;ve shipped AR glasses at Meta, an
          award-winning AI wellness coach at TRIPP, and experiential retail
          across 116 Microsoft Stores. I&apos;m drawn to the
          &lsquo;un-googleable&rsquo; &mdash; high-ambiguity spaces where there
          are no easy blueprints for success.
        </p>
      </section>

      {/* ===== STATS ===== */}
      <section className="mx-auto max-w-3xl border-t border-border py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <Stat value="12" label="Years in tech" />
          <Stat value="4" label="Patents filed" />
          <Stat value="$800K+" label="Grant funding secured" />
          <Stat value="25M+" label="Addressable users shipped to" />
        </div>
      </section>

      {/* ===== CAREER STORY ===== */}
      <section className="mx-auto max-w-3xl space-y-16 pb-20">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-muted">
            Career
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            The work, in reverse
          </h2>
        </div>

        <Chapter
          period="2023 — Present"
          company="TRIPP"
          role="Principal Product Designer"
        >
          <p>
            Led the 0-to-1 design and development of K&#333;kua, an
            award-winning AI wellness coach shipped across VR, mobile, and audio
            smart glasses. Conceived the product strategy, designed the
            conversational AI experience, and built interaction prototypes that
            defined how an empathetic AI agent should feel in immersive
            environments.
          </p>
          <p>
            Partnered with executive leadership to pitch and secure over $800K
            in grant funding from Meta, Google, and Apple. Led cross-platform
            delivery to Meta Quest, Apple Vision Pro, Samsung Galaxy XR, and
            PlayStation VR2 &mdash; expanding TRIPP&apos;s total addressable
            device reach by ~25% to 25M+ users.
          </p>
          <p>
            Managed and mentored a team of UX, content, visual, and intern
            designers. Led development of Sound Bath VR, a music creation game
            featuring novel spatial interactions. K&#333;kua went on to win the
            2025 XR Award for Best Use of AI and the Aurea Award.
          </p>
        </Chapter>

        <Chapter
          period="2018 — 2023"
          company="Meta Reality Labs"
          role="Product Designer"
        >
          <p>
            Defined and hardened the north-star UX vision and product
            requirements for two AR devices: Meta Orion and Ray-Ban Stories.
            Worked at the intersection of industrial design, engineering, and
            user research to validate hero use cases, shell interactions, and
            core hardware assumptions &mdash; presenting takeaways directly to
            leadership.
          </p>
          <p>
            Built reusable cross-platform interaction frameworks for AR glasses
            with multimodal inputs: voice, gaze, hand tracking, and
            peripherals, all indexed on user comfort. Defined the visual
            language for Orion, working within extreme constraints &mdash; FOV,
            brightness, color gamut, GPU budget, hand tracking latency, and
            platform interoperability.
          </p>
          <p>
            Launched Spatial Anchors and developer components for Meta&apos;s XR
            SDKs, APIs, and Design Style Guides. Collaborated with world-class
            theme park and museum partners to bring AR/VR experiences to
            high-profile spaces. Filed three patents in AR interaction and
            communication design.
          </p>
        </Chapter>

        <Chapter
          period="2016 — 2018"
          company="Microsoft"
          role="Sr. 3D Artist"
        >
          <p>
            Conceived and designed 3D motion and real-time interactive content
            for complex video wall arrays across all 116 Microsoft Store and
            flagship retail locations &mdash; from 1,920 pixels wide to 57,600
            pixels wide.
          </p>
          <p>
            Partnered with engineers to create system designs for CRISP, a
            distributed rendering and content delivery pipeline that enabled
            artists to publish once and deploy across every video wall
            configuration. Designed the NYC Flagship Store&apos;s exterior LED
            transition system using procedural robot-arm animations with alpha
            channel compositing.
          </p>
        </Chapter>

        <Chapter
          period="2015 — 2020"
          company="Cinema 4D Seattle"
          role="Founder & Lead Organizer"
        >
          <p>
            Founded and ran a monthly meetup community for 3D artists and motion
            designers in the Pacific Northwest. Hosted talks from industry
            professionals including Beeple. Grew the community to 400+ members
            over five years.
          </p>
        </Chapter>

        <Chapter
          period="2013 — 2016"
          company="University of Washington"
          role="Staff Video Producer"
        >
          <p>
            Led university-wide video marketing strategy for fundraising, public
            relations, and student recruitment. Shot and produced over 30 video
            stories for broadcast, YouTube, live events, and official social
            channels. Managed a team of 2 interns and 1 student worker.
          </p>
        </Chapter>
      </section>

      {/* ===== PATENTS & HONORS ===== */}
      <section className="mx-auto max-w-3xl border-t border-border py-16">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
              Patents
            </h2>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <span className="text-sm text-muted">Meta &mdash;</span>{" "}
                Glints
              </li>
              <li>
                <span className="text-sm text-muted">Meta &mdash;</span>{" "}
                Artificial Reality Communications
              </li>
              <li>
                <span className="text-sm text-muted">Meta &mdash;</span>{" "}
                Representations in Artificial Reality
              </li>
              <li>
                <span className="text-sm text-muted">TRIPP &mdash;</span>{" "}
                Volley: Spatialized AI Turn Taking
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
              Honors
            </h2>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <span className="font-medium">XR Award 2025</span>
                <br />
                <span className="text-sm text-muted">
                  Best Use of AI &mdash; K&#333;kua XR
                </span>
              </li>
              <li>
                <span className="font-medium">Aurea Award 2025</span>
                <br />
                <span className="text-sm text-muted">
                  Winner &mdash; K&#333;kua AI
                </span>
              </li>
              <li>
                <span className="font-medium">MIT Reality Hack 2026</span>
                <br />
                <span className="text-sm text-muted">Judge</span>
              </li>
              <li>
                <span className="font-medium">XR Design Challenge 2025</span>
                <br />
                <span className="text-sm text-muted">Judge</span>
              </li>
              <li>
                <span className="font-medium">UW XR Speaker Series</span>
                <br />
                <span className="text-sm text-muted">
                  &ldquo;Why XR is Best Served with Potatoes&rdquo;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="mx-auto max-w-3xl border-t border-border py-16">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-wider text-muted">
          Core Skills
        </h2>
        <div className="space-y-8">
          <SkillGroup
            title="Leadership"
            skills={[
              "Team Management",
              "North Star Visions",
              "Public Speaking",
              "Executive Presentations",
              "Cross-functional Collaboration",
            ]}
          />
          <SkillGroup
            title="Product & Interaction Design"
            skills={[
              "Spatial UX",
              "Prototyping",
              "Systems Thinking",
              "User Research",
              "AI Conversational Design",
              "Motion Design",
              "Storyboarding",
              "Wireframes",
              "Journeys & Flows",
            ]}
          />
          <SkillGroup
            title="Design Tools"
            skills={[
              "Figma",
              "Whimsical",
              "Tableau",
              "Adobe Suite",
              "Gemini",
              "ChatGPT",
              "Google AI Studio",
              "Midjourney",
            ]}
          />
          <SkillGroup
            title="Prototyping & 3D"
            skills={[
              "Unity (C#)",
              "Shapes XR",
              "Cinema 4D",
              "Blender",
              "Redshift",
              "After Effects",
              "Rive",
              "ElevenLabs",
              "Meshy",
              "World Labs",
              "Three.js",
              "Babylon.js",
            ]}
          />
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="mx-auto max-w-3xl border-t border-border py-16">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
          Education
        </h2>
        <div className="mt-4">
          <div className="text-lg font-medium">University of Washington</div>
          <div className="text-muted">
            BA, Media &amp; Communication &mdash; 2013
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="mx-auto max-w-3xl border-t border-border py-16 pb-24">
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
          Get in touch
        </h2>
        <p className="mt-4 text-lg">
          <a
            href="mailto:codychar@gmail.com"
            className="text-accent hover:underline"
          >
            codychar@gmail.com
          </a>
        </p>
        <p className="mt-2 text-sm text-muted">
          Best reached via email or{" "}
          <a
            href="https://www.linkedin.com/in/cody-char-01736955/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn DM
          </a>
          .
        </p>
      </section>
    </div>
  );
}
