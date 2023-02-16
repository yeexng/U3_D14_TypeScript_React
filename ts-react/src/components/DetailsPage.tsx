import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const DetailsPage = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles/";
  const params = useParams();
  console.log(params);
  const [fullArticles, setFullArticles] = useState<null | IArticles>(null);

  const fetchFullArticles = async () => {
    try {
      let response = await fetch(URL + params.id);
      if (response.ok) {
        let articlesFromApi = await response.json();
        console.log(articlesFromApi);
        setFullArticles(articlesFromApi);
      } else {
        console.log("Error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFullArticles();
  }, []);

  return (
    <>
      {fullArticles ? (
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={fullArticles.imageUrl} />
                <Card.Body>
                  <Card.Title>{fullArticles.title}</Card.Title>
                  <Card.Text>{fullArticles.url}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner variant="info" animation="border" />
      )}
    </>
  );
};

export default DetailsPage;
