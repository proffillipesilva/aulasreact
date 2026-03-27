import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './form/components/Input'
import Button from './form/components/Button'
import axios from 'axios'

import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FormPage from './form/FormPage'
import TablePage from './table/TablePage'
import HomePage from './home/HomePage'
import NotFound from './notFound/NotFoundPage'


const App = props => {
 
  

  return (
    <div>
        
          <div><Link to={"/"}>Voltar para Home</Link></div>
          <div ><Link to={"/form"}>Form</Link></div>
          <div ><Link to={"/table"}>Table</Link></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='form' element={<FormPage />} />
            <Route path='table' element={<TablePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
    </div>
  )
}

App.propTypes = {}

export default App