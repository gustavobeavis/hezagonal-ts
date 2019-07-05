import { User } from "../../common/models/user";
import { Comment } from '../../comment/models/comment';

export interface Task {
	id: string;
	title: string;
	description: string;
	subtasks: Task[];
	comments: Comment[];
	stage: string,
	labels: string[];
	owners: User[];
	workers: User[];
	dueDate?: Date;
	createdAt: Date;
	updatedAt: Date;
}
