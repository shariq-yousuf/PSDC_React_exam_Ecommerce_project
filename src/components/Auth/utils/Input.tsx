import { ChangeEvent } from "react"

const Input = ({
  label,
  type,
  name,
  value,
  handleChange,
}: {
  label: string
  type: string
  name: string
  value: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={type}
          required
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  )
}

export default Input
