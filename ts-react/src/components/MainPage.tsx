import { Button, Jumbotron, Container } from "react-bootstrap";
import FetchArticleComponent from "./FetchArticle";
import '../css/index.css'

const MainPageComponent = () => {
  return (
    <>
      <Jumbotron className="jumbotron">
        <Container>
          <h1>SamNews tell you all the <br></br>B#LL5H17s around the world!!</h1>
          <p>
            If you're interested in what's wrong with the man kind, whole stole
            the granny's purse!! <br></br>Make sure to check out our News Website...
            We'll be updating our news 24/7..<br></br> Who knows, you might be the next
            lucky one to be reported on our news...
          </p>
        </Container>
      </Jumbotron>
      <FetchArticleComponent />
    </>
  );
};

export default MainPageComponent;
