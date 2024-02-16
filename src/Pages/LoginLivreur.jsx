import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/useAuth';
import axios from 'axios';

const LoginLivreur = () => {

    const [telephone, settelephone] = useState('');
    const [motdepasse, setmotdepasse] = useState('');

    const navigate = useNavigate()
    const {connexion} =  useAuth()




    const authentificationlivreur= async(e)=>{
        e.preventDefault()
        try {

          const res = await axios.post('http://localhost:4000/Livreur/loginlivreur',{
            telephone,motdepasse  
            })
            console.log(res.data)
                if(res.data.token) {
                    connexion(res.data.token, res.data.user)
                    alert('Bienvenue Cher Livreur ')
                    navigate('/dashboardlivreur')
    
                }
                else {
                    alert('Le numero de telephone ou le motdepasse est incorrect')
                }
        
              }
          
         catch (error) {
          console.log(err)
    
        }}
        
        



    
  return (
    <div className=' flex justify-center items-center w-full p-8 '>
        <div className=' shadow-2xl rounded-3xl p-6 mt-16'>
            <div className=' p-4 bg-purple-950 rounded-2xl m-8 flex flex-col justify-center items-center'>
            <h1 className='text-white text-3xl font-extrabold px-24'>ColisDrive</h1>
            <h2 className='text-blue-900 text-3xl font-extrabold px-24' >Pour Livreur</h2>
            </div>
            <div className=' m-8 flex flex-col gap-3'>
                <h2 className=' text-xl font-semibold'>
                    Numero Telephone :
                </h2>
                <input type="text"  placeholder='Telephone' className=' w-full rounded-full shadow-xl' onChange={e=>settelephone(e.target.value)}/>

            </div>
            <div className=' m-8 flex flex-col gap-3'>
                <h2 className=' text-xl font-semibold'>
                    Mot de Passe : 
                </h2>
                <input type="password" placeholder='Mot de passe '  className=' w-full rounded-full shadow-xl' onChange={e=>setmotdepasse(e.target.value)}/>

            </div>

            <button className=' bg-blue-800 text-white text-xl font-bold  p-5 rounded-3xl hover:bg-purple-950 hover:shadow-2xl ' onClick={authentificationlivreur}> Se Connecter </button>
            
         
        </div>
    </div>
  )
}

export default LoginLivreur