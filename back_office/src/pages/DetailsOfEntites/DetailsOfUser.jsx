import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';





const DetailsOfUser = () => {

  return (
    <div className="usersPage">
      <Sidebar />
      <div className='usersContainer'>
        <Navbar />
        <div className="usersList">
          <section>
            <h1>User Profile</h1>
          </section>
          
        </div>
      </div>
    </div>
  );
};


export default DetailsOfUser;