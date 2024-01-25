import { styled } from "@mui/material";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100vw;
  height: 100vh;
`;

export const Title = styled("h1")`
  font-size: 55px;
  font-weight: 600;
  text-align: center;
`;

export const Subtitle = styled("h3")`
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  max-width: 800px;
`;
