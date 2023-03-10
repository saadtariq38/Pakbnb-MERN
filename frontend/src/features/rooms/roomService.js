import axios from "axios"


const API_URL = 'http://localhost:5000/api/rooms/'


//get all the rooms from the database
const getAllRooms = async () => {

        const response = await axios.get(API_URL)
        if(!response) {
            throw new Error("Could not get reponse")
        }
       
        return response.data

  
}


const roomService = {
    getAllRooms,
}

export default roomService