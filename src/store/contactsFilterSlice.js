import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  groupId: null,
}

const contactsFilterSlice = createSlice({
  name: 'contactsFilter',
  initialState,
  reducers: {
    setContactsFilter: (state, action) => {
      Object.assign(state, action.payload)
    },
  },
})

export const { setContactsFilter } = contactsFilterSlice.actions
export default contactsFilterSlice.reducer
