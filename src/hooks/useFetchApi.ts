const useFetchApi = async (url: string) => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error("Fetch error:", error)
  }
}

export default useFetchApi
