import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "500px", minWidth: "600px" }}
      >
        <Card>
          <Card.Body>
            <Card.Text className="text-center">
              <b>Welcome! A Demo On ReactJS Authentication with JWT Token</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
