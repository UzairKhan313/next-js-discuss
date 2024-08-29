import { auth } from "@/utils/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";

import AuthContainer from "./AuthContainer";
import Logo from "./Logo";

const Header = async () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthContainer />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
