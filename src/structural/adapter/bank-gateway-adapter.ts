import { PaymentProcessor } from "./payment-processor";
import { LegacyBankGateway } from "./legacy-bank-gateway";

export class BankGatewayAdapter implements PaymentProcessor {
  private readonly gateway = new LegacyBankGateway();

  pay(amountUSD: number): string {
    const cents = Math.round(amountUSD * 100);
    const txnId = this.gateway.processCharge(cents, "USD");
    console.log(`  [Adapter] converted $${amountUSD} → ${cents} cents`);
    return txnId;
  }

  refund(transactionId: string): string {
    const ok = this.gateway.reverseCharge(transactionId);
    return ok ? `Refund OK for ${transactionId}` : `Refund FAILED for ${transactionId}`;
  }
}