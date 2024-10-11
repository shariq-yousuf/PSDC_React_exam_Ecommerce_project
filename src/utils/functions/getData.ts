import useFetchApi from "../../hooks/useFetchApi"

const getData = async (url: string, setData: any) => {
  const data = await useFetchApi(url)
  setData(data)
}

export default getData
