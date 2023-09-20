import React from 'react'
import Home from '../container/Home'
import {BrowserRouter , Routes ,Route} from "react-router-dom"

export default function Router() {
  return (
<BrowserRouter>
<Routes>
    <Route path ='*' element ={<Home />} />
</Routes>
</BrowserRouter>
    )
}
