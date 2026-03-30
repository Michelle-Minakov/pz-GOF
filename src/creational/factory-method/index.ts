import { EmailService } from "./email-service";
import { SmsService } from "./sms-service";
import { PushService } from "./push-service";

// ── Demo ───────────────────────────────────────────────────────────────────
export function runFactoryMethod(): void {
  console.log("\n=== Factory Method ===");
  console.log("Problem: notify users via different channels without coupling to concrete classes.\n");

  const services = [
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