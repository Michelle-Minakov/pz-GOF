/**
 * ADAPTER — Structural Pattern
 *
 * Problem: Allow incompatible interfaces to work together.
 * Wraps an existing class with a new interface without modifying
 * the original source code.
 *
 * Anti-example: duplicating/rewriting the legacy library to match
 * the expected interface — brittle and wasteful.
 */

// ── Target interface (what our app expects) ────────────────────────────────
interface PaymentProcessor {
  pay(amountUSD: number): string;
  refund(transactionId: string): string;
}

// ── Adaptee — legacy / third-party library we cannot change ───────────────
class LegacyBankGateway {
  /** Processes payment in CENTS */
  processCharge(cents: number, currency: string): string {
    return `LEGACY_TXN_${Date.now()} | charged ${cents} ${currency}`;
  }
  /** Reverses a charge by internal reference */
  reverseCharge(ref: string): boolean {
    console.log(`  [LegacyGateway] reversing charge ref=${ref}`);
    return true;
  }
}

// ── Adapter ────────────────────────────────────────────────────────────────
class BankGatewayAdapter implements PaymentProcessor {
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