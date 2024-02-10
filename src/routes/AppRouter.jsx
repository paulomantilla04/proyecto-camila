import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from '../components/MainApp';
import Start from '../components/Start';

const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Start/>}></Route>
            <Route path='/invitado/:nombre' element={<MainApp/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter