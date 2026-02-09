import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchGroups } from '../../store/actions/groupsActions'
import './GroupsPage.css'

const GroupsPage = () => {
  const dispatch = useDispatch()
  const { items: groups, loading, error } = useSelector(state => state.groups)
  const { items: contacts } = useSelector(state => state.contacts)

  useEffect(() => {
    if (groups.length === 0) {
      dispatch(fetchGroups())
    }
  }, [dispatch, groups.length])

  const getGroupContactsCount = (groupId) => {
    return contacts.filter(c => c.groupId === groupId).length
  }

  if (loading) {
    return <div className="loading">Загрузка групп...</div>
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>
  }

  return (
    <div className="groups-page">
      <h2>Все группы</h2>
      
      <div className="groups-grid">
        {groups.map(group => {
          const contactsCount = getGroupContactsCount(group.id)
          
          return (
            <Link key={group.id} to={`/group/${group.id}`} className="group-card">
              <div
                className="group-color-bar"
                style={{ backgroundColor: group.color }}
              />
              <div className="group-content">
                <h3>{group.name}</h3>
                <p className="group-description">{group.description}</p>
                <p className="group-count">
                  Контактов: {contactsCount}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {groups.length === 0 && (
        <div className="no-results">Группы не найдены</div>
      )}
    </div>
  )
}

export default GroupsPage
