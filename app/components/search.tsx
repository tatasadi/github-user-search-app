"use client"
import { Input } from "./ui/input"
import Image from "next/image"
import iconSearch from "../../public/icon-search.svg"
import { Button } from "./ui/button"
import { SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import { useGitHubUser } from "../contexts/github-user-context"
import { useCallback, useEffect } from "react"

type Inputs = {
  username: string
}

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const { setUserData } = useGitHubUser()

  const onSubmit = useCallback(
    async ({ username }) => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`,
        )
        setUserData(response.data)
      } catch (error) {
        console.error("Error fetching user data:", error)
        setUserData(null)
      }
    },
    [setUserData],
  )

  useEffect(() => {
    onSubmit({ username: "octocat" })
  }, [onSubmit])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
      <div className="absolute bottom-0 left-0 top-0 px-4 py-[1.44rem] sm:px-8">
        <Image src={iconSearch} alt="Search" />
      </div>
      <Input
        type="search"
        placeholder="Search GitHub username..."
        className="pl-12 pr-[8rem] sm:pl-20"
        {...register("username", { required: true })}
      />
      <div className="absolute bottom-0 right-0 top-0 flex items-center gap-6 px-[0.63rem] py-[0.59rem]">
        <p className="mt-1 text-[0.9375rem] font-bold text-red"></p>
        <Button variant="default" className="" type="submit">
          Search
        </Button>
      </div>
    </form>
  )
}

export default Search
