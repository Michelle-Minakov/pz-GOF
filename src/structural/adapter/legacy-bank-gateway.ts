export class LegacyBankGateway {
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