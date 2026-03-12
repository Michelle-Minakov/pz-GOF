/**
 * FACTORY METHOD — Creational Pattern
 *
 * Problem: Creating objects without specifying the exact class.
 * A superclass defines a method for creating objects, but subclasses
 * decide which class to instantiate.
 *
 * Anti-example: if/else chains scattered across the codebase:
 *   if (type === "email") new EmailNotification()
 *   else if (type === "sms") new SmsNotification()
 *   — adding a new type requires editing every place this logic lives.
 */

// ── Product interface ──────────────────────────────────────────────────────
interface Notification {
  send(message: string): void;
}

// ── Concrete Products ──────────────────────────────────────────────────────
class EmailNotification implements Notification {
  constructor(private readonly email: string) {}
  send(message: string): void {
    console.log(`  📧 [Email → ${this.email}] ${message}`);
  }
}

class SmsNotification implements Notification {
  constructor(private readonly phone: string) {}
  send(message: string): void {
    console.log(`  📱 [SMS → ${this.phone}] ${message}`);
  }
}

class PushNotification implements Notification {
  constructor(private readonly deviceId: string) {}
  send(message: string): void {
    console.log(`  🔔 [Push → ${this.deviceId}] ${message}`);
  }
}

// ── Creator (abstract) ─────────────────────────────────────────────────────
abstract class NotificationService {
  // Factory Method
  abstract createNotification(): Notification;

  // Template method that uses the factory method
  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

// ── Concrete Creators ──────────────────────────────────────────────────────
class EmailService extends NotificationService {
  constructor(private readonly email: string) { super(); }
  createNotification(): Notification {
    return new EmailNotification(this.email);
  }
}

class SmsService extends NotificationService {
  constructor(private readonly phone: string) { super(); }
  createNotification(): Notification {
    return new SmsNotification(this.phone);
  }
}

class PushService extends NotificationService {
  constructor(private readonly deviceId: string) { super(); }
  createNotification(): Notification {
    return new PushNotification(this.deviceId);
  }
}

// ── Demo ───────────────────────────────────────────────────────────────────
export function runFactoryMethod(): void {
  console.log("\n=== Factory Method ===");
  console.log("Problem: notify users via different channels without coupling to concrete classes.\n");

  const services: NotificationService[] = [
    new EmailService("alice@example.com"),
    new SmsService("+38099123456"),
    new PushService("device-xyz-42"),
  ];

  const message = "Your order has been shipped!";
  for (const service of services) {
    service.notify(message);
  }

  console.log("\n✅ Adding a new channel = new subclass only, no existing code changed.");
}

runFactoryMethod();