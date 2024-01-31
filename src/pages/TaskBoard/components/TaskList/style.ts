import { styled } from "@mui/material";

export const TaskListContainer = styled("div")`
  display: flex;
  flex-direction: column;

  width: 272px;

  padding: 8px;

  font-size: 14px;

  border-radius: 12px;
  background-color: #444;
`;

export const TaskListTitle = styled("span")`
  display: inline-block;

  padding: 6px;
  margin-bottom: 12px;

  color: #b5b5b5;
  font-weight: 600;
`;

export const Tasks = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const TaskListFooter = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  padding: 6px;
  margin-top: 12px;

  color: #b5b5b5;

  border-radius: 8px;
  transition: background-color 300ms;

  &:hover {
    background-color: rgba(119, 119, 119, 0.4);
  }
`;
