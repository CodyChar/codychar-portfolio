export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-8 md:px-12 lg:px-20">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>&copy; {new Date().getFullYear()} Cody Char</span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/cody-char-01736955/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/codychar.xr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
