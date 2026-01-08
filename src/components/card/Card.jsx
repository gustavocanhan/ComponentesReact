export default function Card() {
  return (
    <div className="flex flex-col border border-muted-foreground/10 rounded-md p-6 bg-card shadow-md gap-2 md:w-sm">
      <header className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm pb-2">Login to your account</p>
          <p className="text-muted-foreground text-sm">
            Enter your email below to login to <br /> your account
          </p>
        </div>
        <p className="text-sm cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-[width] after:duration-300 hover:after:w-full">
          Sign Up
        </p>
      </header>
      <main className="flex flex-col">
        <label className="flex flex-col gap-1 py-2 text-sm">
          Email
          <input
            type="email"
            className="w-full border border-muted-foreground/10 shadow-sm rounded-md py-1.5 px-2 placeholder:text-muted-foreground/80 bg-card-foreground"
            placeholder="m@example.com"
          />
        </label>
        <label className="flex flex-col gap-1 py-2 text-sm">
          <div className="flex justify-between items-center pb-1">
            <p>Password</p>
            <p className="cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-[width] after:duration-300 hover:after:w-full">
              Forgot your password?
            </p>
          </div>
          <input
            type="password"
            className="w-full border border-muted-foreground/10 shadow-sm rounded-md py-1.5 px-2 placeholder:text-muted-foreground/80 bg-card-foreground"
          />
        </label>
      </main>
      <footer className="flex flex-col gap-2">
        <button className="bg-accent-foreground text-accent text-sm font-semibold py-1.5 rounded-md cursor-pointer hover:bg-accent-foreground/80">
          Login
        </button>
        <button className="border border-muted-foreground/10 bg-card-foreground text-sm font-semibold py-1.5 rounded-md cursor-pointer hover:bg-muted-foreground/50">
          Login with Google
        </button>
      </footer>
    </div>
  );
}
