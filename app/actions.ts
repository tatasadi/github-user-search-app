"use server"

export async function getGithubUser(username: string) {
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
    return data
  } catch (error) {
    throw error // Rethrow after logging or handle differently if needed
  }
}
