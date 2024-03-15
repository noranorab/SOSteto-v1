import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './DetailsOfUser.scss'




const DetailsOfUser = () => {

  return (
    <div className="usersPage">
      <Sidebar />
      <div className='usersContainer'>
        <Navbar />
        <div className="usersList">
          <h1>User Profile</h1>
          <section>
            
            <div className="userProfile">
              <div className="box1"></div>
              <div className="box2"></div>
              <div className="box3"></div>

            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};


export default DetailsOfUser;