"use client"
import CustomLink from "./components/custom-link"
import { ModeToggle } from "./components/mode-toggle"
import Search from "./components/search"
import Stat from "./components/stat"
import IconLocation from "./components/icons/icon-location"
import IconCompany from "./components/icons/icon-company"
import IconTwitter from "./components/icons/icon-twitter"
import IconLink from "./components/icons/icon-link"
import { useGitHubUser } from "./contexts/github-user-context"
import Image from "next/image"

export default function Home() {
  const { userData } = useGitHubUser()
  return (
    <div className="paragraph w-full max-w-[45.625rem] px-6 py-8">
      <header className="flex justify-between">
        <h1 className="heading-xl text-dark dark:text-white">devfinder</h1>
        <ModeToggle />
      </header>
      <main className="mt-9 flex flex-col items-center justify-between">
        <Search />
        {userData && (
          <section className="mt-4 grid w-full grid-cols-[auto_1fr] gap-5 rounded-[0.9375rem] bg-white px-6 pb-12 pt-8 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-deep-blue dark:shadow-none sm:mt-6 sm:gap-x-10 sm:p-12">
            <div>
              <Image
                src={userData.avatar_url}
                alt="Avatar"
                width={100}
                height={100}
                className="h-[4.375rem] w-[4.375rem] rounded-full sm:h-[7.3125rem] sm:w-[7.3125rem]"
              />
            </div>
            <div className="grid grid-cols-1 place-items-start lg:grid-cols-2">
              <h2 className="heading-xl text-charcoal dark:text-white">
                {userData.name}
              </h2>
              <p className="text-bright-blue lg:row-start-2">
                @{userData.login}
              </p>
              <p className="text-slate-gray dark:text-white lg:place-self-end">
                Joined{" "}
                {new Date(userData.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="col-span-2 lg:col-span-1 lg:col-start-2">
              {userData.bio}
            </p>
            <div className="col-span-2 grid grid-cols-3 rounded-[0.625rem] bg-lightest-blue px-4 py-[1.19rem] dark:bg-dark-blue sm:px-8 lg:col-span-1 lg:col-start-2">
              <Stat label="Repos" value={userData.public_repos} />
              <Stat label="Followers" value={userData.followers} />
              <Stat label="Following" value={userData.following} />
            </div>
            <div className="col-span-2 grid grid-cols-1 place-items-start gap-4 sm:grid-cols-2 lg:col-span-1 lg:col-start-2">
              <CustomLink
                text={userData.location}
                isNotAvailable={userData.location === null}
              >
                <IconLocation />
              </CustomLink>
              <CustomLink
                text={userData.blog}
                isLink={true}
                className="sm:col-start-1"
                isNotAvailable={userData.blog === null}
              >
                <IconLink />
              </CustomLink>
              <CustomLink
                text={userData.twitter_username}
                className="sm:col-start-2 sm:row-start-1"
                isNotAvailable={userData.twitter_username === null}
              >
                <IconTwitter />
              </CustomLink>
              <CustomLink
                text={userData.company}
                isNotAvailable={userData.company === null}
              >
                <IconCompany />
              </CustomLink>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
