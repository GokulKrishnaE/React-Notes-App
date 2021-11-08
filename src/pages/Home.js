import NotesList from "../Utilities/NotesList";
import Api from '../components/Api'
import { useState, useEffect } from "react";

function Home(){

   const [notes, setnotes] = useState([])
   useEffect(() => {
    Api.get('/notes.json').then(response =>{
        const fetchedData = [];
        for(let key in response.data){
            fetchedData.push(
                {
                    id:key,
                    ...response.data[key]
                }
            )
        }
        setnotes(fetchedData)
        
    })

   }, [])
    
    return (
        <div className="container">
            <NotesList notes={notes}/>
        </div>
    );
}

export default Home;