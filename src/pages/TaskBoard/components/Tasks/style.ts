import { styled } from "@mui/material";

export const TasksWrapper = styled("div")`
  padding: 12px;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 12px;
  }
`;
