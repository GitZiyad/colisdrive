import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='w-full h-full bg-purple-950  flex justify-center items-center gap-16 px-10 text-white py-10 rounded-t-xl mt-40'>
      
     <div className='p-5 flex flex-col gap-7 w-1/2'>
     <h1 className=' text-white font-extrabold text-4xl mt-2'>
        ColisDrive 
     </h1>
        <p>
        Nous somme une société 100% marocaine qui vise à développer votre activité et de vous aider dévoluer dans la bonne voie à travers un service basé sur des stratégies bien définit. Un service qui contient la logistique dans tout son ensemble à savoir, la livraison à domicile et plein d’autre choses. Ajoutant aussi le livraison a temps qui devient une clé de succès pour toute livraison. Dans ce service particulier nous essayons d’appliquer les nouveaux techniques de la transformation digitale pour vous approcher à votre destinataire ou client. Tout ce que vous avez besoin pour être distinguer dans le marché et avec une proximité de votre destinataire.
        </p>

     </div>
     <div>
        <h1 className=' text-xl font-bold '>
        Nos Services
        </h1>
        <p>Accueil</p> 
        <p>Delivery Services </p>
        <p>Contactez Nous (email)</p>
     </div>
     <div className='flex flex-col gap-2' id='Contact'>
        <h1 className=' text-xl font-bold'>
            Contact
        </h1>
        <p>050050505</p> 
        <p>Contact@test.com </p>
        <p>12 Boulvard Zerktouni GUELIZ , MARRAKECH</p>
     </div>


    </div>
    <div className='w-1/2 bg-white border-y-2 '/>
    <div className='w-full h-full bg-purple-950 flex justify-center items-center gap-16 px-10 text-white py-10 '>
        <h1>
        © Copyright 2024 All right reserved.
        </h1>
    </div>

    </div>
  )
}

export default Footer