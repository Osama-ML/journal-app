import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const note = useSelector((state) => state.notes.active);
  const dispatch = useDispatch();

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file){
        dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>20 de junio de 2021</span>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        id="fileSelector"
        name="file"
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
