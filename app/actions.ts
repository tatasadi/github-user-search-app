"use server"

export async function getGithubUser(username: string) {
  console.log("getGithubUser called with username:", username)

  const url = `https://api.github.com/users/${username}`
  const options = {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      // Handle HTTP errors
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`,
      )
    }
    const data = await response.json()
    console.log("getGithubUser response:", data)
    return data
  } catch (error) {
    console.error("Error fetching user data:", error)
    throw error // Rethrow after logging or handle differently if needed
  }
}
