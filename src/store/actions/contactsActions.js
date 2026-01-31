// Action types
export const FETCH_CONTACTS_START = 'FETCH_CONTACTS_START'
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
export const SET_CONTACTS_FILTER = 'SET_CONTACTS_FILTER'

// Action creators
export const fetchContactsStart = () => ({
  type: FETCH_CONTACTS_START,
})

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
})

export const fetchContactsError = (error) => ({
  type: FETCH_CONTACTS_ERROR,
  payload: error,
})

export const setContactsFilter = (filter) => ({
  type: SET_CONTACTS_FILTER,
  payload: filter,
})

// Thunk action creator для имитации загрузки данных
export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(fetchContactsStart())
    
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      const mockContacts = [
        {
          id: 1,
          name: 'Иван Иванов',
          phone: '+7 (999) 123-45-67',
          email: 'ivan@example.com',
          groupId: 1,
          avatar: 'https://i.pravatar.cc/150?img=1',
        },
        {
          id: 2,
          name: 'Мария Петрова',
          phone: '+7 (999) 234-56-78',
          email: 'maria@example.com',
          groupId: 2,
          avatar: 'https://i.pravatar.cc/150?img=2',
        },
        {
          id: 3,
          name: 'Алексей Сидоров',
          phone: '+7 (999) 345-67-89',
          email: 'alex@example.com',
          groupId: 1,
          avatar: 'https://i.pravatar.cc/150?img=3',
        },
        {
          id: 4,
          name: 'Елена Козлова',
          phone: '+7 (999) 456-78-90',
          email: 'elena@example.com',
          groupId: 3,
          avatar: 'https://i.pravatar.cc/150?img=4',
        },
        {
          id: 5,
          name: 'Дмитрий Волков',
          phone: '+7 (999) 567-89-01',
          email: 'dmitry@example.com',
          groupId: 2,
          avatar: 'https://i.pravatar.cc/150?img=5',
        },
        {
          id: 6,
          name: 'Анна Смирнова',
          phone: '+7 (999) 678-90-12',
          email: 'anna@example.com',
          groupId: 1,
          avatar: 'https://i.pravatar.cc/150?img=6',
        },
      ]
      
      dispatch(fetchContactsSuccess(mockContacts))
    }, 1000) // Имитация задержки сети
  }
}
