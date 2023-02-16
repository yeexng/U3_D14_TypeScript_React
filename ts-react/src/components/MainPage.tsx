import { Button, Jumbotron, Container } from "react-bootstrap";
import FetchArticleComponent from "./FetchArticle";

const MainPageComponent = () => {
  return (
    <>
      <Jumbotron>
        <Container>
          <h1>SamNews tell you all the B#115H17s around the world!!</h1>
          <p>
            If you're interested in what's wrong with the man kind, whole stole
            the granny's purse!! Make sure to check out our News Website...
            We'll be updating our news 24/7.. Who knows, you might be the next
            lucky one to be reported on our news...
          </p>
        </Container>
      </Jumbotron>
      <FetchArticleComponent />
    </>
  );
};

export default MainPageComponent;
