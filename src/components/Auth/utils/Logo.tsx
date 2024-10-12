const Logo = ({ text }: { text: string }) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        className="mx-auto h-10 w-auto"
        src="/react.svg"
        alt="Your Company"
      />
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        {text}
      </h2>
    </div>
  )
}

export default Logo
