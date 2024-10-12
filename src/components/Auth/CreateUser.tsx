import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { name, email, password, confirmPassword } = formData
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const createUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password === confirmPassword) {
      localStorage.setItem("token", "true")
      navigate("/")
    }
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
          Sign up for your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={createUser}>
          {/* <!-- Name Field --> */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                type="text"
                required
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
          </div>

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
                required
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={handleChange}
                value={email}
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
                required
                className={`block w-full rounded-md border ${
                  password !== confirmPassword
                    ? "border-2 border-red-500"
                    : "border-gray-300"
                } px-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-indigo-500 sm:text-sm`}
                onChange={handleChange}
                value={password}
              />
            </div>
          </div>

          {/* <!-- Confirm Password Field --> */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                required
                className={`block w-full rounded-md border ${
                  password !== confirmPassword
                    ? "border-2 border-red-500"
                    : "border-gray-300"
                } px-3 py-2 text-gray-900 shadow-sm outline-none focus:ring-indigo-500 sm:text-sm`}
                onChange={handleChange}
                value={confirmPassword}
              />
            </div>
            {password !== confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                Passwords do not match
              </p>
            )}
          </div>

          {/* <!-- Submit Button --> */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>

        {/* <!-- Additional Link --> */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CreateUser
