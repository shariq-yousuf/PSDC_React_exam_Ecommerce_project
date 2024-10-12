import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginUser = () => {
  const navigate = useNavigate()

  const logInUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem("token", "true")
    navigate("/")
  }

  return (
    <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="/react.svg"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign In
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={logInUser}>
          {/* <!-- Email Field --> */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                //   autocomplete="email"
                required
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* <!-- Password Field --> */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                //   autocomplete="current-password"
                required
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* <!-- Additional Link --> */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginUser
