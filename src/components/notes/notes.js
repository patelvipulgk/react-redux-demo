import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NoteForm from './note-form'
import NoteList from './note-list'
import { fetchNotes, deleteNote, addNote } from '../../actions/notes'

class Notes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      body: ''
    }
  }
  componentDidMount () {
    this.props.fetchNotes()
    this.deleteNote = this.deleteNote.bind(this)
    this.addNote = this.addNote.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd () {
    this.setState({
      id: '',
      title: '',
      body: ''
    })
  }
  handleEdit (index) {
    this.setState({
      id: index,
      title: this.props.notes[index].title,
      body: this.props.notes[index].body
    })
  }
  handleChange (e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  deleteNote (index) {
    this.props.deleteNote(index, Object.assign([], this.props.notes))
  }
  addNote (e) {
    e.preventDefault()
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    }
    this.props.addNote(data, Object.assign([], this.props.notes))
    this.handleAdd()
  }

  render () {
    const {notes} = this.props
    const {id} = this.state
    return (
      <div>
        <div className='row no-gutters'>
          <div className='col-lg-3 sidebar'>
            <NoteList notes={notes} deleteNote={this.deleteNote} handleEdit={this.handleEdit} selectKey={id} />
          </div>
          <div className='col-lg-9'>
            <NoteForm {...this.state} addNote={this.addNote} handleChange={this.handleChange} handleAdd={this.handleAdd} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {notes: state.notes}
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchNotes: fetchNotes, deleteNote: deleteNote, addNote: addNote }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes)
