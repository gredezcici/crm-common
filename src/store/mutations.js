export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_QUERY_RESULT (state, data) {
    state.datatableModel.queryResult = data
  },
  SET_COLUMN_NAME (state, columns) {
    state.datatableModel.columnName = columns
  }
}
