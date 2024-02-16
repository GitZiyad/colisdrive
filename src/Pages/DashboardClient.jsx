import React, { useState,useEffect } from 'react'
import img8 from '../assets/image8.png'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useAuth } from '../Store/useAuth'
import toast, { Toaster } from 'react-hot-toast';



const DashboardClient = () => {
  const [tab, setTab] = useState(0)
  const [Colis, setColis] = useState([]);
  const {auth} = useAuth()
  const [depart, setdepart] = useState('');
  const [destination, setdestination] = useState('');
  const [nomdedestinataire, setnomdedestinataire] = useState('');
  const [telephonededestinataire, settelephonededestinataire] = useState('');




  const ajoutdemandelivraison= async () =>{
    try {
      if (nomdedestinataire,telephonededestinataire,depart,destination) {
        const res = await axios.post('http://localhost:4000/Colis/addcolis',{nomdedestinataire,telephonededestinataire,depart,destination},{
          headers: {
            Authorization: auth.token
          }})
      console.log(res.data)
  
  
         if(res.data){
          setColis([...Colis, res.data])
          toast.success('La demmande de livrasion est crée , un de nous livreur soccupe bien tôt !')
          
  
         }else{
          console.log('Un problem est survenu ')
         toast.error('Retenté linsertion des données de livraison ')
  
         }
        
      } else {
        alert('remplissé les champs necessaires ')
        
      }
    
      
    } catch (error) {
      console.log(error)
      
    }
    
    
       
        
    }
    const deletecolis = async (id) => {
      try {
          const res = await axios.delete('http://localhost:4000/Colis/deletecolis/'+id, {
              headers: {
                  Authorization: auth.token
              }
          })
          setColis(Colis.filter(n => n._id != id))
          toast.success('La demande de livraison a été supprimé !')
      } catch (err) {
          console.log(err)
      }
    }
    const Updatecolis = async (id) => {
      try {
       const res = await axios.put('http://localhost:4000/Colis/updatecolis/'+id ,{nomdedestinataire,telephonededestinataire,depart,destination },{
              headers: {
                  Authorization: auth.token
              }
          });
          if (res.data) {


            console.log('La demande de livraison a été modifié ');



            
          } else {
            
          }



       
      } catch (error) {
        console.error('Error deleting produit:', error);
      }
    };



 

  const getColis = async () => {
    const res = await axios.get('http://localhost:4000/Colis/getcolis',{
      headers: {
        Authorization: auth.token
      }})
      console.log(res.data)


 
      if(res.data) {
        console.log(res.data)
        setColis(res.data)
    }
    
  }
  useEffect(()=>{
    getColis()
  },[])


  

  return (
         <div>
           <Navbar/>
           <Toaster/>
           

         
    <div className='mx-20 mt-40'>
     

   
    
    <div className=' flex justify-center items-center gap-3 mt-10 '>
         <div className=' w-1/4 flex flex-col gap-4 shadow-2xl rounded-2xl p-6 '>
         <div className='bg-purple-950 rounded-3xl text-white flex justify-center items-center ' >
            <h1 className=' text-2xl font-extrabold ' >ColisDrive</h1>
         </div>
         

         <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4' onClick={() => setTab(0)}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
</svg>

        
            <h1 className=' text-2xl font-semibold'>
                Ajout de demande livraison
            </h1>
         </div>
         <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4 w-full'
         onClick={() => setTab(1)}
         >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>
            <h1 className=' text-2xl font-semibold'>
                Colis 
            </h1>
         </div>
         <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4' onClick={() => setTab(2)}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>


        
            <h1 className=' text-2xl font-semibold'>
                Suivi de colis
            </h1>
         </div>
        
         <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4 hover:bg-blue-900' onClick={() => setTab(3)} >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>
       

        
            <h1 className=' text-2xl font-semibold'>
                Reçu de paiement 
            </h1>
         </div>



        
         


        <div className='bg-slate-100 rounded-xl flex justify-center items-center gap-4 hover:bg-blue-900 :' onClick={() =>setTab(3)} >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>

            <h1 className=' text-2xl font-semibold'>
              Signalez un probleme
               
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
              Vous avez {auth?.user?.totalcolis} Colis livrée 
            </h2>
            

            
          
          </div>
            <img src={img8} alt="" className='w-[11vw] h-[25vh]' />
          </div>
          <div className=' w-full bg-gray-100  flex justify-between items-center py-4 px-10 rounded-2xl '> 
        {
          tab === 0 && <div className=' flex justify-center items-center '>

            <div className='flex flex-col gap-7  justify-center items-center w-full'>
              <p className='text-lg font-semibold'>Pour demander la livraison d'une colis , veuillez inserer les informations suivant :</p>
            <div className='flex justify-center items-center gap-16 '>
            <div className=' flex justify-center items-center gap-4 text-pretty font-bold'>
              <div className=' flex flex-col gap-3'>
              <h1> Adresse de rammassage : </h1>
              <input type="text" className=' outline-0 rounded-2xl ' onChange={e=> setdepart(e.target.value)} />

              </div>
           
              <div className=' flex flex-col gap-3'>
              <h1>Nom de destinataire :</h1>
              <input type="text" className=' outline-0 rounded-2xl ' onChange={e=> setnomdedestinataire(e.target.value)} />

              </div>
              <div className=' flex flex-col gap-3' >
              <h1>Telephone de destinataire :</h1>
              <input type="text" className=' outline-0 rounded-2xl ' onChange={e=> settelephonededestinataire(e.target.value)} />


              </div>
              <div className=' flex flex-col gap-3'>
              <h1> Destination : </h1>
              <input type="text" className=' outline-0 rounded-2xl ' onChange={e=> setdestination(e.target.value)} />

              </div>
              

              </div>
              
             



            </div>
            
            <button className=' bg-blue-900 rounded-2xl p-4 text-white font-semibold hover:bg-purple-900' onClick={ajoutdemandelivraison}>
            Ajouter 


          </button>


          </div>
         
          </div>

          
        }
        {
          tab === 1 && <div>
            <div className='w-full  flex flex-col justify-center items-center'>
            {
                Colis.map(e=>
                <div>
                  <tab className='  p-10 w-full gap-5  table-fixed  border-spacing-3 '>
                    <tr className='text-blue-900 gap-7 '>
                      
                      <th>Date de creation de <br/>demande </th>
                      <th>Nom de destinataire</th>
                      <th>Numero de telephone de destinataire</th>
                      <th>Lieu de rammassage</th>
                      <th> Destination </th>
                     
                     
                    </tr>
                    <tr >
                    <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                        {new Date(e?.createdAt)?.toLocaleDateString()}
                      </td>
                      <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                      {e?.nomdedestinataire}

                      </td>
                      <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                      {e?.telephonededestinataire}

                      </td>

                      <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                      {e?.depart}

                      </td>

                      
                    
                      <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                      {e?.destination}

                      </td>
                      <div className=' flex justify-center items-center gap-3'>
                      <button className=' bg-green-600 text-white p-4 rounded-3xl font-bold 'onClick={()=>document.getElementById('my_modal_2').showModal()} >Modifier</button>
                      <button className=' bg-red-600 text-white p-4 rounded-3xl  font-bold' onClick={() => deletecolis(e?._id)}>Supprimé</button>

                      </div>

                      

                      
                   


                    </tr>
                  </tab>


                </div>

              )
            }
          </div>
           

          </div>
        }
        {
          tab === 2 && <div>
            <div className='w-full  flex flex-col justify-center items-center border-spacing-3'>
            {
                Colis.map(e=>
                <div>
                  <tab className='  w-full   table-fixed'>
                    <tr className='text-blue-900 gap-5 p-4 '>
                      <th className='p-4'>Date de creation de <br/>demande </th>
                     <th className='p-4' >Statut</th>
                     <th>Depart</th>
                      <th className='p-4' > Destination </th>
                     
                     
                    </tr>
                    <tr >
                    <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                        {new Date(e?.createdAt)?.toLocaleDateString()}
                      </td>
                      {
                        e?.etat == 'Accepté' ?
                        <td className=' bg-green-600 text-white font-bold p-4 rounded-3xl '>
                        {e?.etat}
                      </td> 
                      :
                      <td className=' bg-red-600 text-white font-bold p-4 rounded-3xl '>
                        {e?.etat}
                      </td> 
                      }
                     
                     
                     
                      <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                      {e?.depart}

                      </td>
                    
                      <td className=' bg-blue-900 text-white font-bold p-4 rounded-3xl '>
                      {e?.destination}

                      </td>

                     


                      
                   


                    </tr>
                  </tab>
                  


                </div>

              )
            }
          </div>
           

          </div>
        }
        {
          tab === 3 && <h2>tab 4</h2>
        }
         {
          tab === 4 && <h2>tab 5</h2>
        }
         </div>
         


         </div>
       

         
        







    </div>
    </div>
    <dialog id="my_modal_2" className="modal rounded-3xl bg-white shadow-2xl gap-3">
  <div className="modal-box p-10 m-10 rounded-3xl gap-5 mb-5">
    <h3 className="font-bold text-lg mb-5">Modifier la demande de livraison </h3>
    <div>
  <label
    htmlFor="Title"
    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white "
  >
    Nom de destinataire
  </label>
  <input
    type="text"
    id="first_name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Title"
    required=""
    onChange={e => setnomdedestinataire(e.target.value)}
  />
  <label
    htmlFor="telephone de destinataire"
    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
  >
    Telephone de destinataire
  </label>
  <input
    type="text"
    id="first_name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Title"
    required=""
    onChange={e => settelephonededestinataire(e.target.value)}
  />
</div>
<div>
  <label
    htmlFor="Title"
    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
  >
    Lieu de rammassage
  </label>
  <textarea
    type="text"
    id="first_name"
    className="bg-gray-50 border border-gray-300 h-56 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Title"
    required=""
    onChange={e => setContent(e.target.value)}
  />
</div>
<div>
  <label
    htmlFor="Title"
    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
  >
    Destination
  </label>
  <textarea
    type="text"
    id="first_name"
    className="bg-gray-50 border border-gray-300 h-56 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Title"
    required=""
    onChange={e => setContent(e.target.value)}
  />
</div>
<button
  type="button"
  onClick={Updatecolis}
  className=" flex justify-center items-center  bg-blue-900 rounded-3xl text-white font-extrabold p-3 mt-4 w-full"
>
  Modifié les informations
</button>

  </div>
  <form method="dialog" className="modal-backdrop flex justify-center items-center mb-2" >
    <button className='bg-red-500 text-white font-bold rounded-xl p-5 '> Annulé</button>
  </form>
</dialog>
    
    </div>
  )
}

export default DashboardClient