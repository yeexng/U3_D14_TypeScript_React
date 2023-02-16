import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IArticles } from "../interfaces/IArticles";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { format, parseISO } from 'date-fns';

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
            <Col className="my-5">
              <Card>
                <Card.Img variant="top" src={fullArticles.imageUrl} />
                <Card.Body>
                  <Card.Title>{fullArticles.title}</Card.Title>
                  <span>by {fullArticles.newsSite} on {format(parseISO(fullArticles.publishedAt.toString()), 'dd.MM.yyyy')}</span>
                  <hr></hr>
                  <Card.Text>{fullArticles.summary}</Card.Text>
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
