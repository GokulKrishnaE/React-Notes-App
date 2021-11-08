import { useState } from "react";
import Api from '../components/Api'
import { useParams , useHistory } from "react-router";
import { useEffect } from "react";



import './EditForm.css'

export default function EditForm(){

    const history = useHistory()
    
    const { unique } = useParams()
    const [note, setnote] = useState({})


    useEffect(() => {

        Api.get(`/notes/${unique}.json`).then(response => {

            setnote(response.data)
    
        })
    }, [])

    

    
    
    const p = note.content
   
    function onSubmit(e){

        e.preventDefault();
        Api.put(`/notes/${unique}.json`,note).then(response => {
            console.log(response)
        }).then(() =>{
            history.replace('/') })
    
    }

    
    return(
        <div className="form-container">
        <form  className="form" onSubmit={onSubmit}>
            <input
             Value={note.title}
             onChange={(e) => {
                 note.title = e.target.value
             }}
             type="text"
             
             />
            <textarea 
             cols="30"
             rows="5" 
             placeholder="Updated Content"
             Value={note.content}
             onChange={(e) => {
                note.content = e.target.value
            }}/>


            <button className="button">Update</button>
             
        </form>
        </div>
    );

    

}