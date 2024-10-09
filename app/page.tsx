import { Button } from "@/app/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();
  return (
    <div className="p-10">
      <h1>Hello World</h1>
      <RegisterLink>
        <Button>Register</Button>
      </RegisterLink>
      <LoginLink>
        <Button>Login</Button>
      </LoginLink>
    </div>
  );
}
