const CrudForm = function({note, onChange, onSubmit}){
  const { content } = note;
  
  return (
    <form 
      name='crud-form'
      className="crud-form"
      onSubmit={onSubmit}
    >
      <h3 className="form-title">New note</h3>
        <textarea 
          name="note" 
          value={content}
          className="form-input" 
          onChange={onChange}
        />
        <button className="form-button">Отправить</button>
    </form>
  )
}

export default CrudForm;