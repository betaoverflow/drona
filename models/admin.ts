import mongoose, { Schema } from 'mongoose'

export interface AdminDocument extends mongoose.Document {
    _id: string
    name: string
    email: string
    password: string
    access_token: string
}

const AdminSchema: Schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        access_token: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

const Admin = mongoose.model<AdminDocument>('Admin', AdminSchema)

export default Admin
