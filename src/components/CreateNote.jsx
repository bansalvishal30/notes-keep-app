import React from "react";

function CreateNote(props) {
  const [isExpand, setIsexpand] = React.useState(false);
  const [note, setNote] = React.useState({ title: "", content: "", pin:false, color:"#ffffff" });

  function changeHandle(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNotes(event) {
    if((note.content).trim() !== ""){
      props.onAdd({...note,id:Date.now()});
      setNote({ title: "", content: "", pin:false, color:"#ffffff" });
    }
    else{
      alert("Note's Content can'not be empty");
      setNote({ title: note.title, content: note.content, pin:false, color:note.color });
    }
    event.preventDefault();
  }

  function doexpand() {
    setIsexpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            onChange={changeHandle}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={doexpand}
          onChange={changeHandle}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        {isExpand && <input name="color" onChange={changeHandle} className="color-pick" type="color" value={note.color}/>}
        {isExpand && <button onClick={addNotes}>close</button>}
      </form>
    </div>
  );
}

export default CreateNote;
