import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ContainerImage, ContainerItems, Text, PasswordText } from './App.styles';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {

  const [selected, setSelected] = useState<string>('');
  const [lengthPass, setLengthPass] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');

  const handleSelect = (event: string | null) => setSelected(event || '');
  const handleLength = (event: React.ChangeEvent<HTMLInputElement>) => setLengthPass(event.target.value);

  const handleGeneratePassword = async() =>{
    if(selected == 'complete' && lengthPass != ''){      
      const response = await fetch(`http://localhost:8080/complete/${lengthPass}`);
      const responseData = await response.text();
      setPasswordText(responseData);
    }
    if(selected == 'numeric' && lengthPass != ''){      
      const response = await fetch(`http://localhost:8080/numeric/${lengthPass}`);
      const responseData = await response.text();
      setPasswordText(responseData);
    }
    if(selected == 'alfanum' && lengthPass != ''){      
      const response = await fetch(`http://localhost:8080/alfanum/${lengthPass}`);
      const responseData = await response.text();
      setPasswordText(responseData);
    }
    
  }

  return (
    <>
      <Container>
        <ContainerImage></ContainerImage>
        <ContainerItems>
          <Text>Your Password:</Text>
          <PasswordText>{passwordText}</PasswordText>
          <InputGroup className="mb-3 custom-input_group">
            <DropdownButton
              variant="outline-secondary"
              title={selected || "Option"}
              id="btn-custom"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="complete">Complete Password</Dropdown.Item>
              <Dropdown.Item eventKey="numeric">Numeric Password</Dropdown.Item>
              <Dropdown.Item eventKey="alfanum">Alfa Numeric Password</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" className="custom-input" placeholder="Length 8-50" onChange={handleLength} value={lengthPass}/>
          </InputGroup>
          <Button as="input" type="button" value="Generate" className="btn-custom" onClick={handleGeneratePassword}/>
        </ContainerItems>
      </Container>
    </>
  )
}

export default App
