import CrudItem from "./CrudItem/CrudItem";

const CrudContainer = function({noteList, removeNote}) {
    
  return (
    <div className='crud-container'>
      {noteList.map(note => <CrudItem
        key={note.id} 
        note={note}
        removeNote={removeNote}
      />)}
    </div>
  )
}

export default CrudContainer;