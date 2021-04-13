import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../api/googleSearch";
import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";



function Books() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getBook()
      .then((res) => {
        console.log(res);
        setData(res.data.items);
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

{data.map((book, index) => {
  
  return (
  <tr key={index}>
  
 <td>{book.volumeInfo.title}</td>
 <td>{book.volumeInfo.authors[0]}</td>
 <td>{book.description}</td>
 
 { 
   book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? 
    (<td><img src={ book.volumeInfo.imageLinks.smallThumbnail}  alt="thumbnail" /> </td>)  :  (<td>Else</td>)
}

 
 </tr>
 )}
)}
</tbody>
</Table>
  );
 // <td>{book.previewLink}</td>
}

export default Books;