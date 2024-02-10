import Image from "next/image"

import BigButton from "@/components/BigButton"


export default function Home() {

  return <>
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo-wording.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <BigButton
        href="/courses"
        title="Courses"
        description="Find in-depth information about Next.js features and API."
      />

      <BigButton
        href="subjects"
        title="Subjects"
        description="Learn about Next.js in an interactive course with quizzes!"
      />

      <BigButton
        href="/modules"
        title="Modules"
        description="Explore starter templates for Next.js."
      />

      <BigButton
        href="/activities"
        title="Activities"
        description="Instantly deploy your Next.js site to a shareable URL with Vercel."
      />
    </div>
  </>
}
