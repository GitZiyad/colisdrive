import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth } from '../Store/useAuth'
import { Navigate } from 'react-router-dom'

const Navbar = () => {
  const { auth, logout } = useAuth()
  const navigate = useNavigate()



  return (
   



    
    <div className=' flex justify-between items-center px-20 py-2.5  bg-purple-950 w-full rounded-b-xl  fixed   top-0 z-50  '>
      <Link to='/'>
      <h1 className=' text-white font-extrabold text-4xl'>
        ColisDrive 
     </h1>
      </Link>
     
        <ul className=' flex justify-center items-center gap-7 font-bold text-white '>
          <Link to='/'>
          <li className=' hover:text-blue-950'  >
                Accueil
            </li>
          </Link>
          <Link to='/tarifs'>
          <li className=' hover:text-blue-950' >
                Tarifs
            </li>
          </Link>

          { auth.isAuth ? <Link to='/dashboardclient'>
            <li className=' hover:text-blue-950'>
                Suivi de colis
            </li>
            </Link>
             :
             <Link to='/login'>
            <li className=' hover:text-blue-950'>
                Suivi de colis
            </li>
            </Link>

          
        }
          
            
            
            

            <Link to='/FAQ'>
            <li className=' hover:text-blue-950'>
                FAQ
            </li>
            </Link>
        </ul>
        {
      auth.isAuth ?
      <div className='flex flex-row items-center gap-10 text-white ' >
    <p className=' text-white font-bold'>Hello  {auth?.user?.nomcomplet} ! </p>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        <li className='hover:text-blue-900' ><a>Settings</a></li>
        <li className='hover:text-blue-900'><a onClick={()=> {
          logout()
          alert('Vous étes déconnecté ')
          navigate('/')
        }} >Logout</a></li>
      </ul>
    </div>
    </div>

        :

        <div className=' flex justify-center items-center gap-7'>
       
        <Link to='/becomeliv'>
        <div class="flex flex-col items-center gap-3 justify-center " >
          <a   class="w-full px-4 py-2 text-center text-black rounded-md bg-white  dark:hover:bg-gray-900 hover:bg-blue-800 hover:text-white font-bold ">
            Devenire Notre Livreur!
            </a>
            <Link to='/loginlivreur'>
       <div class="flex items-center justify-center " >
          <a   class="w-full px-3 py-2 text-center text-black rounded-md bg-white  dark:hover:bg-gray-900 hover:bg-blue-800 hover:text-white font-bold ">
           Livreur ? Connectez vous ! 
            </a>
        </div>
       
       </Link>
        </div>
        </Link>
       <Link to='/login'>
       <div class="flex items-center justify-center " >
          <a   class="w-full px-3 py-2 text-center text-black rounded-md bg-white  dark:hover:bg-gray-900 hover:bg-blue-800 hover:text-white font-bold ">
           Client ?  Connectez vous ! 
            </a>
        </div>
       
       </Link>
        </div>
        }
        
       
    </div>
  )
}

export default Navbar