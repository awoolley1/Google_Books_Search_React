import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

function TitleCard(props) {
  return (
    <Card>
      <Card.Header>Welcome!!!</Card.Header>
      <Card.Body>
        <Card.Title>Google Books Search - React</Card.Title>
        <Card.Text>Search for and save books of interest:</Card.Text>
        <Form inline>
          <FormControl type="text" placeholder="Enter title here" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TitleCard;
