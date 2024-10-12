import SideSection from "../../components/Auth/SideSection"
import CreateUser from "../../components/Auth/CreateUser"

const Signup = () => {
  return (
    <div className="flex min-h-screen">
      {/* <!-- Left side: Signup Form --> */}
      <CreateUser />

      {/* <!-- Right side: Additional content (e.g., features or images) --> */}
      <SideSection />
    </div>
  )
}

export default Signup
