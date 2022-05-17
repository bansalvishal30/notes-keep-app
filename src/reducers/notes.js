const initialData = {
    notes:[],
    pinnotes:[],
    unpinnotes:[]
}

const notesReducers = (state=initialData,action) =>{
    switch(action.type){
        case "ADD_NOTE":
            return {
                ...state,
                notes:[...state.notes,action.payload]
            }
        case "DELETE_NOTE":
            const newNotes = state.notes.filter(item=>item.id !== action.id);
            return {
                ...state,
                notes:newNotes
            }
        case "PIN_NOTE":
            const updateNotes = state.notes.map(item=>{
                if(item.id === action.id ){
                    return {
                        ...item,
                        pin:!item.pin
                    }
                }
                return item;
            });
            return {
                ...state,
                notes:updateNotes
            }
        case "PIN_NOTE_ARR":
            const pins = state.notes.filter(n=>{ return n.pin});
            return {
                ...state,
                pinnotes:pins
            }
        case "UNPIN_NOTE_ARR":
            const unpins = state.notes.filter(n=>{ return !n.pin});
            return {
                ...state,
                unpinnotes:unpins
            }

        default : return state;
    }
}

export default notesReducers;