import { NotificationService } from "./notification-service";
import { PushNotification } from "./push-notification";

export class PushService extends NotificationService {
  constructor(private readonly deviceId: string) { super(); }
  createNotification(): PushNotification {
    return new PushNotification(this.deviceId);
  }
}