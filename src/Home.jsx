import React, { useState } from 'react'
import Navbar from './components/Navbar'
import img1 from './assets/image1.png'
import img2 from './assets/image2.jpg'
import img3 from './assets/image5.jpg'
import img4 from './assets/image6.png'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';








const Home = () => {
  const [ville,setville] = useState('');
  const [nomcomplet, setnomcomplet] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motdepasse, setmotdepasse] = useState('');
  const navigate = useNavigate()


  const addclient= async () =>{
    try {
      const res = await axios.post('http://localhost:4000/Clients/registerclient', {ville,nomcomplet,telephone,motdepasse});
    console.log(res.data)


       if(res.data){
        toast.success('Bienvenue Chez ColisDrive!,Connectz-vous '),
        navigate('/login')

       }else{
        console.error('Something wrong!');

       }
      
    } catch (error) {
      console.log(error)
      
    }
    
    
       
        
    }



  return (
    <div>
   
    <Navbar/>
    <Toaster/>
    <div className='flex flex-col justify-center items-center bg-white rounded-xl mx-32 mt-40'>
       
       <div className='flex justify-center items-center gap-2 mt-10 mb-5 '>
            <h1 className=' text-purple-950 text-5xl font-medium '>
              Livrer
            </h1>
            <h1 className=' text-blue-800 text-5xl font-medium'>
               vos colis en toute sécurité!
            </h1>
        </div>
        <p>Grace a notre platform,vous trouvez le moyen pour livrez vos colis ou bien des marchandises rapidement et en toute sécurité</p>
        <a className=' rounded-3xl bg-blue-800 w-1/3 text-white  font-bold p-2 flex justify-center items-center mt-14' href='#Devenirclient' >Devenir Notre client maintenant ! </a>

       <div className='mt-10 '>
        <img src={img1}
        className='rounded-xl '
         />
       </div>

       <div className=' flex justify-center items-center gap-6 mt-36' id='Devenirclient'>
       <div className=' flex justify-center items-center '>
        <img src={img2}
        className=' h-[60vh] w-[55vw] rounded-xl object-cover'/>
       </div>
       <div className='flex flex-col gap-5 rounded-xl p-10 border-2 shadow-xl ' >
        <h1 className='text-blue-800 text-5xl font-medium'>Devenir Notre Client </h1>
        <p className=' text-lg'>Grace a notre platform, vous trouvez le moyen le plus rapide et sécurisé pour évouluer et prospérer dans votre domaine d'activité</p>
        
        <div className=' flex flex-col justify-center items-center gap-5'>
          <div className=' grid grid-cols-2 gap-4 text-base font-light'>
          <div className=' flex justify-center items-center gap-24'>
            <h1>Ville:</h1>
            <select name="Ville" id="" className=' rounded-xl outline-none' onChange={e=>setville(e.target.value)} >  Ville 
              <option value="Marrakech"> Marrakech </option>
              <option value="Casablanca"> Casablanca</option>
              <option value="Tanger"> Tanger</option>
              <option value="Rabat">  Rabat</option>

            </select>
          </div>
          <div className=' flex justify-center items-center gap-2'>
            <h1>Nom Complet:</h1>
            <input type="text" className=' rounded-xl' onChange={e=>setnomcomplet(e.target.value)} />
          </div>
          
          <div className=' flex justify-center items-center gap-2'>
            <h1>Telephone:</h1>
            <input type="text" className=' rounded-xl' onChange={e=>setTelephone(e.target.value)}/>
          </div>
          <div className=' flex justify-center items-center gap-2'>
            <h1>Mot de passe :</h1>
            <input type="Password" className=' rounded-xl' onChange={e=>setmotdepasse(e.target.value)} />
          </div>
          
          </div>
          <button className=' rounded-3xl bg-blue-800 w-1/3 text-white text-xl font-bold p-1' onClick={addclient}>S'inscrire</button>
         
        </div>
       </div>
       </div>

       <div className=' grid grid-cols-2 rounded-xl border-2 p-6 mt-12 shadow-3xl'>
        <div className=' flex flex-col gap-5 border-e-2 items-center'>
          <h1 className=' text-blue-800 text-2xl font-medium '>Logistique :</h1>
          <p>Ce service vous facilite le processus d'envoi de n'importe quel colis ou marchandise que ça soit pour vos activité commerciale ou bien pour vos bien personnel</p>
        </div>
        <div className=' flex flex-col gap-5 items-center mx-3'>
        <h1 className=' text-blue-800 text-2xl font-medium '>Sécurité :</h1>
          <p>Nous proposons un service trés fiable et sécurisé ansi que rentabilisé en cas de perte ou bien de degat </p>
        </div>

       </div>

       <div className=' mt-10 flex justify-between items-center gap-10 px-16 '>
        <div className=' flex flex-col gap-4 w-[50vw] '>
             <h1>
             </h1>
             <p className=' text-gray-800 font-medium '>
              Chez
             <p className='text-purple-900 text-xl'> COLISDRIVE</p> Nous sommes spécialisés dans la logistique pour toutes individus ou bien entreprise , offrant des solutions complètes pour la livraison et la gestion de des colis. Nous comprenons l'importance d'une livraison rapide et fiable pour votre usage personnel ou professionnel , c'est pourquoi nous proposons un service de livraison rapide et efficace pour toutes les colis.

Mais notre engagement envers la satisfaction de nos clients ne s'arrête pas là. Nous comprenons également l'importance de sécurité pour la satisfaction de vos clients, c'est pourquoi nous assurons également un service professionnel par nos propres livreur qui sont disponile a tout moment  .

Notre équipe de professionnels dévoués travaille en étroite collaboration avec nos livreurs pour offrir une expérience de logistique sur mesure et adaptée aux besoins de chaque personne. Nous sommes fiers de fournir un service de qualité supérieure, rapide, sécurisé et fiable  à tous nos clients. Chez ColisDrive, notre engagement est de vous offrir la meilleure expérience de logistique possible pour vous aider à atteindre vos objectifs !.
             </p>
             <a className=' rounded-3xl bg-blue-800 w-1/3 text-white  font-bold p-2 flex justify-center items-center' href='#contact' >Contactez-Nous</a>
        </div>


        <div>
          <img src={img3} 
          className=' rounded-3xl '
          alt="" />
        </div>
       </div>

      <div className='w-full border-purple-900 border-y-2  m-14 mx-10'/>

       <div className=' flex justify-center items-center bg-purple-900 text-white rounded-3xl text-lg font-extrabold  '>
        <div className=' border-e-2 p-10'>
          <p>
            Disponible dans tous les villes du maroc 
          </p>

        </div>
        <div className=' border-e-2 p-10'>
          <p>
            +400 livreur
          </p>

        </div>
        <div className=' p-10'>
          Rapide a tout moment 
        </div>

       </div>

       <div className=' flex justify-between px-14 my-16'>
        <div className=' mt-16 gap-3 flex flex-col justify-center items-center '>
          <h1 className='text-blue-800 text-3xl font-medium'>Livraison Assurée Vers De Nombreuses Destinations Avec </h1>
          <h1 className=' text-purple-950 text-3xl'>ColisDrive</h1>
          <p>Nos livreur sont disponible dans tout les villes et à travers le pays grâce à notre réseau. Que vous soyez à la recherche d'un service de livraison rapide et fiable pour votre entreprise ou pour vos besoins personnels, ColisDrive est là pour vous servir. Nous sommes fiers d'offrir une livraison de qualité supérieure et une expérience de livraison exceptionnelle. Faites-nous confiance pour assurer la livraison de vos colis en toute sécurité.</p>
         <Link to='/tarifs'>
         <button className=' rounded-3xl bg-blue-800  text-white  font-bold p-2 mt-2 w-full px-10'  >Voir Plus</button>

         </Link>

        </div>
        <img src={img4 } className=' h-[70vh]' alt="" />

       </div>
       <h1 className=' text-blue-800 text-2xl font-medium my-5' id='contact'> Contactez Nous en Email </h1>
       <div className=' flex flex-col gap-4 my-6' >
        <div className=' flex justify-center items-center gap-5 '>
        <input type="email" placeholder='Email' className='rounded-3xl outline-none select-none shadow-xl' />
        <input type="text" placeholder='Objet' className='rounded-3xl outline-none select-none shadow-xl'/>

        </div>
         <textarea name="" id="" cols="30" rows="10" className='rounded-3xl outline-none select-none w-full shadow-xl' placeholder='Votre message'/>
         <button className=' rounded-3xl bg-blue-800 w-1/3 text-white  font-bold p-2 mt-2' >Envoyez</button>

       </div>

      
      </div>
      <Footer/>
    </div> 
  )
}

export default Home