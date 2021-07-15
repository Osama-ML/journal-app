import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {

    const note = useSelector(state => state.notes.active)
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(startSaveNote(note))
    }

    return (
        <div className="notes__appbar">
            <span>20 de junio de 2021</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
