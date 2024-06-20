
import Dashboard from "./Dashboard/page";

export default function Home() {
  return (
    <main className="container flex min-h-screen min-w-full flex-col items-center justify-between">
      {/* Display Dashboard Section */}
      {<Dashboard />}
    </main>
  );
}
