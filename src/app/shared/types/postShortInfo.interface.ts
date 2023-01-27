import { ITopicTag } from "./topicTag.interface";

export interface IPostShortInfo {
  id: number;
  title: string;
  content: string;
  author: string;
  tags: ITopicTag[];
}
