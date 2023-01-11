const express = require('express')
const router = express.Router()

const { getServices, updateService, setService, deleteService, getUserServices  } = require('../controllers/serviceController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getServices).post(protect, setService)
router.route('/:id').put(protect, updateService).delete(protect, deleteService)
router.route('/userService').get(protect, getUserServices)





module.exports = router