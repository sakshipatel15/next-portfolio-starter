import About from "@/components/About";
import Skills from "@/components/Skills";
import Social from "@/components/Social";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-2 px-4 pb-8 pt-4">
      <Social />
      <main className="row-start-2 flex w-full flex-col items-center gap-8">
        <About />
        <Skills />
      </main>
      <footer className="row-start-3 pb-2 text-center text-xs text-white/45">
        Built by Sakshi Patel · Open source under MIT
      </footer>
    </div>
  );
}
