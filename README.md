##### :hammer: developing


<div align="center">
  <strong>Password Generator</strong>
</div>

![Web Site Template](./public/temp.png)

#### technologies used
- ```Java 21```
- ```Spring Boot 3.3.3```
- ```Vite```
- ```React```
- ```Typescript```
- ```Bootstrap 5```
- ```Styled-Components```

## What is Password Generator
<p>Just like the name, this is an automatic password generator to create strong passwords that fit any website.

The API used can generate 3 types of passwords:</p>
<ul>
  <li>Complete, with: A, B, C, d, e, f, 1, 2, 3, #, &, $...</li>
  <li>Numeric, with: 1, 2, 3, 4, 5, 6, 7...</li>
  <li>Complete, with: A, B, C, d, e, f, 1, 2, 3...</li>
</ul>
<p>Simple, useful and strong for everywhere.</p>

<hr/>

#### API
<p>An API created with Java 21 and Spring Boot, using Maven as the project structure.</p>
<p>There are 3 routes to generate passwords and return the value</p>

```java
  @GetMapping("/complete/{length}")
    public ResponseEntity<String> generateCompletePassword(@PathVariable(value = "length") int passwordLength){
        if(passwordLength < 8){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Length to small, minimum is 8!");
        }else if(passwordLength > 50){
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("To long, max is 50!");
        }
        String[] tempPass = new String[passwordLength];
        for(int n = 0; n < passwordLength; n++){
            tempPass[n] = completeGenPassword[random.nextInt(92)];
        }
        String newPassword = String.join("", tempPass);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPassword);
    }
```
<p>All routes generate a function that generates your password based on an array of characters 
and return an http response and a body with the generated password</p>

`Still want to develop a database that saves the last 10 passwords generated and an account for you to have access to them`

<hr/>

#### Front End
<p>For the front end, I chose a technology that I feel more comfortable creating, such as react with typescript, however, for styling, I decided to use Bootstrap 5, which I'm not so familiar with.</p>
<p>I used some bootstrap components to make development easier and faster.</p>

```tsx
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Dropdown from 'react-bootstrap/Dropdown';
  import DropdownButton from 'react-bootstrap/DropdownButton';
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';
  import Button from 'react-bootstrap/Button';

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
```
<p>
I also used Styled Components to create some more customizable components and edit Bootstrap components to suit the site</p>
<p>To consume my API I created an asynchronous function <strong>async</strong> and within 3 if's to check which route I would send the request</p>

```tsx
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
```

## How to see the project
<p>
Download the project to your machine, open the api folder and run the file <strong>ApiApplication.java</strong> on yout IDE</p>
<p>After you can run the front end to see the project running in your web with the command:</p>

`npm run dev`