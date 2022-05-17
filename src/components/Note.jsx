import React from "react";

function Note(props) {
  function clickHandle(event) {
    props.onDelete(props.id);
  }

  function handleClickPin(event) {
    props.onPin(props.id);
  }

  return (
    <div className="note" style={{"background":props.color}}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={clickHandle}>
        Del
      </button>
      <button onClick={handleClickPin}>
        {props.pin ? "UnPin" : "Pin"}
      </button>
    </div>
  );
}

export default Note;
