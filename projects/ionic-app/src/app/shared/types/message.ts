import {
  MessageExperienceContentEnum,
  MessageExperienceFormattedContentEnum,
} from '../content/email/message/messages/inbox-message-content';

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
