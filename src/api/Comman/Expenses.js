import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    expenseType:{
        type: String
    },
    paymentType:{
        type: String
    },
    amount:{
        type: String
    },
    note:{
        type: String
    },
    status:{
        type: String
    },
    login_id:{
        type: String
    },
    
}, {
    timestamps: true
});

const model = mongoose.model('expenses', commentSchema)

export default model