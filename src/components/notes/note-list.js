import React from 'react'

const List = ({notes, deleteNote, handleEdit, selectKey}) =>  {
  return notes.map((note, key) => 
    <div className={selectKey === key ? `requestListItem active` : `requestListItem`} key={key}>
      <span className='float-right text-gray' onClick={e => deleteNote(key)}>X</span> 
      <div onClick={e => handleEdit(key)}>
        {note.title}
        <br />
        <span className='text-gray'>{note.body}</span>
      </div>
    </div>)
}

const noMsg = (
  <p>there is no notes.</p>
)

const NoteList = ({notes, deleteNote, handleEdit, selectKey}) => {
  return (
    <div className='p-2 pt-4'>
      <div className='py-2'>
        {notes.length === 0 ? noMsg : <List notes={notes} deleteNote={deleteNote} handleEdit={handleEdit} selectKey={selectKey} />}
      </div>
    </div>
  )
}

export default NoteList
