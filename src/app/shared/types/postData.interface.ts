import { ITopicTag } from "./topicTag.interface";

export interface IPostData {
    title: string;
    content: string;
    tags: ITopicTag[] | null;
}
