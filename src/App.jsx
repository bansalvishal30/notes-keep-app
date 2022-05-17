import React, { useEffect} from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";
import { useSelector , useDispatch } from "react-redux";
import {addNotes, deleteNotes, pinNotes, pinNotesarr, unpinNotesarr} from "./actions/index";

function App() {
  const notes = useSelector((state)=>state.notesReducers.notes);
  const pinnotes = useSelector((state)=>state.notesReducers.pinnotes);
  const unpinnotes = useSelector((state)=>state.notesReducers.unpinnotes);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(pinNotesarr());
    dispatch(unpinNotesarr());
  },[notes,dispatch])

  function addNewNote(newNote) {
    dispatch(addNotes(newNote));
  }

  function deleteNote(id) {
    dispatch(deleteNotes(id));
  }

  function pinNote(id) {
    dispatch(pinNotes(id));
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNewNote} />
      {pinnotes.length > 0 && <div style={{"width":"100%","float":"left"}}>
        <div style={{"color":"white"}}>
          Pinned Notes
        </div>
      {pinnotes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          pin={note.pin}
          color={note.color}
          onDelete={deleteNote}
          onPin={pinNote}
        />
      ))}
      </div>}
      {pinnotes.length > 0 && <hr/>}
      {unpinnotes.map((note, index) => (
        <Note
          key={index}
          id={note.id}
          title={note.title}
          content={note.content}
          pin={note.pin}
          color={note.color}
          onDelete={deleteNote}
          onPin={pinNote}
        />
      ))}
    </div>
  );
}

export default App;