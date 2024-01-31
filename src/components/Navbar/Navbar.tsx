import { FunctionComponent } from "react";
import {
  NavbarContainer,
  NavbarItem,
  NavbarItemLink,
  NavbarItemText,
  UserImage,
  UserInfoContainer,
} from "./style";

const Navbar: FunctionComponent = () => {
  return (
    <NavbarContainer>
      <NavbarItem>
        <NavbarItemLink to="/react-vite-project">Home</NavbarItemLink>
        {" / "}
        <NavbarItemText>Task board</NavbarItemText>
      </NavbarItem>

      <UserInfoContainer>
        <NavbarItem>Full name</NavbarItem>
        <UserImage />
      </UserInfoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
