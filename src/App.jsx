import './App.css'
import Nav_bar from './component/Nav_bar'
import Posts from './component/Posts'

function App() {
  

  return (
    <div className=" flex flex-col bg-gray-500 items-center  " sstyle={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlutqPeXVBG0mIOa-LG8f4OdGznYMdINEStgJp2ql4iqugPX3gCXpCrWHwDqaknjhhmA&usqp=CAU')" }}>
      
      <Nav_bar/>
     <br></br>
      <Posts />
      
      
      
    </div>
  )
}

export default App
