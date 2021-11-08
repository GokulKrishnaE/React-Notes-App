import axios from "axios";

export default axios.create(
    {
        baseURL:'https://react-notes-app-4327d-default-rtdb.firebaseio.com/'
    }
)