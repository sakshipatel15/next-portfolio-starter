import { mappedSkills } from "@/constants";

export default function Skills() {
  return (
    <section className="z-10 flex w-full max-w-3xl flex-col items-center gap-6 px-4 pb-10">
      <h2 className="rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white">
        Skills
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-6 md:gap-8">
        {mappedSkills.map((skill) => (
          <div
            key={skill.name}
            className="group flex cursor-default flex-col items-center"
          >
            <div className="mb-2 text-3xl text-white/90 transition duration-300 group-hover:scale-110 group-hover:text-[var(--brand)]">
              {skill.icon}
            </div>
            <span className="text-xs text-white/65 sm:text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
