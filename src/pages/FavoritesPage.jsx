import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavorites } from '../store/actions/favoritesActions'
import './FavoritesPage.css'

const FavoritesPage = () => {
  const dispatch = useDispatch()
  const { items: contacts } = useSelector(state => state.contacts)
  const { items: groups } = useSelector(state => state.groups)
  const { contactIds: favoriteIds } = useSelector(state => state.favorites)

  const favoriteContacts = contacts.filter(c => favoriteIds.includes(c.id))

  const handleRemoveFavorite = (contactId) => {
    dispatch(removeFromFavorites(contactId))
  }

  return (
    <div className="favorites-page">
      <h2>Избранные контакты</h2>
      
      {favoriteContacts.length > 0 ? (
        <div className="contacts-grid">
          {favoriteContacts.map(contact => {
            const group = groups.find(g => g.id === contact.groupId)
            
            return (
              <div key={contact.id} className="contact-card">
                <div className="contact-header">
                  <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
                  <button
                    className="favorite-btn active"
                    onClick={() => handleRemoveFavorite(contact.id)}
                    title="Удалить из избранного"
                  >
                    ★
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
      ) : (
        <div className="no-favorites">
          <p>У вас пока нет избранных контактов</p>
          <Link to="/" className="link-to-contacts">
            Перейти к списку контактов
          </Link>
        </div>
      )}
    </div>
  )
}

export default FavoritesPage
