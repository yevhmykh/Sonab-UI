import { ITopicTag } from "./topicTag.interface";

export interface IPostFullData {
  id: number;
  title: string;
  content: string;
  author: string;
  authorId: number;
  isEditAllowed: boolean;
  isSubscribed: boolean;
  tags: ITopicTag[];
}
