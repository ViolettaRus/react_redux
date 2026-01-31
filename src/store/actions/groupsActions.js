// Action types
export const FETCH_GROUPS_START = 'FETCH_GROUPS_START'
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS'
export const FETCH_GROUPS_ERROR = 'FETCH_GROUPS_ERROR'

// Action creators
export const fetchGroupsStart = () => ({
  type: FETCH_GROUPS_START,
})

export const fetchGroupsSuccess = (groups) => ({
  type: FETCH_GROUPS_SUCCESS,
  payload: groups,
})

export const fetchGroupsError = (error) => ({
  type: FETCH_GROUPS_ERROR,
  payload: error,
})

// Thunk action creator для имитации загрузки данных
export const fetchGroups = () => {
  return (dispatch) => {
    dispatch(fetchGroupsStart())
    
    // Имитация загрузки данных с сервера
    setTimeout(() => {
      const mockGroups = [
        {
          id: 1,
          name: 'Семья',
          description: 'Близкие родственники',
          color: '#FF6B6B',
        },
        {
          id: 2,
          name: 'Работа',
          description: 'Коллеги и деловые партнеры',
          color: '#4ECDC4',
        },
        {
          id: 3,
          name: 'Друзья',
          description: 'Близкие друзья',
          color: '#95E1D3',
        },
      ]
      
      dispatch(fetchGroupsSuccess(mockGroups))
    }, 800) // Имитация задержки сети
  }
}
