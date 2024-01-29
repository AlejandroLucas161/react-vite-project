import { styled } from "@mui/material";

export const TaskContainer = styled("div")`
  display: inline-block;

  width: 272px;

  padding: 14px 16px;

  font-size: 14px;

  border-radius: 12px;
  background-color: #444;

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const TaskTitle = styled("span")`
  display: inline-block;

  padding-bottom: 14px;

  color: #aaaaaa;
  font-weight: 600;
`;

export const TaskFooter = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  padding-top: 14px;

  color: #aaaaaa;
`;
