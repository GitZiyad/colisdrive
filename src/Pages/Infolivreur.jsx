import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 
const Infolivreur = () => {
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [motdepasse, setmotdepasse] = useState('');
  const [remotdepase, setremotdepase] = useState('');
  const [email, setemail] = useState('');
  const [idnational, setidnational] = useState('');
  const [adresse,setadresse] = useState('');
  const [photo, setphoto] = useState('');
  const [imagenationnalrecto, setimagenationnalrecto] = useState('');
  const [imagenationnalverso, setimagenationnalverso] = useState('');
  const [cv, setcv] = useState('');
  const navigate = useNavigate()

  const NouveauLivreur= async () =>{
    try {
      const res = await axios.post('http://localhost:4000/Clients/registerclient', {nom,prenom,motdepasse,email,idnational,adresse,photo,imagenationnalrecto,imagenationnalverso,cv});
    console.log(res.data)

    if (motdepasse == remotdepase){
       if(res.data){
        toast.success('Bienvenue Chez ColisDrive Notre Nouveau Livreur !,Si vous avez besoin de plus dinformations contactez le support!, connectez-vous et éffectué vos premier pas ! '),
        navigate('/login')

       }else{
        console.error('Something wrong!');

       }
      }else{
        toast.error('Veuillez répetez le même mot de passe inserer !')

      }
      
    } catch (error) {
      console.log(error)
      
    }
    
    
       
        
    }


  





  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-2xl ">
  <div className="max-w-6xl px-4 mx-auto">
    <div className="p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-900 dark:border-gray-900">
      <div className="pb-6 border-b border-gray-100 dark:border-gray-700 ">
        <h2 className="text-xl font-bold text-gray-800 md:text-3xl dark:text-gray-300">
          Info basic
        </h2>
        <p className="text-xs font-medium text-gray-500">
          Veuillez inserez tout les informations necessaire pour completez votre demande d'integration comme livreur ColisDrive 
        </p>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                Votre nom et prenom 
              </p>
            </div>
            <div className="w-full p-3 md:w-1/3">
              <input
                className="w-full dark:bg-gray-800 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder="Adam"
                onChange={e=>setnom(e.target.value)}
              />
            </div>
            <div className="w-full p-3 md:w-1/3">
              <input
                className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder="Smith"
                onChange={e=>setprenom(e.target.value)}

              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                Cree un mot de passe pour votre compte Colisdrive
              </p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <input
                className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="password"
                placeholder="************"
                onChange={e=>setmotdepasse(e.target.value)}

                
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                Saisir a nouveau le mot de passe 
              </p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <input
                className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="password"
                placeholder="***********"
                onChange={e=>setremotdepase(e.target.value)}

              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-base font-semibold text-gray-700 dark:text-gray-400">
                Email address
              </p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <input
                className="w-full px-4 py-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="email"
                placeholder="adam@gmail.com"
                onChange={e=>setemail(e.target.value)}

              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                Numero Carte Nationnal
              </p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <input
                className="w-full px-4 dark:bg-gray-800 dark:placeholder-gray-500 dark:text-gray-400  dark:border-gray-700 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder="EXXXXXXX"
                onChange={e=>setidnational(e.target.value)}

              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                Adresse
              </p>
            </div>
            <div className="w-full p-3 md:flex-1">
              <textarea
                rows={4}
                type="message"
                placeholder="Saisir votre adresse ici "
                required=""
                className="block w-full px-4 py-4 leading-tight placeholder-gray-400 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                defaultValue={""}
                onChange={e=>setadresse(e.target.value)}

              />
            </div>
          </div>
        </div>
      </div>

      
     
      
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                Photo
              </p>
            </div>
            <div className="w-full p-3 md:w-auto">
              <img
                src={photo}
                alt=""
                className="object-cover w-24 h-24 rounded-full"      
                          


              />
            </div>
            <div className="w-full p-3 md:flex-1">
              <div className="flex items-center justify-center w-full" >
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 bg-white border-2 border-gray-200 border-dashed rounded-lg cursor-pointer dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
                >
                  <div className="flex flex-col items-center justify-center px-4 pt-5 pb-6">
                    <span className="text-blue-500 dark:text-gray-400">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="w-8 h-8 bi bi-cloud-upload"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                    </span>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-blue-500">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (upto 10MB)
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-gray-100 dark:border-gray-800">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3 md:w-1/3">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-400">
                Importez votre carte nationnal Recto-verso et votre CV professionnel 
              </p>
            </div>
            <div className="w-full p-3 md:flex-1 flex flex-col gap-4 ">
            <label for="avatar">Carte nationnal Recto</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={e=>setimagenationnalrecto(e.target.value)}/>
            <label for="avatar">Carte nationnal Verso</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"onChange={e=>setimagenationnalverso(e.target.value)} />
            <label for="avatar">Votre Cv</label>
            <input type="file" id="avatar" name="avatar" onChange={e=>setcv(e.target.value)} />


            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-6 flex-wrap -m-1.5">
        <div className="w-full md:w-auto p-1.5">
          <button className="flex flex-wrap justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 " onClick={NouveauLivreur}>
            <p>Enoyez les données </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Infolivreur