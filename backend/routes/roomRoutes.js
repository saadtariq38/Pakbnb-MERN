const express = require('express')
const router = express.Router()

const { getRooms, updateRoom, setRoom, deleteRoom, getUserRooms  } = require('../controllers/roomController')

router.route('/').get(getRooms).post(setRoom)
router.route('/:id').put(updateRoom).delete(deleteRoom)
router.route('/:userId').get(getUserRooms)





module.exports = router
