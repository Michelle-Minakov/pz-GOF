import { Notification } from "./notification";

export class EmailNotification implements Notification {
  constructor(private readonly email: string) {}
  send(message: string): void {
    console.log(`  📧 [Email → ${this.email}] ${message}`);
  }
}