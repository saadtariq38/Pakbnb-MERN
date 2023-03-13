import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AllRooms, reset } from "../features/rooms/roomSlice"
import { Button } from 'react-bootstrap';
import Spinner from "../components/Spinner"
import Card from "../components/Card"



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

  // return (
  //   <div className="container">
  //     <div className="card-deck">
  //       {Object.keys(rooms).map((roomId) => (
  //         <div className="col-md-4" key={roomId}>
  //           <Card
  //             name={rooms[roomId].name}
  //             price={rooms[roomId].price}
  //            // image={rooms[roomId].image}
  //            // reviews={rooms[roomId].reviews}
  //             description={rooms[roomId].description}
  //             contact={rooms[roomId].contact}
  //            // user={rooms[roomId].user}
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  
  return (
    // <div className='container'>
    //   {Object.keys(rooms).map(roomId => (
    //     <div key={roomId} className='room-container'>
    //       <div className='card--first'>
    //         <Card
    //           name={rooms[roomId].name}
    //           price={rooms[roomId].price}
    //           image={`./card-img${roomId}.png`}
    //           description={rooms[roomId].description}
    //           contact={rooms[roomId].contact}
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="container-fluid">
      {Object.keys(rooms).map(roomId => (
        <div key={roomId} className="row my-4 custom-row">
          <div className="col-md-8 d-flex align-items-center justify-content-center">
            <img className="img-fluid" src={`./card-img${roomId}.png`} alt={rooms[roomId].name} style={{ height: "75%", maxHeight: "none" }} />
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Card
              name={rooms[roomId].name}
              price={rooms[roomId].price}
              description={rooms[roomId].description}
              contact={rooms[roomId].contact}
            />
          </div>
        </div>
      ))}
    </div>



  );
  }
  
  // <h2>{rooms[roomId].name}</h2>
  // <p>{rooms[roomId].description}</p>
  export default Dashboard