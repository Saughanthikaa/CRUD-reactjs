import React, {useState , useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom'

function EmployeeEdit() {

    const[name, setName] = useState('');
    const[leavetype, setLeavetype] = useState('');
    const[from, setFrom] = useState('');
    const[to, setTo] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    
    const handleSubmit =(e)=>{
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Leavetype = leavetype;
        a.From = from;
        a.To = to;

        history("/employeeDisplay");
    }

    useEffect(()=> {
        setName(localStorage.getItem('Name'))
        setLeavetype(localStorage.getItem('Leavetype'))
        setFrom(localStorage.getItem('From'))
        setTo(localStorage.getItem('To'))
        setId(localStorage.getItem('Id'))

    },[])


  return (
    <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter name" value={name} required onChange={(e) => setName(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formLeavetype">
                <Form.Control type="text" placeholder="Enter leavetype" value={leavetype} required onChange={(e) => setLeavetype(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formFrom">
                <Form.Control type="date" placeholder="From" value={from} required onChange={(e) => setFrom(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formTo">
                <Form.Control type="date" placeholder="To" value={to} required onChange={(e) => setTo(e.target.value) }>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>

    </div>
  )
}

export default EmployeeEdit