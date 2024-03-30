import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import DetailsOfUser from './pages/DetailsOfEntites/DetailsOfUser';
import Home from './pages/home/Home';
import List, { loader as usersLoader } from './pages/list/List';
import { loader as dataLoader } from './pages/DetailsOfEntites/DetailsOfUser'
import DetailsOfDemande from './pages/DetailsOfEntites/DetailsOfDemandes';
import {loader as demandeLoader} from './pages/DetailsOfEntites/DetailsOfDemandes'
import {loader as userIdsLoader} from './pages/home/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    loader: userIdsLoader,
  },
  {
    path: "users",
    element: <List />,
    loader: usersLoader,
  },
  {
    path: "users/:userId",
    element: <DetailsOfUser />,
    loader: dataLoader,
  },
  {
    path: "demandes/:demandeId",
    element: <DetailsOfDemande />,
    loader: demandeLoader,
  }


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
