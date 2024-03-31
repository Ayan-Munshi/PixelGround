import React from "react";
import { FcSearch } from "react-icons/fc";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdNotificationAdd } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

function Nav_bar() {
  const style = {   // Mui object to use it in sign in panel design
    height: 400,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    
  };

  const [open, setOpen] = React.useState(false); //Mui
  const handleOpen = () => setOpen(true);  //Mui
  const handleClose = () => setOpen(false); //Mui

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
          <Box sx={style} className=' rounded-3xl '>
            <form action="" className="flex flex-col items-center ">
              <lebel className='mr-[130px] mt-[40px]'>Email :</lebel>
              <input type="text" className="mb-2" placeholder="Enter email..."/>
              <lebel className='mr-[110px] mt-[10px]'>Password</lebel>
              <input type="text" placeholder="Enter password..."/>
              <button className="mt-[40px] border border-gray-400 px-5 rounded-lg"> Sign up </button>
            </form>
            
          </Box>
        </Modal>
      </div>

      <div className="flex  md:w-1/2 lg:w-1/3 xl:w-1/7 2xl:w-1/5 my-2 mr-[300px] rounded-2xl">  {/** the responsive search box */}
        <input
          type="text"
          className=" h-[100%] w-[100%] px-2 py-2 rounded-2xl border border-black bg-black focus:outline-none focus:border-blue-500 "
          placeholder="Search here....."
        />
        <FcSearch className="size-10 mt-2" />
      </div>

      <div
        id="icons"
        className="flex bg-transparent mx-9 my-8 mr-[100px] gap-2"
      >

        <button onClick={handleOpen} className=" mr-1"> {/** signin button to show the sign in panel(imported) */}

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
