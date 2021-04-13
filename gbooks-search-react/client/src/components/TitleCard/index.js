import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function TitleCard(props) {
  return (
    <Card>
      <Card.Header>Welcome to:</Card.Header>
      <Card.Body>
        <Card.Title>Google Books Search - React</Card.Title>
        <Card.Text>Search for and save books of interest:</Card.Text>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Enter search here</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TitleCard;
