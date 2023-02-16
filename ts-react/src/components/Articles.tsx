import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";

interface ArticlesComponentProps {
  articles: IArticles;
}

const ArticlesComponent = ({ articles }: ArticlesComponentProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={articles.imageUrl} />
        <Card.Body>
          <Card.Title>{articles.title}</Card.Title>
          {/* <Card.Text>{articles.summary}</Card.Text> */}
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/${articles.id}`);
            }}
          >
            Read more...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ArticlesComponent;
