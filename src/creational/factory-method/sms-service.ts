import { NotificationService } from "./notification-service";
import { SmsNotification } from "./sms-notification";

export class SmsService extends NotificationService {
  constructor(private readonly phone: string) { super(); }
  createNotification(): SmsNotification {
    return new SmsNotification(this.phone);
  }
}