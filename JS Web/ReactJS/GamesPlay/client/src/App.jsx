import { Routes, Route } from 'react-router-dom'

import { AuthContextProvider } from './contexts/authContext'

import CatalogGame from "./components/games/CatalogGame"
import CreateGame from "./components/games/CreateGame"
import DetailsGame from "./components/games/DetailsGame"
import EditGame from "./components/games/EditGame"
import DeleteGame from './components/games/DeleteGame'
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Logout from './components/logout/Logout'

function App() {

  return (
    <AuthContextProvider>
      <div id="box">
        <Header />

        <main id="main-content">

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/games/create' element={<CreateGame />} />
            <Route path='/games/:gameId/edit' element={<EditGame />} />
            <Route path='/games/:gameId/delete' element={<DeleteGame />} />
            <Route path='/games/:gameId/details' element={<DetailsGame />} />
            <Route path='/games/catalog' element={<CatalogGame />} />

          </Routes>

        </main>
      </div>
    </AuthContextProvider>
  )
}

export default App
