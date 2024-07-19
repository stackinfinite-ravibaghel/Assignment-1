import Forms from "./Forms/page";
import { SignIn } from "../ServerAction/action";

async function Login() {
  
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
export default Login;
