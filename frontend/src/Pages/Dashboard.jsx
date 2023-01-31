import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllRooms, reset } from "../features/rooms/roomSlice"
import Spinner from "../components/Spinner"


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { rooms, isError, isLoading, isSuccess, message } = useSelector((state) => state.room)


//  rooms = JSON.parse(rooms2)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    
    console.log("running")
    dispatch(getAllRooms())
    
    
   
  }, [isError, message, dispatch, navigate])



  if(isLoading) {
    return <Spinner />
  }



  return (
    <div className="container text-center">
      Dashboard
    </div>
    
  )
}

export default Dashboard