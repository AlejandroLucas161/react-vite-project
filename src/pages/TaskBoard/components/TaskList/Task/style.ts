import { styled } from "@mui/material";

export const TaskTextContaner = styled("div")`
  width: 100%;

  padding: 10px 12px;

  background-color: rgba(119, 119, 119, 0.4);
  border-radius: 8px;
`;

export const TaskText = styled("span")`
  min-height: 24px;

  color: #b5b5b5;
  font-size: 14px;
`;

export const TaskTextarea = styled("textarea")`
  color: #b5b5b5;
  font-size: 14px;

  background-color: rgba(119, 119, 119, 0.4);
  border-radius: 8px;

  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: #b5b5b5;
  }

  &:active {
    resize: none;
    border: none;
    outline: none;
  }
`;
