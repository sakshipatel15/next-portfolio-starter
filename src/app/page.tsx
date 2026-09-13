import About from "@/components/About";
import Skills from "@/components/Skills";
import Social from "@/components/Social";
export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-4 p-4 pb-2 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Social />
        <About />
        <Skills />
      </main>
    </div>
  );
}
