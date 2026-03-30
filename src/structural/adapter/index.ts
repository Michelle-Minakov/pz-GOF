import { PaymentProcessor } from "./payment-processor";
import { BankGatewayAdapter } from "./bank-gateway-adapter";

// ── Client code — works only with PaymentProcessor ────────────────────────
function checkout(processor: PaymentProcessor, amount: number): void {
  const txn = processor.pay(amount);
  console.log(`  ✅ Transaction: ${txn}`);
  const refundResult = processor.refund(txn);
  console.log(`  ↩️  ${refundResult}`);
}

// ── Demo ───────────────────────────────────────────────────────────────────
export function runAdapter(): void {
  console.log("\n=== Adapter ===");
  console.log("Problem: our app expects PaymentProcessor but we have LegacyBankGateway.\n");

  const adapter = new BankGatewayAdapter();
  checkout(adapter, 49.99);

  console.log("\n✅ Client never touched legacy code. Legacy code never changed.");
}

runAdapter();