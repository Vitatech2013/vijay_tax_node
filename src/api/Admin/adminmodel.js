import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
	UserName:{
		type:String
	},
	Password:{
        type: String
		},
	Emailid:{
			type: String
			}
	}, {
		timestamps: true
	});

const model = mongoose.model('Adminlogin', adminSchema)

export default model