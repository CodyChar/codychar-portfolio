export const metadata = {
  title: "About — Cody Char",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20">
      <section className="mx-auto max-w-2xl py-16 md:py-24">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          About
        </h1>

        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          <p>
            Hi, I&apos;m a hands-on design leader with 12 years in tech.
            I&apos;ve worked at large corporations like Microsoft / Meta and
            small startups like TRIPP.
          </p>
          <p>
            I&apos;m drawn to the &lsquo;un-googleable,&rsquo; specialize in
            leading teams through high-ambiguity spaces where there are no easy
            blueprints for success.
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            Get in touch
          </h2>
          <div className="mt-4 space-y-2 text-base">
            <p>
              <a
                href="mailto:codychar@gmail.com"
                className="text-accent hover:underline"
              >
                codychar@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted">
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
          </div>
        </div>
      </section>
    </div>
  );
}
