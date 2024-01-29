import { FunctionComponent } from "react";
import {
  NavbarContainer,
  NavbarItem,
  UserImage,
  UserInfoContainer,
} from "./style";

const Navbar: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NavbarItem>Task Board</NavbarItem>

      <UserInfoContainer>
        <NavbarItem>Full name</NavbarItem>
        <UserImage />
      </UserInfoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
