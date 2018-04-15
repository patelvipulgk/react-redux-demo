import React, { Component } from 'react'

class NoteForm extends Component {
  render () {
    const {addNote, handleChange, title, body, handleAdd} = this.props
    return (
      <div className='p-4 pt-4'>
        <button type='button' className='btn btn-outline-dark float-right' onClick={handleAdd}>
          Add Note
        </button>
        <div className='form'>
          <form onSubmit={addNote}>
            <div className='form-group'>
              <label htmlFor='title'>
                Title
              </label>
              <input
                type='text'
                name='title'
                className='form-control'
                id='title'
                placeholder='Enter title'
                onChange={handleChange}
                value={title} />
            </div>
            <div className='form-group'>
              <label htmlFor='body'>
                Body
              </label>
              <textarea
                name='body'
                className='form-control'
                id='body'
                placeholder='body'
                onChange={handleChange}
                value={body} />
            </div>
            <button type='submit' className='btn btn-primary float-right'>
              Save
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NoteForm
