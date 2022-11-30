import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Header.css";

const Header = ({
  title,
  onChange,
  valueSearch,
  onClickTitle,
  onClickSearch,
}) => {
  return (
    <Navbar className="Header" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand onClick={onClickTitle}>{title}</Navbar.Brand>
        <>
          <Form.Control
            value={valueSearch}
            onChange={onChange}
            placeholder="Filename"
          />
          <Button className="Button" onClick={onClickSearch} variant="light">
            Search
          </Button>
        </>
      </Container>
    </Navbar>
  );
};

export default Header;
