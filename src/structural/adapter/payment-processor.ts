export interface PaymentProcessor {
  pay(amountUSD: number): string;
  refund(transactionId: string): string;
}