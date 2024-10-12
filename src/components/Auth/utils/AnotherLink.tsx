import { Link } from "react-router-dom"

const AnotherLink = ({ title, text }: { title: string; text: string }) => {
  return (
    <p className="mt-6 text-center text-sm text-gray-500">
      {text}{" "}
      <Link
        to={"/" + title.toLowerCase()}
        className="font-medium text-indigo-600 hover:text-indigo-500"
      >
        {title}
      </Link>
    </p>
  )
}

export default AnotherLink
