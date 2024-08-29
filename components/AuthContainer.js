"use client";

import {
  Avatar,
  NavbarItem,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

import * as actions from "@/actions";

const AuthContainer = () => {
  const session = useSession();

  if (session.status === "loading") {
    return;
  }

  if (session?.data?.user) {
    return (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    return (
      <>
        <NavbarItem>
          <form action={actions.signInWithGithub}>
            <Button color="secondary" type="submit" variant="bordered">
              Sign In With Github
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signInWithGithub}>
            <Button color="primary" type="submit" variant="flat">
              Sign Up With Github
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
};

export default AuthContainer;
