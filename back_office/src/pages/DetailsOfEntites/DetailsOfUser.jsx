import React, {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './DetailsOfUser.scss'

import {json, useLoaderData } from 'react-router-dom';
import { getInfirmierById, getUserById, updateUserDetails } from '../../data/users';
import { getQuartiersFromVilleName, getVilles } from '../../data/villesetquartiers';


export const loader = async ({params}) => {
  const [data, villes] = await Promise.all([
     getUserById({params}),
     getVilles(),
     

  ]);
  return json({ data, villes });
}


const DetailsOfUser = () => {
  const {data, villes} = useLoaderData();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(data);
  const [quartiers, setQuartiers] = useState([]);
  const [infirmier, setInfirmier] = useState({})
  useEffect(() => {
    const fetchQuartiers = async () => {
      try {
        const quartiersByVilles = await getQuartiersFromVilleName(formData.ville);
        setQuartiers(quartiersByVilles);
      } catch (error) {
        console.error('Error fetching quartiers:', error);
      }
    };
    const fetchInfirmiers = async () => {
      try {
        const infirmier = await getInfirmierById(formData._id);
        setInfirmier(infirmier);
      } catch (error) {
        console.error('Error fetching infirmier:', error);
      }
    };
  
    if (formData.ville) {
      fetchQuartiers();
    }
    if(formData.role === 'infirmier'){
      fetchInfirmiers()

    }
  }, [formData.ville, formData._id, formData.role]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleEdit = (event) => {
    event.preventDefault();
    setEditMode(true);
  };
  const handleSave = (event) => {
    console.log(formData)
    updateUserDetails(formData, data._id)
    setEditMode(false);
    event.preventDefault();
    

  };

  return (
    <div className="usersPage">
      <Sidebar />
      <div className='usersContainer'>
        <Navbar />
        <div className="usersList">
          <h1>User Profile</h1>
          <section>
            <div className="userProfile">
                  <div className="box1">
                    <form>
                      <div className="infoperso">
                        <p className="infoItem">
                          <label htmlFor="nom">Nom:</label>
                          <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                        <p className="infoItem">
                          <label htmlFor="prenom">Prénom:</label>
                          <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                        <p className="infoItem">
                          <label htmlFor="telephone">Telephone:</label>
                          <input type="text" id="telephone" name="telephone" value={formData.telephone} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                      </div>
                      <div className="infoville">
                        <p className="infoItem">
                          <label htmlFor="ville">Ville:</label>
                          <select id="ville" name="ville" value={formData.ville} onChange={handleInputChange} disabled={!editMode}>
                          {villes.map((ville) => (
                            <option key={ville._id} value={ville.nom_ville}>{ville.nom_ville}</option>
                          ))}
                          </select>
                        </p>
                        <p className="infoItem">
                          <label htmlFor="quartier">Quartier:</label>
                          <select id="quartier" name="quartier" value={formData.quartier} onChange={handleInputChange} disabled={!editMode}>
                            {quartiers.map((quartier) => (
                              <option key={quartier._id} value={quartier.nom_quartier}>{quartier.nom_quartier}</option>
                            ))}
                          </select>
                        </p>
                      </div>
                      
                      <div className="infologin">
                        <p className="infoItem">
                          <label htmlFor="role">Role:</label>
                          <input type="text" id="role" name="role" value={formData.role} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                        <p className="infoItem">
                          <label htmlFor="email">Email:</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                        <p className="infoItem">
                          <label htmlFor="mdp">Mot de passe:</label>
                          <input type="password" id="mdp" name="mdp" value={formData.mdp} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                        <p className="infoItem">
                          <label htmlFor="estConnecte">Connecté:</label>
                          <input type="text" id="estConnecte" name="estConnecte" value={formData.estConnecte} onChange={handleInputChange} disabled={!editMode} />
                        </p>
                      </div>
                      {!editMode ?
                        <button onClick={handleEdit}>Edit</button>
                        : <button onClick={handleSave}>Save</button>
                      }
                    </form>
                  </div>
                </div>

          </section>
          {
            formData.role === 'infirmier' ? (
            
            <section>
              <h3>Spécialité et Soins</h3>
              <div className="userProfile">
                    <div className="box1">
                    <form>
                        <div className="infoperso">
                          <p className="infoItem">
                            <input type="text" id="soin" name="nom" value={formData.nom} disabled/>
                          </p>
                        </div>
                      </form>
                      
                    </div>
                  </div>
  
            </section>) : null
          }
          

          
        </div>
      </div>
    </div>
  );
};


export default DetailsOfUser;