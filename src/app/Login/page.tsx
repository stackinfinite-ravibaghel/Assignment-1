import Forms from "./Forms/page";
import { SignIn } from "../ServerAction/action";

async function Home() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const loginResponse = await SignIn(formData);
    return loginResponse;
  };
  return (
    <div>
      <Forms handleSubmit={handleSubmit} />
    </div>
  );
}
export default Home;
