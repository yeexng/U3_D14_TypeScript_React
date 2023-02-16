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
      <Row>
        <Col>
          <h3>Trending Articles...</h3>
        </Col>
      </Row>
      <Row>
        {articles.map((a) => (
          <Col md={4} key={a.id}>
            <ArticlesComponent articles={a} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FetchArticleComponent;
