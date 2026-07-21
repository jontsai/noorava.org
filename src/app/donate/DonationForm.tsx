"use client";

import { useMemo, useState } from "react";

const presetAmounts = [100, 250, 500] as const;
type PaymentMethod = "PayPal" | "Stripe";
type Frequency = "One-Time" | "Monthly";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function DonationForm() {
  const [frequency, setFrequency] = useState<Frequency>("One-Time");
  const [amount, setAmount] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("PayPal");

  const selectedAmount = useMemo(() => {
    const parsed = Number.parseFloat(customAmount);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : amount;
  }, [amount, customAmount]);

  return (
    <form className="donation-form">
      <fieldset>
        <legend>Donation Frequency</legend>
        <div
          className="segmented"
          role="radiogroup"
          aria-label="Donation frequency"
        >
          {(["One-Time", "Monthly"] as const).map((option) => (
            <label
              key={option}
              className={frequency === option ? "is-selected" : ""}
            >
              <input
                type="radio"
                name="frequency"
                checked={frequency === option}
                onChange={() => setFrequency(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Donation Amount</legend>
        <div
          className="amount-grid"
          role="radiogroup"
          aria-label="Donation amount"
        >
          {presetAmounts.map((preset) => (
            <label
              key={preset}
              className={
                !customAmount && amount === preset ? "is-selected" : ""
              }
            >
              <input
                type="radio"
                name="amount"
                checked={!customAmount && amount === preset}
                onChange={() => {
                  setCustomAmount("");
                  setAmount(preset);
                }}
              />
              <span>${preset}</span>
            </label>
          ))}
          <label className={customAmount ? "is-selected" : ""}>
            <input
              type="radio"
              name="amount"
              checked={Boolean(customAmount)}
              onChange={() => setCustomAmount(String(amount))}
            />
            <span>Custom</span>
          </label>
        </div>
        <label className="custom-amount">
          <span>$</span>
          <input
            inputMode="decimal"
            min="1"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(event) =>
              setCustomAmount(event.currentTarget.value.replace(/[^0-9.]/g, ""))
            }
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Payment Method</legend>
        <div
          className="payment-grid"
          role="radiogroup"
          aria-label="Payment method"
        >
          {(["PayPal", "Stripe"] as const).map((method) => (
            <label
              key={method}
              className={paymentMethod === method ? "is-selected" : ""}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              <strong className={method.toLowerCase()}>{method}</strong>
              <span>
                {method === "PayPal"
                  ? "PayPal / Credit Card"
                  : "Credit / Debit Card"}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="summary-row">
        <div>
          <strong>{frequency} Donation</strong>
          <span>via {paymentMethod}</span>
        </div>
        <strong>{currency.format(selectedAmount)}</strong>
      </div>

      <button className="donate-button" type="button">
        ♥ Donate {currency.format(selectedAmount)} Now ↗
      </button>
      <p className="secure-note">
        You will be redirected to {paymentMethod} to complete your donation
        securely. NoorAva is a registered 501(c)(3) nonprofit. Your donation may
        be tax-deductible.
      </p>
    </form>
  );
}
