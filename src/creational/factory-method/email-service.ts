import { NotificationService } from "./notification-service";
import { EmailNotification } from "./email-notification";

export class EmailService extends NotificationService {
  constructor(private readonly email: string) { super(); }
  createNotification(): EmailNotification {
    return new EmailNotification(this.email);
  }
}