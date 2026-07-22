"use client";

import { FormEvent, useMemo, useState } from "react";

const presetAmounts = [100, 250, 500] as const;
type PaymentMethod = "PayPal" | "Stripe";
type Frequency = "One-Time" | "Monthly";
type AmountMode = (typeof presetAmounts)[number] | "custom";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function DonationForm() {
  const [frequency, setFrequency] = useState<Frequency>("One-Time");
  const [amountMode, setAmountMode] = useState<AmountMode>(250);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("PayPal");

  const customValue = Number.parseFloat(customAmount);
  const hasValidCustomAmount = Number.isFinite(customValue) && customValue >= 1;
  const customAmountError =
    amountMode === "custom" && customAmount.length > 0 && !hasValidCustomAmount;

  const selectedAmount = useMemo(() => {
    if (amountMode === "custom") {
      return hasValidCustomAmount ? customValue : 0;
    }

    return amountMode;
  }, [amountMode, customValue, hasValidCustomAmount]);

  const canSubmit = selectedAmount >= 1;

  function handleDonationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    const subject = encodeURIComponent(
      `${frequency} ${currency.format(selectedAmount)} NoorAva donation via ${paymentMethod}`,
    );
    const body = encodeURIComponent(
      [
        "Hello NoorAva,",
        "",
        `I would like to make a ${frequency.toLowerCase()} donation of ${currency.format(selectedAmount)} via ${paymentMethod}.`,
        "",
        "Please send me the next step for completing this donation securely.",
      ].join("\n"),
    );

    window.location.href = `mailto:info@noorava.org?subject=${subject}&body=${body}`;
  }

  return (
    <form className="donation-form" onSubmit={handleDonationSubmit}>
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
              className={amountMode === preset ? "is-selected" : ""}
            >
              <input
                type="radio"
                name="amount"
                checked={amountMode === preset}
                onChange={() => setAmountMode(preset)}
              />
              <span>${preset}</span>
            </label>
          ))}
          <label className={amountMode === "custom" ? "is-selected" : ""}>
            <input
              type="radio"
              name="amount"
              checked={amountMode === "custom"}
              onChange={() => setAmountMode("custom")}
            />
            <span>Custom</span>
          </label>
        </div>
        <label className="custom-amount" htmlFor="custom-amount">
          <span aria-hidden="true">$</span>
          <span className="sr-only">Custom donation amount</span>
          <input
            id="custom-amount"
            name="customAmount"
            type="number"
            inputMode="decimal"
            min="1"
            placeholder="Enter custom amount"
            aria-describedby="custom-amount-help custom-amount-error"
            aria-invalid={customAmountError || undefined}
            value={customAmount}
            onFocus={() => setAmountMode("custom")}
            onChange={(event) => {
              setAmountMode("custom");
              setCustomAmount(
                event.currentTarget.value.replace(/[^0-9.]/g, ""),
              );
            }}
          />
        </label>
        <p id="custom-amount-help" className="sr-only">
          Enter a custom donation amount in US dollars.
        </p>
        <p
          id="custom-amount-error"
          className={customAmountError ? "form-error" : "sr-only"}
          aria-live="polite"
        >
          Please enter a donation amount of at least $1.
        </p>
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
        <strong>{canSubmit ? currency.format(selectedAmount) : "—"}</strong>
      </div>

      <button className="donate-button" type="submit" disabled={!canSubmit}>
        ♥ Donate {canSubmit ? currency.format(selectedAmount) : "—"} Now ↗
      </button>
      <p className="secure-note">
        Online checkout is being connected. For now, this button opens an email
        with your selected amount and payment preference so NoorAva can send the
        secure next step.
      </p>
    </form>
  );
}
