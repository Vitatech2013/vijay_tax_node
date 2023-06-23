import { Router } from 'express'

import {
  Addfile,
  Showfile,
  deletefile,
  Showusers,
  updatefile,
  adminlogin,
  addadmin,
  Showcomment,
  adminforgotpassword,
  updatePassword,Addexpenses

  
} from './controller'

const router = new Router()
router.post('/AddIncome',Addfile)
router.post('/expenses',Addexpenses)

router.post('/Addadmin',addadmin)
router.get('/showfile', Showfile)
router.get('/adminforgotpassword', adminforgotpassword)
router.get('/showuser', Showusers)
router.get('/adminlogin', adminlogin)
router.delete('/filedel/:id', deletefile)
router.put('/fileupdate/:id',updatefile)
router.put('/updatePassword/:id',updatePassword)
export default router
