import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import roomService from './roomService'

const initialState = {
    rooms: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const getAllRooms = createAsyncThunk("room/getRooms", async (_, thunkAPI) => {
    try {
        const rooms =  await roomService.getAllRooms()
      //  const rooms = Array.from(resolvedValue)
        return rooms
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})





export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        reset: (state) => {
           // state = initialState
        }
    },
    //anything in extra reducers will be async thunk funcs
    extraReducers: (builder) => {
        builder
        .addCase(getAllRooms.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllRooms.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
           // state.rooms = action.payload
           console.log(action.payload)
            state.rooms.push(action.payload)
        })
        .addCase(getAllRooms.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        
    }


})

export const { reset } = roomSlice.actions
export default roomSlice.reducer