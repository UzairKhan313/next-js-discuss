import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/utils/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signInWithGithub}>
        <Button className="" type="submit">
          Sign With Github
        </Button>
      </form>

      <form action={actions.signOut}>
        <Button className="" type="submit">
          Sign Out
        </Button>
      </form>
      {session?.user ? <p>User loged in</p> : <o>User logout</o>}
      <Profile />
    </div>
  );
}
