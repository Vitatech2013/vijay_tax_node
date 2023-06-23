import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    incomeType:{
        type: String
    },
    panNo:{
        type: String
    },
    userName:{
        type: String
    },
    mobile:{
        type: String
    },
    year:{
        type: String
    },
    totalAmount:{
        type: String
    },
    paidAmount:{
        type: String
    },
    dueAmount:{
        type: String
    },
    paymentType:{
        type: String
    },

    note:{
        type: String
    },
    login_id:{
        type: String
    },
    status:{
        type: String
    },
    
}, {
    timestamps: true
});

const model = mongoose.model('Income', commentSchema)

export default model