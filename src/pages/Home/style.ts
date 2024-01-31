import { styled } from "@mui/material";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  min-height: 100vh;
`;

export const Title = styled("h1")`
  font-size: 55px;
  font-weight: 600;
  text-align: center;
`;

export const Subtitle = styled("h3")`
  max-width: 800px;

  font-size: 32px;
  font-weight: 400;
  text-align: center;
`;

export const Sections = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;

  margin-top: 18px;
`;

export const Section = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  min-height: 300px;

  border: 3px solid #333;
  border-radius: 12px;
`;
