import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import AnotherLink from "./utils/AnotherLink"
import Button from "./utils/Button"
import Logo from "./utils/Logo"
import Input from "./utils/Input"

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
      <Logo text="Sign up for your account" />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-4" onSubmit={createUser}>
          {/* <!-- Name Field --> */}
          <Input
            label="Your Name"
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />

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

          {/* <!-- Confirm Password Field --> */}
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={handleChange}
          />

          {password !== confirmPassword && (
            <p className="p-0 text-sm text-red-600">Passwords do not match</p>
          )}

          {/* <!-- Submit Button --> */}
          <Button text="Sign Up" />
        </form>

        {/* <!-- Additional Link --> */}
        <AnotherLink title="Login" text="Already have an account?" />
      </div>
    </div>
  )
}

export default CreateUser
