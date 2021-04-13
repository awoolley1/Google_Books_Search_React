import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../api/randomUser.js";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";



function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getBook()
      .then((res) => {
        console.log(res);
        setData(res.data.results);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <Table striped bordered hover variant="dark">
    <thead>
<tr>
 <th>Title</th> 
 <th>Author</th>
 <th>Description</th>
 <th>Image</th>
 <th>Link</th>
</tr>
</thead><tbody>

{data.map((book, index) => (
  <tr key={index}>
  
 <td>{book.name.first}</td>
 <td>{book.name.last}</td>
 <td>{book.email}</td>
 <td><img src={user.picture.thumbnail} alt="headshot"/></td>
 <td>{book.location.city}</td>
 </tr>
 )
)}
</tbody>
</Table>
  );
}

export default Books;