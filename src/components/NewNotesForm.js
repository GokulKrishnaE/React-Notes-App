import { useState } from "react";
import './NewNotesForm.css'
import { Link } from "react-router-dom";

export default function NewNotesForm(props){
    
    const noteObj = {
        title:"",
        content:""

    }
    const [note, setnote] = useState(noteObj)
   
    function onSubmit(e){

        e.preventDefault();
        setnote(noteObj)
        props.onAdd(note)
    
    }

    
    return(
        <section>
        <div className="form-container">
        <form  className="form" onSubmit={onSubmit}>
            <input
             type="text"
             placeholder="Enter the Title"
            //  value = {noteObj.title}
             onChange={(e) => {
                noteObj.title = e.target.value;
             }}  />
            <textarea 
             id="content" 
             cols="30"
             rows="5" 
             placeholder="Enter the content"
             onChange={(e) => {
                noteObj.content = e.target.value;}}
            />

            <button className="button">Add Note</button>
             
        </form>
        </div>
        <div className="backtrigger">
        <Link to='/' className="backbtn">go back</Link>
        </div>
        </section>
    );

    

}

