import packageJson from "../../package.json";
import { FaLinkedin, FaRegFileCode } from "react-icons/fa";
//import { FaRegFileCode } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    //flex-col space-x-0
    <header className="z-10 flex w-full flex-col items-center justify-center space-x-0 space-x-8 bg-transparent p-8 md:flex-row md:space-x-8 md:p-8">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={packageJson.author.linkedIn} // TODO: A resume.pdf could be used here.
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRegFileCode />
        Resume
      </a>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={packageJson.author.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        GitHub
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={packageJson.author.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        LinkedIn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href={"mailto:" + packageJson.author.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdAlternateEmail />
        {packageJson.author.email}
      </a>
      <a
        href={packageJson.author.url}
        style={{ maxWidth: "270px" }}
        className="block rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="me-2 inline h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        {packageJson.author.like}
      </a>
    </header>
  );
}
