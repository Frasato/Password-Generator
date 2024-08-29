import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ContainerImage, ContainerItems, Text } from './App.styles';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <>
      <Container>
        <ContainerImage></ContainerImage>
        <ContainerItems>
          <Text>Your Password:</Text>
          <Badge bg="secondary" className="password-custom">asndPSNaojfnPOANFW02NSOD121231231SDS</Badge>
          <InputGroup className="mb-3 custom-input_group">
            <DropdownButton
              variant="outline-secondary"
              title="Option"
              id="btn-custom"
            >
              <Dropdown.Item href="#">Complete Password</Dropdown.Item>
              <Dropdown.Item href="#">Numeric Password</Dropdown.Item>
              <Dropdown.Item href="#">Alfa Numeric Password</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" className="custom-input" placeholder="Length 8-50"/>
          </InputGroup>
          <Button as="input" type="button" value="Generate" className="btn-custom"/>
        </ContainerItems>
      </Container>
    </>
  )
}

export default App
