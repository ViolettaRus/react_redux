import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { addToFavorites, removeFromFavorites } from '../../store/actions/favoritesActions'
import './ContactPage.css'

const ContactPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items: contacts } = useSelector(state => state.contacts)
  const { items: groups } = useSelector(state => state.groups)
  const { contactIds: favoriteIds } = useSelector(state => state.favorites)

  const contact = contacts.find(c => c.id === parseInt(id))
  const group = contact ? groups.find(g => g.id === contact.groupId) : null
  const isFavorite = favoriteIds.includes(parseInt(id))

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(parseInt(id)))
    } else {
      dispatch(addToFavorites(parseInt(id)))
    }
  }

  if (!contact) {
    return (
      <div className="contact-page">
        <div className="error">Контакт не найден</div>
        <Link to="/" className="back-link">← Вернуться к списку контактов</Link>
      </div>
    )
  }

  return (
    <div className="contact-page">
      <Link to="/" className="back-link">← Вернуться к списку контактов</Link>
      
      <div className="contact-detail">
        <div className="contact-detail-header">
          <img src={contact.avatar} alt={contact.name} className="contact-detail-avatar" />
          <div className="contact-detail-info">
            <h2>{contact.name}</h2>
            <button
              className={`favorite-btn-large ${isFavorite ? 'active' : ''}`}
              onClick={toggleFavorite}
            >
              {isFavorite ? '★ В избранном' : '☆ Добавить в избранное'}
            </button>
          </div>
        </div>

        <div className="contact-detail-body">
          <div className="detail-item">
            <span className="detail-label">Телефон:</span>
            <span className="detail-value">{contact.phone}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{contact.email}</span>
          </div>
          {group && (
            <div className="detail-item">
              <span className="detail-label">Группа:</span>
              <Link to={`/group/${group.id}`} className="detail-value">
                <span
                  className="group-badge-large"
                  style={{ backgroundColor: group.color }}
                >
                  {group.name}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
