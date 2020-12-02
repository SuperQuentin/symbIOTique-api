import { IDevice } from '../interfaces/IDevice'
import mongoose from 'mongoose'

const Device = new mongoose.Schema(
  {
    name: { type: String, default: "SymbIOT_GenDev", required: 'false' },
    description: { type: String, required: 'false' },
    euid: { type: String, lowercase: true, required: 'true' },
    brand: { type: String, required: 'false' },
    model: { type: String, required: 'false' },
  },
  { timestamps: true }
)

export default mongoose.model<IDevice & mongoose.Document>('Device', Device)