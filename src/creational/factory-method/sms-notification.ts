import { Notification } from "./notification";

export class SmsNotification implements Notification {
  constructor(private readonly phone: string) {}
  send(message: string): void {
    console.log(`  📱 [SMS → ${this.phone}] ${message}`);
  }
}