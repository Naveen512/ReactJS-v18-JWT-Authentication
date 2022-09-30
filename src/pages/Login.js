import { useContext, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../components/shared/AuthContext";
const Login = () => {
  const userName = useRef("");
  const password = useRef("");
  const {login}= useContext(AuthContext)

  const loginSubmit = async () => {
    let payload = {
      username: userName.current.value,
      password: password.current.value
    }
    await login(payload);
  };
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Login Form</legend>
            <form>
              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" ref={userName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={password} />
              </Form.Group>
              <Button variant="primary" type="button" onClick={loginSubmit}>
                Login
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
