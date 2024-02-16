import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import img9 from '../assets/image9.png'

const DashboardLivreur = () => {
  const [Tab,setTab] = useState(0)
  return (
    <div>

    
    <Navbar/>
    <div className='mx-20 mt-40'> 
    

 
  
  <div className=' flex justify-center items-center gap-3 mt-10 mx-20 '>
       <div className=' w-1/4 flex flex-col gap-4 shadow-2xl rounded-2xl p-6 h-full'>
       <div className='bg-purple-950 rounded-3xl text-white' >
          <h1 className=' text-2xl font-extrabold ' >ColisDrive</h1>
       </div>
       

       <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4' onClick={()=>setTab(0)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>

      
          <h1 className=' text-2xl font-semibold'>
              Liste des propositions Des Colis 
          </h1>
       </div>
       <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4 w-full' onClick={()=>setTab(1)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>
          <h1 className=' text-2xl font-semibold'>
              Gerer les Colis 
          </h1>
       </div>
       <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4' onClick={()=>setTab(2)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>


      
          <h1 className=' text-2xl font-semibold'>
              Statut de colis 
          </h1>
       </div>
       <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4' onClick={()=>setTab(3)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>
     

      
          <h1 className=' text-2xl font-semibold'>
              Reçu de paiement 
          </h1>
       </div>
       <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4' onClick={()=>setTab(4)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

          <h1 className=' text-2xl font-semibold'>
              Signalez un problem 
          </h1>
       </div>



       <div>

       </div>

          

       </div>
       <div className='w-3/4 flex flex-col gap-4 shadow-2xl rounded-2xl p-6'>
       <div className=' w-full bg-gray-100  flex justify-between items-center py-4 px-10 rounded-2xl '>
        <div className=' flex flex-col gap-3'>
        <h1 className=' text-lg font-bold'>
            Bonjour User !
          </h1>
          <h2 className=' text-lg font-semibold'>
            Vous avez livrez 0 colis , continuez comme ça !!
          </h2>
        </div>
          <img src={img9} alt="" className='w-[11vw] h-[25vh]' />
        </div>
         <div className=' w-full bg-gray-100  flex justify-between items-center py-4 px-10 rounded-2xl'>
         {
          Tab === 0 && <h2>tab 0</h2>
        }
        {
          Tab === 1 && <h2>tab 1</h2>
        }
        {
          Tab === 2 && <h2>tab 2</h2>
        }
        {
          Tab === 3 && <h2>tab 4</h2>
        }
        {
          Tab === 4 && <h2>tab 5</h2>
        }
         </div>
         </div>


       
       
      







  </div>
  </div>
  </div>
  )
}

export default DashboardLivreur