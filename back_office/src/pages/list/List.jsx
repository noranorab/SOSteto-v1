import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../../data/users";
import './list.scss'

export async function loader(){
  const data = await getUsers()
  return { data }
}

const toEdit = (e, user, rowIndex) => {
  e.preventDefault();
  console.log("Editing user:", user);
  // Implement your edit logic here, e.g., open a modal with user data for editing
};

const toDelete = (e, rowIndex) => {
  e.preventDefault();
  console.log("Deleting user at index:", rowIndex);
  // Implement your delete logic here, e.g., prompt confirmation and then delete the user
};

const List = () => {
  const {data} = useLoaderData();
  console.log(data)
  return (
    <div className="usersPage">
      <Sidebar />
      <div className='usersContainer'>
        <Navbar />
        <div className="usersList">
          <section>
            <h1>Users List</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { data.map((user, rowIdx) => (
                  <tr key={user._id}>
                    <td>{user.nom}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <a href="#" onClick={(e) => toEdit(e, user, rowIdx)}>
                      <Link to={`/users/${user._id}`}>
                        <EditIcon className='iconEdit'/>
                      </Link>
                      
                      </a>{' '}
                      <a
                        href="#"
                        onClick={(e) => {
                          toDelete(e, rowIdx);
                        }}
                      >
                      <DeleteIcon className='iconDelete'/>
                      </a>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          
        </div>
      </div>
    </div>
  );
};


export default List;