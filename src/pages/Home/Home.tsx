import { FunctionComponent } from "react";
import useStore from "../../store/store";
import { HomeContainer, Subtitle, Title } from "./style";

const Home: FunctionComponent = () => {
  const { title } = useStore();

  return (
    <HomeContainer>
      <Title>{title}</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et placerat
        neque, eget eleifend quam.
      </Subtitle>
    </HomeContainer>
  );
};

export default Home;
