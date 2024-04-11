"use client"
import { Input } from "./ui/input"
import Image from "next/image"
import iconSearch from "../../public/icon-search.svg"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { useGitHubUser } from "../contexts/github-user-context"
import { useCallback, useEffect } from "react"
import { getGithubUser } from "../actions"

type Inputs = {
  username: string
}

const Search = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const username = watch("username")
  const { setUserData, setIsLoading, setResponseError } = useGitHubUser()

  const onSubmit = useCallback(
    async ({ username }: { username: string }) => {
      setIsLoading(true)
      setResponseError("")
      try {
        const data = await getGithubUser(username)
        setUserData(data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        if (error instanceof Error && error.message.includes("404")) {
          setResponseError("User not found")
        } else {
          setResponseError("An error occurred")
        }
        setUserData(null)
      }
    },
    [setIsLoading, setResponseError, setUserData],
  )

  useEffect(() => {
    onSubmit({ username: "octocat" })
  }, [onSubmit])

  useEffect(() => {
    setResponseError("")
  }, [setResponseError, username])

  return (
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
      <div className="absolute bottom-0 right-0 top-0 flex items-center gap-6 px-4 py-[0.59rem]">
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
  )
}

export default Search
