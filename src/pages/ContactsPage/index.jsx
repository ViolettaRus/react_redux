import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchContacts, setContactsFilter } from '../../store/actions/contactsActions'
import { addToFavorites, removeFromFavorites } from '../../store/actions/favoritesActions'
import './ContactsPage.css'

const ContactsPage = () => {
  const dispatch = useDispatch()
  const { items: contacts, loading, error, filter } = useSelector(state => state.contacts)
  const { items: groups } = useSelector(state => state.groups)
  const { contactIds: favoriteIds } = useSelector(state => state.favorites)

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts())
    }
  }, [dispatch, contacts.length])

  const handleFilterChange = (field, value) => {
    dispatch(setContactsFilter({ [field]: value }))
  }

  const toggleFavorite = (contactId) => {
    if (favoriteIds.includes(contactId)) {
      dispatch(removeFromFavorites(contactId))
    } else {
      dispatch(addToFavorites(contactId))
    }
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesName = contact.name.toLowerCase().includes(filter.name.toLowerCase())
    const matchesGroup = !filter.groupId || contact.groupId === parseInt(filter.groupId)
    return matchesName && matchesGroup
  })

  if (loading) {
    return <div className="loading">Загрузка контактов...</div>
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>
  }

  return (
    <div className="contacts-page">
      <h2>Все контакты</h2>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Поиск по имени..."
          value={filter.name}
          onChange={(e) => handleFilterChange('name', e.target.value)}
          className="filter-input"
        />
        <select
          value={filter.groupId || ''}
          onChange={(e) => handleFilterChange('groupId', e.target.value || null)}
          className="filter-select"
        >
          <option value="">Все группы</option>
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      <div className="contacts-grid">
        {filteredContacts.map(contact => {
          const group = groups.find(g => g.id === contact.groupId)
          const isFavorite = favoriteIds.includes(contact.id)
          
          return (
            <div key={contact.id} className="contact-card">
              <div className="contact-header">
                <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
                <button
                  className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(contact.id)}
                  title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                >
                  {isFavorite ? '★' : '☆'}
                </button>
              </div>
              <h3>
                <Link to={`/contact/${contact.id}`} className="contact-link">
                  {contact.name}
                </Link>
              </h3>
              <p className="contact-phone">{contact.phone}</p>
              <p className="contact-email">{contact.email}</p>
              {group && (
                <Link to={`/group/${group.id}`} className="contact-group">
                  <span
                    className="group-badge"
                    style={{ backgroundColor: group.color }}
                  >
                    {group.name}
                  </span>
                </Link>
              )}
            </div>
          )
        })}
      </div>

      {filteredContacts.length === 0 && (
        <div className="no-results">Контакты не найдены</div>
      )}
    </div>
  )
}

export default ContactsPage
