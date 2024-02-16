import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const DevenirLivreur = () => {
  const [nomcomplet, setnomcomplet] = useState('')
  const [telephone, settelephone] = useState('');
  const [ville, setville] = useState('');
  const preregister= async () =>{
    try {
      const res = await axios.post('http://localhost:4000/Livreur/preregisterlivreur', {nomcomplet,telephone,ville});
    console.log(res.data)


       if(res.data){
        toast.success('Votre demande seras traité dans quelque minutes, vous inquiétez pas !')
       

       }else{
        console.error('Erreur, Veuillez réessayer la Pré-inscription!');

       }
      
    } catch (error) {
      console.log(error)
      
    }
    
    
       
        
    }





  return (
    <div>
    <Navbar />
    <Toaster/>
    <div className=' mx-40 flex flex-col gap-14 mt-32 z-0'>
       
        
       <div className=' bg-cover mt-10 relative'>
        <img src="https://www.cdc.gov/sleep/images/featured-topics/DrowsyDriving_Dashboard.jpg?_=47870" className='w-full rounded-xl object-cover' alt="" />
        <div className='flex justify-between items-center px-20 absolute left-0 top-20 gap-14'>
        <div>
        <h1 className=' text-7xl font-extrabold text-white '>
        Devenez chauffeur selon 
        </h1>
        <h1 className=' text-8xl font-extrabold text-blue-700 '>
        vos conditions!
        </h1>
        </div>
        
        <div className=' flex flex-col items-center gap-4 bg-white rounded-xl p-10'>
            <h1 className=' text-xl font-semibold' >
            Confirmez votre numéro de téléphone et remplissez le formulaire 
            </h1>
            <input type="text" placeholder='Nom et Prenom' className=' rounded-full w-full' onChange={e=>setnomcomplet(e.target.value)}/>
            <input type="text" placeholder='Numero Telephone'  className=' rounded-full w-full' onChange={e=>settelephone(e.target.value)} />
            <input type="text" placeholder=' Ville' className=' rounded-full w-full' onChange={e=>setville(e.target.value)} />
            <button className=' bg-black text-white rounded-xl w-1/2 items-center p-2 hover:bg-blue-700 ' onClick={preregister}> S'inscrire Dans la liste d'attente</button>
            <p className=' text-balance' >
                Dés l'inscription , un de nos staff vous appele dans quelque minutes , Soyez patient! 
            </p>


        </div>

       </div>
       </div>
       

       <div className='grid grid-cols-4 gap-5 mt-10'>
        <div className=' flex flex-col gap-8'>
            <div className=' w-full border-purple-800 border-2  rounded-3xl'/>
            <h1 className=' font-bold text-2xl'>+1000 Colis Envoyer par Jours !</h1>
        </div>
        <div className=' flex flex-col gap-8'>
            <div className=' w-full border-purple-800 border-2  rounded-3xl'/>
            <h1 className=' font-bold text-2xl'>Toutes les Villes du Maroc</h1>
        </div>
        <div className=' flex flex-col gap-8'>
            <div className=' w-full border-purple-800 border-2  rounded-3xl'/>
            <h1 className=' font-bold text-2xl'>Payment Garantie Par Colis Livrer </h1>
        </div>
        <div className=' flex flex-col gap-8'>
            <div className=' w-full border-purple-800 border-2  rounded-3xl'/>
            <h1 className=' font-bold text-2xl'> +5000 Client Utilise la platform  </h1>
        </div>

       </div>

 <div className=' flex justify-center items-center gap-3 '>
 <h1 className=' text-left text-6xl font-extrabold text-blue-800 my-20 '>
        Pourquoi les Livreurs Choisi 
      </h1>
      <h1 className=' text-left text-6xl font-extrabold text-purple-900 my-20 underline'>
        ColisDrive?
      </h1>
 </div>
 <div className=' grid grid-cols-3 gap-6'> 
 <div className=' flex flex-col items-center gap-4 shadow-xl rounded-xl p-6'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 border-purple-800 border-2 shadow-xl rounded-full  object-cover p-3">
  
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
<ul className='text-xl font-semibold gap-2 flex flex-col '>
    <li>
    Des trajets rentables
    </li>
    <li>
        +
    </li>
    <li>
    Proposez votre propre prix si vous n'aimez pas les tarifs initiale 
    </li>
</ul>



 </div>
 <div className=' flex flex-col items-center gap-4 shadow-xl rounded-xl p-6'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 border-purple-800 border-2 shadow-xl rounded-full  object-cover p-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

<ul className='text-xl font-semibold gap-2 flex flex-col '>
    <li>
    Voir l'itinéraire avant d'accepter la commande
    </li>
    <li>
        +
    </li>
    <li>
    Évitez autant de demandes de courses que vous le souhaitez, sans aucune pénalité
    </li>
</ul>



 </div>
 <div className=' flex flex-col items-center gap-4 shadow-xl rounded-xl p-6'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 border-purple-800 border-2 shadow-xl rounded-full  object-cover p-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>


<ul className='text-xl font-semibold gap-2 flex flex-col '>
    <li>
    Assistance intégrée à l'application 24h/24 et 7j/7
        </li>
    <li>
        +
    </li>
    <li>
    Évitez autant de demandes de courses que vous le souhaitez, sans aucune pénalité
    </li>
</ul>



 </div>
 </div>
      <div className=' flex flex-col gap-6 my-10 '>
       <div className=' flex justify-center items-center gap-7'>
       <h1 className=' text-5xl font-semibold text-blue-800'>
        Comment 
        </h1>
        <h1 className=' text-5xl font-semibold text-purple-800'>
        Commencer?
        </h1>
       </div>
       <div className=' flex justify-center items-center gap-4 text-xl'>
       <div className=' flex justify-center items-center gap-4 '>
        <h1 className='rounded-full border-2 border-blue-800 w-10 h-10 flex justify-center items-center text-xl p-2 font-extrabold'>1</h1>
        <h2>
            Inscrivez-vous dans la platform 
        </h2>
       
       </div>
       <div className=' flex justify-center items-center gap-4 '>
        <h1 className='rounded-full border-2 border-blue-800 w-10 h-10 flex justify-center items-center text-xl p-2 font-extrabold'>2</h1>
        <h2>
         Attendre la validation de votre demande 
         </h2>
       
       </div>
       <div className=' flex justify-center items-center gap-4 '>
        <h1 className='rounded-full border-2 border-blue-800 w-10 h-10 flex justify-center items-center text-xl p-2 font-extrabold'>3</h1>
        <h2>
         Aprés la validation de votre demande , ajoutez les informations necessaire dans le formulaire fourni par nos staff
         </h2>
       
       </div>
       
       </div>


      </div>


 
    </div>
    <Footer/>
    </div>
  )
}

export default DevenirLivreur