import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ContactsPage from './pages/ContactsPage'
import ContactPage from './pages/ContactPage'
import GroupsPage from './pages/GroupsPage'
import GroupPage from './pages/GroupPage'
import FavoritesPage from './pages/FavoritesPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactsPage />} />
          <Route path="contact/:id" element={<ContactPage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="group/:id" element={<GroupPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
