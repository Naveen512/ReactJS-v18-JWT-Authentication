import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import jwtInterceptor from "../components/shared/jwtInterceptor";
const FavouriteMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    jwtInterceptor
      .get("http://localhost:4000/user/fav-movies")
      .then((response) => {
        setMovies(response.data);
      });
  }, []);
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card>
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>Genre: {movie.genre}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FavouriteMovie;
