import NewNotesForm from '../components/NewNotesForm';
import Api from '../components/Api'
import { useHistory } from "react-router";

function AddNotes(){
    const history = useHistory()
    function addHandler(note){
        Api.post('/notes.json',note).then(response => {
            console.log(response)
        }).then(() => {
            history.replace('/')
        })
        
    }
    return (
        <section>
        <div>
            <NewNotesForm onAdd={addHandler}/>
        </div>
    </section>
    );
}

export default AddNotes;