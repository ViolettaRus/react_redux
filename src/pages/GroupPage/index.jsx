import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import './GroupPage.css'

const GroupPage = () => {
  const { id } = useParams()
  const { items: groups } = useSelector(state => state.groups)
  const { items: contacts } = useSelector(state => state.contacts)

  const group = groups.find(g => g.id === parseInt(id))
  const groupContacts = contacts.filter(c => c.groupId === parseInt(id))

  if (!group) {
    return (
      <div className="group-page">
        <div className="error">Группа не найдена</div>
        <Link to="/groups" className="back-link">← Вернуться к списку групп</Link>
      </div>
    )
  }

  return (
    <div className="group-page">
      <Link to="/groups" className="back-link">← Вернуться к списку групп</Link>
      
      <div className="group-detail">
        <div className="group-detail-header">
          <div
            className="group-detail-color"
            style={{ backgroundColor: group.color }}
          />
          <div className="group-detail-info">
            <h2>{group.name}</h2>
            <p className="group-detail-description">{group.description}</p>
            <p className="group-detail-count">
              Контактов в группе: {groupContacts.length}
            </p>
          </div>
        </div>

        <div className="group-contacts">
          <h3>Контакты в группе</h3>
          {groupContacts.length > 0 ? (
            <div className="contacts-list">
              {groupContacts.map(contact => (
                <Link
                  key={contact.id}
                  to={`/contact/${contact.id}`}
                  className="contact-item"
                >
                  <img src={contact.avatar} alt={contact.name} className="contact-item-avatar" />
                  <div className="contact-item-info">
                    <h4>{contact.name}</h4>
                    <p>{contact.phone}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-contacts">В этой группе пока нет контактов</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GroupPage
