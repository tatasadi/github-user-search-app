"use client"
import { Input } from "./ui/input"
import Image from "next/image"
import iconSearch from "../../public/icon-search.svg"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { useCallback, useEffect } from "react"
import { getGithubUser } from "../actions"
import CustomLink from "./custom-link"
import Stat from "./stat"
import IconLocation from "./icons/icon-location"
import IconCompany from "./icons/icon-company"
import IconTwitter from "./icons/icon-twitter"
import IconLink from "./icons/icon-link"
import { Skeleton } from "./ui/skeleton"
import errorImage from "@/public/error.avif"
import { useQuery } from "@tanstack/react-query"

type Inputs = {
  username: string
}

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "octocat",
    },
  })
  const username = watch("username")

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["githubUser", username],
    queryFn: async () => getGithubUser(username),
    enabled: false,
  })

  const onSubmit = useCallback(
    async ({ username }: { username: string }) => {
      refetch()
    },
    [refetch],
  )

  useEffect(() => {
    onSubmit({ username: "octocat" })
  }, [onSubmit])

  return (
    <div className="mt-9 flex flex-col items-center justify-between">
      <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
        <div className="absolute bottom-0 left-0 top-0 px-4 py-[1.44rem] sm:px-8">
          <Image src={iconSearch} alt="Search" />
        </div>
        <Input
          type="search"
          placeholder="Search GitHub username..."
          className="pl-12 pr-[8rem] sm:pl-20"
          {...register("username", { required: "Enter username" })}
        />
        <div className="absolute bottom-0 right-0 top-0 flex items-center gap-6 px-2 py-[0.59rem]">
          {errors.username && (
            <p className="mt-1 text-[0.9375rem] font-bold text-red">
              {errors.username.message}
            </p>
          )}
          <Button variant="default" className="" type="submit">
            Search
          </Button>
        </div>
      </form>
      <section className="mt-4 grid w-full grid-cols-[auto_1fr] gap-3 rounded-[0.9375rem] bg-white px-6 pb-12 pt-8 shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:bg-deep-blue dark:shadow-none sm:mt-6 sm:gap-x-10 sm:p-12">
        {isLoading ? (
          <div className="col-span-2 flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : isError ? (
          <div className="col-span-2 flex flex-col items-center gap-10">
            <pre className="mt-4 text-center text-red">
              {error.message.includes("404") ? "User not found" : error.message}
            </pre>
            <Image src={errorImage} alt="Error" />
          </div>
        ) : data ? (
          <>
            <div className="lg:row-span-2">
              <Image
                src={data.avatar_url}
                alt="Avatar"
                width={100}
                height={100}
                className="h-[4.375rem] w-[4.375rem] rounded-full sm:h-[7.3125rem] sm:w-[7.3125rem]"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div>
                <h2 className="heading-xl text-charcoal dark:text-white">
                  {data.name || `@${data.login}`}
                </h2>
                <p className="text-bright-blue">@{data.login}</p>
              </div>
              <p className="text-[0.9375rem] text-slate-gray dark:text-white">
                Joined{" "}
                {new Date(data.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="col-span-2 lg:col-span-1 lg:col-start-2">
              {data.bio || "This profile has no bio"}
            </p>
            <div className="col-span-2 mt-2 grid grid-cols-3 rounded-[0.625rem] bg-lightest-blue px-4 py-[1rem] dark:bg-dark-blue sm:px-8 lg:col-span-1 lg:col-start-2">
              <Stat label="Repos" value={data.public_repos} />
              <Stat label="Followers" value={data.followers} />
              <Stat label="Following" value={data.following} />
            </div>
            <div className="col-span-2 mt-6 grid grid-cols-1 place-items-start gap-4 sm:grid-cols-2 lg:col-span-1 lg:col-start-2 lg:gap-x-14">
              <CustomLink
                text={data.location}
                isNotAvailable={data.location === null}
              >
                <IconLocation />
              </CustomLink>
              <CustomLink
                text={data.blog}
                isLink={true}
                className="sm:col-start-1"
                isNotAvailable={data.blog === null || data.blog === ""}
              >
                <IconLink />
              </CustomLink>
              <CustomLink
                text={data.twitter_username}
                className="sm:col-start-2 sm:row-start-1"
                isNotAvailable={data.twitter_username === null}
              >
                <IconTwitter />
              </CustomLink>
              <CustomLink
                text={data.company}
                isNotAvailable={data.company === null}
              >
                <IconCompany />
              </CustomLink>
            </div>
          </>
        ) : (
          <p>
            Type in a username and click &apos;Search&apos; to begin your
            search!
          </p>
        )}
      </section>
    </div>
  )
}

export default UserProfile
