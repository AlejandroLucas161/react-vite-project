import { styled } from "@mui/material";
import plusIcon from "../../../assets/plus-icon.svg";

export const PlusIcon = styled("div")<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  background-image: url(${plusIcon});

  object-fit: cover;
`;
