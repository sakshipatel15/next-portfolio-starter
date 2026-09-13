import packageJson from "../../package.json";

export default function About() {
  return (
    <section className="animate-fadeInUp mx-auto max-w-2xl py-8 opacity-90">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--brand)]">
          Software &amp; App Developer
        </p>
        <h1 className="mb-4 text-left text-3xl font-bold leading-tight sm:text-4xl">
          Hi, I&apos;m{" "}
          <span className="text-[var(--brand)]">{packageJson.author.name}</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          {packageJson.author.bio}
        </p>
      </div>
    </section>
  );
}
