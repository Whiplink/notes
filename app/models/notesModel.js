import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  }
})

export default mongoose.models.notes || mongoose.model('notes', notesSchema)