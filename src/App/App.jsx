
import { Contacts } from '../Pages/Contacts'
import { Route, Routes} from "react-router-dom"
import { Login } from '../components/Login/Login'
import { Profile } from '../Pages/Profile'
import { Home } from '../components/Home/Home'
import '../App/App.scss';


function App() {
  return (
    <>  
      <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App