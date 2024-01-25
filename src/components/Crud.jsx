import CrudForm from "./CrudForm/CrudForm";
import CrudContainer from "./CrudContainer/CrudContainer";
import { useState, useEffect } from "react";

const Crud = function() {
  const url = 'http://localhost:7070/notes';
  const [note, setNote] = useState({content: '', id: ''});
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    fetch(url)
      .then((response) => response.json())
      .then(result => {
        if (result) {
          setNoteList(result);
        }
      });
  }

  async function createNewNote() {
    const newNote = {...note};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newNote),
    })
      .then(response => {
        if (response.ok) {
          getNotes();
          setNote({content: '', id: ''});
        }
      })
  }

  async function removeNote(id) {
    fetch(`${url}/${id}`, {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          getNotes();
        }
      })
  }
  
  function handleChange(e) {
    const { value } = e.target;
    setNote({...note, content: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    createNewNote();
  }

  return (
    <>
      <button className="update-button" type="button" onClick={() => getNotes()}>Обновить</button>     
      <CrudForm note={note} onChange={handleChange} onSubmit={handleSubmit} />
      <CrudContainer noteList={noteList} removeNote={removeNote}/>
    </>
  )
}

export default Crud;