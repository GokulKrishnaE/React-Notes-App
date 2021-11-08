import Card from './Card'
import classes from './Notes.module.css'
import Api from '../components/Api'                                       
import { Link } from 'react-router-dom'



function Notes(props){


    function deleteHandler(){
        
        Api.delete(`/notes/${props.id}.json`).then(response => {
            console.log(response)
            window.location.reload();
        })
    }
    
        

    return(
        <section>
        <li>
            <Card>
            <div className={classes.gridElements}>
                <p className={classes.h2}>{props.name}</p>
                <p className={classes.p}>{props.content}</p>
            </div>
            
            <div className={classes.buttons}>
                <button className={classes.btn1}><Link className={classes.link} to={`/editnotes/${props.id}`} >Edit</Link></button>
                <button className={classes.btn2} onClick={deleteHandler} >Delete </button>
            </div>
            </Card>
        </li>
        </section>
       
    );
}


export default Notes;