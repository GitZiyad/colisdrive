
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import DevenirLivreur from './Pages/DevenirLivreur';
import AjouterLivraisoncolis from './Pages/AjouterLivraisoncolis';
import Login from './Pages/Login';
import DashboardClient from './Pages/DashboardClient';
import DashboardLivreur from './Pages/DashboardLivreur';
import Infolivreur from './Pages/Infolivreur';
import Tarifs from './Pages/Tarifs';
import FAQ from './Pages/FAQ';
import LoginLivreur from './Pages/LoginLivreur';
import LoginSupport from './Pages/Loginsupport';
import DashboardSupport from './Pages/DashboardSupport';
import { useAuth } from './Store/useAuth';


function App() {
  const { auth } = useAuth()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
     {
      path: "/becomeliv",
      element: <DevenirLivreur/>,
    },
    {
      path: "/ajouterlivraison",
      element: <AjouterLivraisoncolis/>,
    },
    {
      path: "/loginlivreur",
      element: <LoginLivreur/>,
      
    }
    ,
    {
      path: "/loginsupport",
      element:  <LoginSupport/>,
      
    },
    {
      path: "/login",
      element: <Login/>,
      
    },
    {
      path: "/dashboardclient",
      element: auth.isAuth? <DashboardClient/>: <Home/>,
      
    },
    {
      path: "/dashboardlivreur",
      element: auth.isAuth? <DashboardLivreur/>: <Home/>,
      
    }, {
      path: "/formlivreur",
      element: <Infolivreur/> ,
      
    },
    {
      path: "/tarifs",
      element: <Tarifs/>,
      
    }
    ,
    {
      path: "/FAQ",
      element: <FAQ/>,
      
    },
    {
      path: "/dashboardsupport",
      element: auth.isAuth? <DashboardSupport/> : <Home/>,
      
    }
  
  
  ]);
  


  return (
    <RouterProvider router={router} />

  )
}

export default App
