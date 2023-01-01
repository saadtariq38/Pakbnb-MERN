const express = require('express')
const router = express.Router()

const { getRooms, updateRoom, setRoom, deleteRoom, getUserRooms  } = require('../controllers/roomController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getRooms).post(protect, setRoom)
router.route('/:id').put(protect, updateRoom).delete(protect, deleteRoom)
router.route('/userRoom').get(protect, getUserRooms)





module.exports = router
