import { ChangeEvent } from "react"

const EmailInput = ({
  value,
  handleChange,
}: {
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
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
          value={value}
        />
      </div>
    </div>
  )
}

export default EmailInput
