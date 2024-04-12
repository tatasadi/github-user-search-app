import { ModeToggle } from "./components/mode-toggle"
import UserProfile from "./components/user-profile"

export default function Home() {
  return (
    <div className="paragraph w-full max-w-[48.5rem] px-6 py-8 lg:mt-28">
      <header className="flex justify-between">
        <h1 className="heading-xl text-dark dark:text-white">devfinder</h1>
        <ModeToggle />
      </header>
      <main>
        <UserProfile />
      </main>
    </div>
  )
}
