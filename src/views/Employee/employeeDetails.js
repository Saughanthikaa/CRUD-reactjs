import Header from "../../layouts/header";
import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom'

function EmployeeDetails() {

  const[name, setName] = useState('');
  const[leavetype, setLeavetype] = useState('');
  const[from, setFrom] = useState('');
  const[to, setTo] = useState('');

  let history = useNavigate();

  const handleSubmit =(e)=>{
      e.preventDefault();

      const ids= uuid();
      let uniqueId = ids.slice(0,8);

      let a=name,
      b=leavetype,
      c=from,
      d=to;
      
      Employees.push({id: uniqueId, Name : a, Leavetype :b, From :c, To :d});
      history("/employeeDisplay");
  }


  return (
    <div>
      <Header />
      <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setName(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formLeavetype">
                <Form.Control type="text" placeholder="Enter leavetype" required onChange={(e) => setLeavetype(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formFrom">
                <Form.Control type="date" placeholder="From" required onChange={(e) => setFrom(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formTo">
                <Form.Control type="date" placeholder="To" required onChange={(e) => setTo(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>
    </div>
  )
}

export default EmployeeDetails