import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input
                type="text"
                placeholder="Some awesome title"
                className="notes__title-input"
                autoComplete="off"
                />
                <textarea
                placeholder="What happened today"
                className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img 
                    alt="imagen"
                    src="https://www.latercera.com/resizer/69z9lvgopfGsj5MIJUMvdixIz08=/900x600/filters:focal(306x146:316x136)/cloudfront-us-east-1.images.arcpublishing.com/copesa/IILNICLSEFGA5KCRMYRE5QE4MA.jpg"/>
                </div>
            </div>
        </div>
    )
}
