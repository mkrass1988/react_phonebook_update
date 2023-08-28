import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Dashboard from './pages/Dashboard.tsx'
import About from './pages/About.tsx'
import routes from './config/routes.ts'

function App() {

  return (
    <BrowserRouter>
      {/* {Navbar goes here} */}
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
            key={index}
            path={route.path}
            element={
              <route.component />
            }
            />
          ))  }
        </Routes>
    </BrowserRouter>
  )
}

export default App