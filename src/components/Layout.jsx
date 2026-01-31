import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../store/actions/contactsActions'
import { fetchGroups } from '../store/actions/groupsActions'
import './Layout.css'

const Layout = () => {
  const dispatch = useDispatch()
  const { items: contacts } = useSelector(state => state.contacts)
  const { items: groups } = useSelector(state => state.groups)

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts())
    }
  }, [dispatch, contacts.length])

  useEffect(() => {
    if (groups.length === 0) {
      dispatch(fetchGroups())
    }
  }, [dispatch, groups.length])

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-title">Контакты</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Все контакты</Link>
            </li>
            <li>
              <Link to="/groups">Группы</Link>
            </li>
            <li>
              <Link to="/favorites">Избранное</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
