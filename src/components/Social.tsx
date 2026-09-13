import packageJson from "../../package.json";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Social() {
  const portfolioUrl =
    "portfolio" in packageJson.author
      ? String((packageJson.author as { portfolio?: string }).portfolio)
      : packageJson.homepage;

  return (
    <header className="z-10 flex w-full max-w-3xl flex-col items-center gap-5 bg-transparent px-4 pb-2 pt-8">
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a
          className="flex items-center gap-2 text-sm text-white/90 transition hover:text-[var(--brand)]"
          href={packageJson.author.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 text-sm text-white/90 transition hover:text-[var(--brand)]"
          href={packageJson.author.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 text-sm text-white/90 transition hover:text-[var(--brand)]"
          href={`mailto:${packageJson.author.email}`}
        >
          <MdAlternateEmail />
          Email
        </a>
      </nav>
      <a
        href={portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[color-mix(in_srgb,var(--brand)_35%,transparent)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[#0a0612]"
      >
        <HiOutlineExternalLink />
        View live portfolio
      </a>
    </header>
  );
}
