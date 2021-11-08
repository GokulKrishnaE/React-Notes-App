import Notes from "./Notes";
import classes from './NotesList.module.css'
import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";


function NotesList(props){

    const [query, setquery] = useState('')
    return(
        <section>
        <input type="text" placeholder="Search" className={classes.searchbox} onChange={(e) => { setquery(e.target.value)}} />
        <ul className={classes.grid} >
        {props.notes.filter(note => {
            return note.title.toLowerCase().match(query.toLowerCase()) || note.content.toLowerCase().match(query.toLowerCase())
        }).map((notes) => (
            <Notes key={notes.id} id={notes.id} name={notes.title} content={notes.content}/>
        ))}
        
        <div className="addicondiv">
        <Link to='/addnotes' className={classes.addnotesbutton}><img src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_blue.png" alt="" className={classes.addicon} /></Link>
        </div>
        </ul>
        
        </section>

    );
}


export default NotesList;