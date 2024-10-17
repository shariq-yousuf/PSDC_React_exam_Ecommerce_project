const Footer = () => {
  return (
    <footer className="relative z-50 bg-[#191F33]">
      <div className="flex flex-col items-center px-4 py-12">
        <div>
          <a
            className="mb-8 flex items-center justify-center gap-5 text-white"
            href="/"
          >
            <img alt="Logo" width="50" src="/react.svg" />
            <span className="text-3xl font-semibold tracking-wider">
              Ecommerce Store
            </span>
          </a>
          <p className="max-w-xl text-center text-lg font-medium text-white">
            Shop Today!
          </p>
        </div>
      </div>
      <div className="bg-[#2E3447]">
        <div className="px-3 py-3 text-center">
          <span className="text-[rgb(118,126,148)]">
            Coded with 💙 by{" "}
            <a
              href="https://shariq-dev.netlify.app"
              target="_blank"
              className="text-white"
            >
              Shariq{" "}
            </a>
            in Karachi
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
