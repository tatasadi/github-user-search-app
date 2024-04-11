import CustomLink from "./components/custom-link"
import { ModeToggle } from "./components/mode-toggle"
import Search from "./components/search"
import Stat from "./components/stat"
import IconLocation from "./components/icons/icon-location"
import IconCompany from "./components/icons/icon-company"
import IconTwitter from "./components/icons/icon-twitter"
import IconLink from "./components/icons/icon-link"

export default function Home() {
  return (
    <div className="paragraph w-full max-w-[45.625rem] px-6 py-8">
      <header className="flex justify-between">
        <h1 className="heading-xl text-dark dark:text-white">devfinder</h1>
        <ModeToggle />
      </header>
      <main className="mt-9 flex flex-col items-center justify-between">
        <Search error="" username="" />
        <section className="mt-4 grid w-full grid-cols-[auto_1fr] gap-5 rounded-[0.9375rem] bg-white px-6 pb-12 pt-8 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-deep-blue dark:shadow-none sm:mt-6 sm:p-12">
          <div>icon</div>
          <div className="grid grid-cols-1 place-items-start lg:grid-cols-2">
            <h2 className="heading-xl text-charcoal dark:text-white">
              The Octocat
            </h2>
            <p className="text-bright-blue lg:row-start-2">@octocat</p>
            <p className="text-slate-gray dark:text-white lg:place-self-end">
              Joined 25 Jan 2011
            </p>
          </div>
          <p className="col-span-2 lg:col-span-1 lg:col-start-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
          <div className="col-span-2 grid grid-cols-3 rounded-[0.625rem] bg-lightest-blue px-4 py-[1.19rem] dark:bg-dark-blue sm:px-8 lg:col-span-1 lg:col-start-2">
            <Stat label="Repos" value="8" />
            <Stat label="Followers" value="3938" />
            <Stat label="Following" value="9" />
          </div>
          <div className="col-span-2 grid  grid-cols-1 place-items-start gap-4 sm:grid-cols-2 lg:col-span-1 lg:col-start-2">
            <CustomLink text="San Francisco">
              <IconLocation />
            </CustomLink>
            <CustomLink
              text="https://github.blog"
              isLink={true}
              className="sm:col-start-1"
            >
              <IconLink />
            </CustomLink>
            <CustomLink
              isNotAvailable={true}
              className="sm:col-start-2 sm:row-start-1"
            >
              <IconTwitter />
            </CustomLink>
            <CustomLink text="@github">
              <IconCompany />
            </CustomLink>
          </div>
        </section>
      </main>
    </div>
  )
}
