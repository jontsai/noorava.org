"use client";

import { useMemo, useState } from "react";

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

  const donationMailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `${frequency} ${currency.format(selectedAmount || 250)} NoorAva donation via ${paymentMethod}`,
    );
    const body = encodeURIComponent(
      [
        "Hello NoorAva,",
        "",
        `I would like to make a ${frequency.toLowerCase()} donation of ${currency.format(selectedAmount || 250)} via ${paymentMethod}.`,
        "",
        "Please send me the next step for completing this donation securely.",
      ].join("\n"),
    );

    return `mailto:info@noorava.org?subject=${subject}&body=${body}`;
  }, [frequency, paymentMethod, selectedAmount]);

  return (
    <div className="donation-form">
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

      {canSubmit ? (
        <a className="donate-button" href={donationMailtoHref}>
          ♥ Request Donation Link for {currency.format(selectedAmount)} ↗
        </a>
      ) : (
        <span className="donate-button is-disabled" aria-disabled="true">
          Enter an amount to continue
        </span>
      )}
      <p className="secure-note">
        Online checkout is being connected. For now, email{" "}
        <a href="mailto:info@noorava.org">info@noorava.org</a> with your selected
        amount and payment preference so NoorAva can send the secure next step.
      </p>
    </div>
  );
}
