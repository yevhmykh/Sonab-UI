import { ITopicTag } from "./topicTag.interface";

export interface IPostShortInfo {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author: string;
  tags: ITopicTag[];
}
