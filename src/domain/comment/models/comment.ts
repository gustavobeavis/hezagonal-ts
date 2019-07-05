import { User } from "../../common/models/user";

export interface Comment {
  user: User;
	message: String;
	createdAt: Date;
	updatedAt: Date;
}
