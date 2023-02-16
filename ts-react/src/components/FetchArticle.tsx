import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { IArticles } from "../interfaces/IArticles";
import ArticlesComponent from "./Articles";

const FetchArticleComponent = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles";
  const [articles, setArticles] = useState<IArticles[]>([]);

  const fetchArticles = async () => {
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let articlesFromApi = await response.json();
        console.log(articlesFromApi);
        setArticles(articlesFromApi);
      } else {
        console.log("Error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h3 className="text-light">Trending Articles...</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {articles.map((a) => (
          <Col xs={12} sm={6} md={4} key={a.id} className="my-3 h-100">
            <ArticlesComponent articles={a} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FetchArticleComponent;
