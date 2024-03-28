import React, {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './DetailsOfUser.scss'

import {json, useLoaderData } from 'react-router-dom';
import { getDemandeById } from '../../data/users';



export const loader = async ({params}) => {
  const [demande] = await Promise.all([
     getDemandeById({params}),
     ]);
  return json({ demande });
}


const DetailsOfDemande = () => {
  const {demande} = useLoaderData();
  return (
    <div className="usersPage">
      <Sidebar />
      <div className='usersContainer'>
        <Navbar />
        <div className="usersList">
          <h3>Détail de la demande</h3>
          <section>
            <div className="userProfile">
                  <div className="box1">
                    <form>
                      
                    </form>
                </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};


export default DetailsOfDemande;