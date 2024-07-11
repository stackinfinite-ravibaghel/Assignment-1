import Login from "./Login/page"

export default function Home() {
  return (
    <main className="container min-h-screen min-w-full flex flex-col items-center justify-between">
      {<Login />}
    </main>
  );
}
