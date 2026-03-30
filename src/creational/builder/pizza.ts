export class Pizza {
  public size!: string;
  public crust!: string;
  public sauce!: string;
  public toppings: string[] = [];
  public extraCheese: boolean = false;
  public deliveryNotes?: string;

  toString(): string {
    return [
      `  🍕 Pizza [${this.size}]`,
      `     Crust : ${this.crust}`,
      `     Sauce : ${this.sauce}`,
      `     Tops  : ${this.toppings.join(", ") || "none"}`,
      `     Extra cheese: ${this.extraCheese ? "yes" : "no"}`,
      this.deliveryNotes ? `     Notes : ${this.deliveryNotes}` : "",
    ].filter(Boolean).join("\n");
  }
}