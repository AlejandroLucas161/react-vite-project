import { styled } from "@mui/material";

export const NavbarContainer = styled("ul")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;

  margin: 0;
  padding: 0 20px;

  background: linear-gradient(
    90deg,
    rgba(89, 151, 115, 0.8) 40%,
    rgba(139, 186, 166, 1) 100%
  );

  overflow: hidden;
`;

export const NavbarItem = styled("li")`
  font-size: 18px;
  font-weight: 600;
`;

export const UserInfoContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserImage = styled("div")`
  width: 28px;
  height: 28px;

  border-radius: 999px;
  background-image: url("https://i.pravatar.cc/32");
`;
