import { Notification } from "./notification";

export class PushNotification implements Notification {
  constructor(private readonly deviceId: string) {}
  send(message: string): void {
    console.log(`  🔔 [Push → ${this.deviceId}] ${message}`);
  }
}