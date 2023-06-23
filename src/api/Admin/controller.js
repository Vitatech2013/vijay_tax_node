import Viewusers from '../Comman/userModel';
import admin from './adminmodel';
import {sendEmail} from '../Comman/email';
import file from '../Comman/File';
import expenses from '../Comman/Expenses';



export const Addfile = (req, res) => {
  file.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const Addexpenses = (req, res) => {
  expenses.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const Showfile = (req, res) => {
  file.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}
export const deletefile = (req, res) => {
  file.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      file.find({}, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
        }
      })
    }
  })
}

export const updatefile = (req, res) =>{
  file.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedObj) => {
    if (err) {
        res.send(err);
    } else {
      file.find((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    }

})
}
export const Showusers = (req, res) => {
  Viewusers.find({}, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
}

export const addadmin = (req, res) => {
  admin.create(req.body, (err, result) => {
   
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const adminforgotpassword = (req, res) => {
  admin.find({"Emailid":req.query.Emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `UserName: ${results.UserName}<br>Password: ${results.Password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.Emailid, subject, body);
      })
      res.send(result);
    }
  })
}

export const adminlogin = (req, res) => {
  admin.find({ "UserName": req.query.UserName, "Password": req.query.Password }, (err, result) => {
    res.send(result);
  })
}
export const updatePassword= (req, res) =>{
  admin.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedObj) => {
    if (err) {
        res.send(err);
    } else {
      admin.find((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    }

})
}






