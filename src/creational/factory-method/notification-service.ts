import { Notification } from "./notification";

export abstract class NotificationService {
  // Factory Method
  abstract createNotification(): Notification;

  // Template method that uses the factory method
  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}