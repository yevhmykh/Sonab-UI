import { NoticationType } from './notificationType.enum';

export interface INotificationMessage {
  type: NoticationType;
  message: string;
}
