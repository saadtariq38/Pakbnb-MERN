import axios from "axios"


const API_URL = 'http://localhost:5000/api/rooms/'


//get all the rooms from the database
const getAllRooms = async () => {
    try{
        const response = await axios.get(API_URL)
       // console.log(response)
        return response.data

    }catch (error) {
        console.log("Could not get all rooms data")
    }
}


const roomService = {
    getAllRooms,
}

export default roomService