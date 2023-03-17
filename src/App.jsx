import React from 'react'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Components/SignUp/Signup'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;