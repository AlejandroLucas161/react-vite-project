import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/store";
import { HomeContainer, Section, Sections, Subtitle, Title } from "./style";

interface ISection {
  id: number;
  title: string;
  route: string;
}

const Home: FunctionComponent = () => {
  const { title } = useStore();

  const SectionsArr: Array<ISection> = [
    { id: 1, title: "Task Board", route: "/task-board" },
    { id: 2, title: "Project Management", route: "/project-management" },
  ];

  return (
    <HomeContainer>
      <Title>{title}</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et placerat
        neque, eget eleifend quam.
      </Subtitle>

      <Sections>
        {SectionsArr.map(({ id, title, route }) => (
          <Link to={route} key={id}>
            <Section>
              <Subtitle>{title}</Subtitle>
            </Section>
          </Link>
        ))}
      </Sections>
    </HomeContainer>
  );
};

export default Home;
