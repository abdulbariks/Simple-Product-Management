import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // only needed for credentials login
    image: { type: String }, // optional profile picture (Google login)
  },
  { timestamps: true }
);

// Prevent model overwrite on hot reload
export default mongoose.models.User || mongoose.model("User", UserSchema);
