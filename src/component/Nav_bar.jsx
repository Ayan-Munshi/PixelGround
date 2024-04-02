import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdNotificationAdd } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

function Nav_bar() {
  const style = {   // Mui object to use it in sign in panel design
    height: 400,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    border: "2px solid white",
    boxShadow: 24,
    p: 4,
    
  };

  const [open, setOpen] = React.useState(false); //Mui
  const handleOpen = () => setOpen(true);  //Mui
  const handleClose = () => setOpen(false); //Mui


  const[username,setusername] = useState("")
  const[password,setpassword] = useState("")
  const[email,setemail] = useState("")
  const[user,setuser] = useState(null)

  

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {   // this is the listener/gatekeeper, this will remember who alrady has an account here who has not
      if(authuser){       // if we have user in authuser then
        // user has logged in
        setuser(authuser)
       
      }else{
        // user has logged out
        setuser(null)
      }
    })
  },[user,username])
  

  const signup = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then((newly_added_useraccount) =>{  // creating new accounnt of user for the first time here with this button function

     console.log(newly_added_useraccount)
     return updateProfile(newly_added_useraccount.user,{   // (.user) is the user who has logged in (from above code) and we are updating the profile/account of that user here (displayname by firebaseauth will be the username(which user filledout at the account creating time))
      displayName: username
     })
    }).catch((e) => alert(e.message))
  }
  

  return (
    <div className=" flex text-white bg-gray-700 h-[80px] w-full justify-between p-1 sticky top-0 z-[100]">
      <img
        src="https://img.freepik.com/premium-vector/pixel-logo-with-letter-p-black-background_853558-1718.jpg"
        alt=""
        className=" object-cover rounded-3xl "
      />

      <div id=" sign up panel"> {/** this panel will be shown after clicking the sign up button (imported) */}
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style} className=' rounded-3xl text-white'>

            <form action="submit" className="flex flex-col items-center ">
              <lebel className='mr-[90px]'>User name :</lebel>
              <input type="text" value={username} className="rounded p-1 bg-transparent" placeholder="Enter User name..."
              onChange={(e) => setusername(e.target.value) }
              />
              <lebel className='mr-[130px] mt-[10px]'>Email :</lebel>
              <input type="text" value={email} className="mb-2 rounded p-1 bg-transparent" placeholder="Enter email..."
              onChange={(e) => setemail(e.target.value)}
              />
              <lebel className='mr-[100px] mt-[10px]'>Password :</lebel>
              <input type="text" value={password} className="rounded p-1 bg-transparent" placeholder="Enter password..."
              onChange={(e) => setpassword(e.target.value)}
              />
              <button className="mt-[40px] border border-gray-400 px-5 rounded-lg  hover:bg-blue-500"
              onClick={signup}
              > Sign up </button>
            </form>
            
          </Box>
        </Modal>
      </div>

      <div className="flex md:w-1/2 lg:w-11/12 xl:w-1/7 2xl:w-1/5 my-2 ml-[150px] lg:mr-0 xl:mr-[300px] rounded-2xl"> {/** the responsive search box */}
        <input
          type="text"
          className=" h-[100%] w-[100%] px-2 py-2 rounded-2xl border border-black bg-black focus:outline-none focus:border-blue-500 "
          placeholder="Search here....."
        />
        <FcSearch className="size-10 mt-2" />
      </div>

      <div
        id="icons"
        className="flex bg-transparent  my-8 mr-[40px] gap-2"
      >

        <button onClick={handleOpen} className=" mr-1"> {/** signin button to show the sign in panel(imported from MUI) */}

          <SiGnuprivacyguard className="bg-transparent ml-2" />
          <h1 className="text-[10px] bg-transparent"> signup </h1>

        </button>

        <MdNotificationAdd />

        <TiMessages className="ml-2 mr-2" />

        <CgProfile />

      </div>
    </div>
  );
}

export default Nav_bar;
