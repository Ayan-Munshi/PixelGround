import React, { useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import db,{storage} from '../firebase'
import {addDoc, collection,serverTimestamp} from 'firebase/firestore'
import {getDownloadURL, ref,uploadBytes} from 'firebase/storage'
import { RiUpload2Fill } from "react-icons/ri";


function Upload_files_button({user_name}) {

    const style = {
        // Mui object to use it in sign in panel design
        height: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        bgcolor: "black",
        border: "2px solid white",
        boxShadow: 24,
        p: 4,
      };

      const[upload_panel,setupload_panel] = React.useState(false)
      const [caption,setcaption] = useState("")
      const [image,setimage] = useState("")
      // const [progressbar,setprogressbar] = useState(null)


      const image_handler = (e) => {
        
        if(e.target.files[0]){
            setimage(e.target.files[0])
        }
      }

      const upload_handler = (e) => {
       e.preventDefault()
        const imageref = ref(storage,`images/${image.name}`) // this line will search for a folder named images (if already not cretaed then also create) in FB storage(not in database) to save the user uploaded image name
        uploadBytes(imageref,image)                           // this will upload the image named as image.nmae in images folder
        
        .then((reference) => getDownloadURL(reference.ref))    // this will download the url of the previously uploaded image from storage

        .then((url) => {                                         // this will upload the url in the database of FB
              addDoc(collection(db,'posts'),{
              caption:caption,
              image_url : url,
              username : user_name,
              timestamp : serverTimestamp()
          })
      })
  }
        
  return (
    <div >
        <div>
        <Modal open={upload_panel} onClose={() => setupload_panel(false)}>
          <Box sx={style} className=" rounded-3xl text-white">
            <form action="submit" className="flex flex-col items-center ">

            <img src="https://img.freepik.com/premium-vector/pixel-logo-with-letter-p-black-background_853558-1718.jpg" alt="" 
              className="h-[60px] w-[90px] mr-[300px] mt-[-20px]"/>
              
              <lebel className="mr-[120px] mt-[10px]">Caption :</lebel>
              <input
                type="text"
                value={caption}
                className="mb-2 rounded p-1 bg-transparent"
                placeholder="Enter caption here..."
                onChange={(e) => setcaption(e.target.value)}
              />
              <lebel className="mr-[70px] mt-[10px]">Choose image here :</lebel>
              <input
                type="file"
                className="rounded p-1 bg-transparent ml-[110px]"              
                onChange={image_handler}
              />
              {/* <progress value={progressbar} className="mt-[40px] text-[5px] w-[250px]"></progress> */}
              <button
                onClick={upload_handler}
                className=" flex gap-1 mt-[30px] border border-gray-400 px-5 rounded-lg  hover:bg-blue-500"
              >
                Upload <RiUpload2Fill className='gap-1 mt-[4.5px]' />
              </button>
            </form>
          </Box>
        </Modal>
        </div>

      <button onClick={() => setupload_panel(true) }>
        <MdAddAPhoto className='text-2xl ml-4'/>
      </button>
    </div>
  )
}

export default Upload_files_button
