import {
  MessageExperienceContentEnum,
  MessageExperienceFormattedContentEnum,
} from '../messages/inbox-message-content';

export type Message = {
  id: number;
  fromName: string;
  subject: string;
  date: string;
  content: MessageExperienceContentEnum;
  formattedContent: MessageExperienceFormattedContentEnum;
  read?: boolean;
  important?: boolean;
};
