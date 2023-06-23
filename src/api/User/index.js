import { Router } from 'express'

import {
  create,
  viewProfile,
  userLogins,
  Showregs,
  updateProfile,
  forgotpassword,
} from './controller'


const router = new Router()

router.post('/', create)
router.get('/userlogin', userLogins)
router.get('/forgotpassword', forgotpassword)
router.get('/showUsers', Showregs)
router.get('/viewprofile', viewProfile)
router.put('/updateprofile/:id', updateProfile)


export default router
