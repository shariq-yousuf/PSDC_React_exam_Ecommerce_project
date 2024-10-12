import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import AnotherLink from "./utils/AnotherLink"
import Button from "./utils/Button"
import Logo from "./utils/Logo"
import Input from "./utils/Input"

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
  const navigate = useNavigate()

  const logInUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem("token", "true")
    navigate("/")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
      <Logo text="Sign in to your account" />

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" onSubmit={logInUser}>
          {/* <!-- Email Field --> */}
          <Input
            label="Email address"
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />

          {/* <!-- Password Field --> */}
          <Input
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
          />

          {/* <!-- Submit Button --> */}
          <Button text="Sign In" />
        </form>

        {/* <!-- Additional Link --> */}
        <AnotherLink text="Don't have an account?" title="Sign up" />
      </div>
    </div>
  )
}

export default LoginUser
