export const addNotes = (data) =>{
    return {
        type:"ADD_NOTE",
        payload:data
    }
}

export const deleteNotes = (id) =>{
    return {
        type:"DELETE_NOTE",
        id:id
    }
}

export const pinNotes = (id) =>{
    return {
        type:"PIN_NOTE",
        id:id
    }
}

export const pinNotesarr = () =>{
    return {
        type:"PIN_NOTE_ARR",
    }
}

export const unpinNotesarr = () =>{
    return {
        type:"UNPIN_NOTE_ARR",
    }
}