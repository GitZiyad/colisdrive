import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Tarifs = () => {
  return (
    <div>

    
    <Navbar/>
    <div className='mx-20 mt-40'>
       

        <div className='flex flex-col gap-6 mt-16 justify-center items-center mx-40'>
            <h1 className=' text-blue-950 font-bold text-6xl mb-6 '>
            Delivery Service
            </h1>
            <p className=' text-lg font-medium mb-9'>
            Pour effectuer des envois en toute simplicité via notre plateforme, il vous suffit de remplir quelques champs tels que le nom du destinataire,son numero de telephone et son adresse , et nous nous occupons du reste, vos colis sont immédiatement pris en charge et préparés pour l'expédition en se basant sur les informations que vous avez fournies.
            </p>
            <div className=' flex justify-center items-center gap-1'>
            <h2 className=' text-5xl font-medium'>
                Chez
                

            </h2>
            <h2 className=' text-5xl font-medium text-purple-950' >
                ColisDrive
            </h2>
            
           

            </div>
            <h2 className=' text-lg font-medium mb-10'>
            nous vous offrons un système de livraison flexible et fluide pour garantir une livraison rapide et dans les meilleures conditions possibles pour vos colis.

            </h2>
           




        </div>

        <div className=' flex justify-between px-72 mb-32 ' >

            <div className='flex justify-center items-center gap-6'>
                <h3 className='text-lg font-medium'>
                Positon de ramassage : 
                </h3>
                
            <select name="" id="" className=' outline-none rounded-3xl'> 
                <option value="Marrakech"> Marrakech </option>
            </select>

            </div> 
            <div className='flex justify-center items-center gap-6'>
                <h3 className='text-lg font-medium ' >
                Destination : 
                </h3>
                
            <select name="" id="" className=' outline-none rounded-3xl'> 
                <option value="Marrakech"> Marrakech</option>
            </select>

            </div> 

            
            

        

        </div>
        
       

    </div>
    <Footer/>
    </div>
  )
}

export default Tarifs