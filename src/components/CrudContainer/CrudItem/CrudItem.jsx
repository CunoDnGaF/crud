const CrudItem = function({ note, removeNote }) {
  const { content, id } = note;

  return (
    <div className="note">
      <span className="note-content">{content}</span>
      <button type="button" onClick={() => removeNote(id)} className="remove-button">Удалить</button>
    </div>
  )
}

export default CrudItem;