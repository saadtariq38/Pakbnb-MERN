import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AllRooms, reset } from "../features/rooms/roomSlice"
import { Card, Button } from 'react-bootstrap';
import Spinner from "../components/Spinner"


function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { rooms, isError, isLoading, isSuccess, message } = useSelector(
    state => state.room
  );

  

  //const memoizedRooms = useMemo(() => rooms, [rooms]);

  useEffect(() => {
    dispatch(AllRooms());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
       <div>
        {/* Map over the rooms object and render the data for each room */}
        {Object.keys(rooms).map(roomId => (
          <div key={roomId}>
            <h2>{rooms[roomId].name}</h2>
            <p>{rooms[roomId].description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Dashboard