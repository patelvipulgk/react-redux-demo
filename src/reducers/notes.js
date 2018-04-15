export default function notes (state = [], action = {}) {
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.data
    default:
      return state
  }
}
