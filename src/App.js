import './App.css'
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import { useSelector } from 'react-redux'

function App() {

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
  
  return (
    <div className='App'>

      {isLoggedIn ?  <Layout /> : <Login />}
      
    </div>
  )
}

export default App;
