import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex sticky top-2">
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <Link
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo.svg"
          alt="Hypatia Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority />
      </Link>
    </div>
    <nav className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <ul className="flex flex-wrap">
        <li className="px-1">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="px-1">
          <Link href="/courses">Courses</Link>
        </li>
        <li className="px-1">
          <Link href="/subjects">Subjects</Link>
        </li>
      </ul>
    </nav>
  </div>
}
