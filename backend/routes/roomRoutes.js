const express = require('express')
const router = express.Router()

const { getRooms, updateRoom, setRoom, deleteRoom  } = require('../controllers/roomController')

router.route('/').get(getRooms).post(setRoom)
router.route('/:id').put(updateRoom).delete(deleteRoom)





module.exports = router
