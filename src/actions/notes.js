import axios from 'axios'

export const fetchNotesSuccess = (data) => {
  return {
    type: 'FETCH_NOTES',
    data}
}

export function fetchNotes () {
  return dispatch => {
    return axios.get('/data.json')
      .then(response => {
        dispatch(fetchNotesSuccess(eval(response.data)))
      })
      .catch(error => {
        throw (error)
      })
  }
}

export function deleteNote (index, notes = []) {
  notes.splice(index, 1)
  return dispatch => {
    return dispatch(fetchNotesSuccess(notes))
  }
}

export function addNote (data, notes = []) {
  const newData = {
    title: data.title,
    body: data.body
  }
  if (data.id !== '') {
    notes[data.id] = newData
  } else {
    notes.push(newData)
  }

  return dispatch => {
    return dispatch(fetchNotesSuccess(notes))
  }
}
