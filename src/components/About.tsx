import packageJson from "../../package.json";

export default function About() {
  return (
    <div className="animate-fadeInUp mx-auto max-w-2xl py-10 opacity-70 sm:py-10 lg:py-10">
      <div className="text-center">
        <div className="rounded-lg bg-transparent p-2 text-white shadow-xl">
          <h1 className="mb-4 text-left text-3xl font-bold">
            <svg
              className="mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote className="text-xxl pb-2 font-semibold italic">
              Hi there! I’m{" "}
              <span className="text-blue-500">{packageJson.author.name}</span>
            </blockquote>
          </h1>
          <p className="max-w-lg text-xl leading-relaxed">
            {packageJson.author.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
