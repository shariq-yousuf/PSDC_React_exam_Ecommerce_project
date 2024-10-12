import LoginUser from "../../components/Auth/LoginUser"
import SideSection from "../../components/Auth/SideSection"

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* <!-- Left side: Login Form --> */}
      <LoginUser />

      {/* <!-- Right side: Additional content (e.g., features or images) --> */}
      <SideSection />
    </div>
  )
}

export default Login
