import mongoose from 'mongoose'

const ticketsColecctions = 'tickets'

const ticketSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    purchase_datetime: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    purchaser: {
        type: String,
        required: true
    },
})

export const productModel = mongoose.model(ticketsColecctions, ticketSchema)