import { Document, model, models, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  address: string;
  state: string;
  why: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  why: {
    type: String,
    required: true,
  },
});

const User = models.User || model("User", userSchema);

export default User;