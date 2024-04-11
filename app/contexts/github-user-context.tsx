"use client"
import React, { createContext, useContext, useState } from "react"

const GitHubUserContext = createContext(null)

export const useGitHubUser = () => useContext(GitHubUserContext)

export const GitHubUserProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [responseError, setResponseError] = useState(null)

  return (
    <GitHubUserContext.Provider
      value={
        {
          userData,
          setUserData,
          isLoading,
          setIsLoading,
          responseError,
          setResponseError,
        } as any
      }
    >
      {children}
    </GitHubUserContext.Provider>
  )
}
