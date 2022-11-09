import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';
import Header from './../../layouts/header'

function EmployeeDisplay()
{
    let history = useNavigate();

    const handleEdit = (id, name , age ,leavetype, from , to)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Leavetype',leavetype);
        localStorage.setItem('From',from);
        localStorage.setItem('To',to);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) =>{
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/employeeDisplay')
    }
    return(
        <div>
            <Header />
            <Fragment>
                <div style={{margin:"10rem"}}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Leavetype
                                </th>
                                <th>
                                    From
                                </th>
                                <th>
                                    To
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                Employees && Employees.length > 0
                                ?
                                Employees.map((item)=>{
                                    return(
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Leavetype}
                                            </td>
                                            <td>
                                                {item.From}
                                            </td>
                                            <td>
                                                {item.To}
                                            </td>
                                            <td>
                                                <Link to={'/employeeEdit'}>
                                                <Button onClick={()=> handleEdit(item.id,item.Name,item.Leavetype,item.From,item.To)}>EDIT</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={()=> handleDelete(item.id)}>DELETE</Button> 
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                            }
                        </tbody>
                    </Table>
                    <br>
                    </br>
                    <Link className='d-grid gap-2' to="/employeeDetails">
                        <Button size="lg">Create</Button>
                    </Link>
                </div>
            </Fragment>
        </div>
    )
}

export default EmployeeDisplay;