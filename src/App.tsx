import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import routes from './config/routes.ts'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Provider store={store}>
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
        </Provider>
    </BrowserRouter>
  )
}

export default App