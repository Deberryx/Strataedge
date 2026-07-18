// Single source of truth for package pricing, in whole US dollars.
// Converted from the original GHS 5,000 (~$434 at 11.54 GHS/USD, July 2026),
// rounded to a clean price point.
export const BUSINESS_WEBSITE_PRICE_USD = 450;

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
