export const LEGAL_NAME = "2608341 Ontario Inc. operating as Steward Seal Coating";

export const OFFER = {
  name: "Drone Condition Report",
  price: "$129 CAD + HST",
  priceShort: "$129 CAD + HST",
  valueAnchor: "$350",
  creditWindow: "90 days",
} as const;

/** Existing Steward GoHighLevel form IDs — do not create a new GHL account. */
export const GHL = {
  paidReportFormId: "dcAN8IxSHr8526AuKPxF",
  quoteFormId: "MkiuspbniZT3rw2tNg1E",
  /** Older Steward embed from main: “Seal Coating Website Drone Inspection Form”. */
  legacyInspectionFormId: "cWkRdLH8OOIwvBufX5yt",
} as const;

export const content = {
  title: "Steward Seal Coating — Sudbury and Northern Ontario",
  description:
    "On-site parking-lot work from Sudbury and Northern Ontario. Paid Drone Condition Report — $129 CAD + HST. The $129 is credited if you proceed with qualifying lot work. Staging — not indexed.",
  wordmark: "Steward Seal Coating",
  wordmarkNote: "Sudbury · Northern Ontario · staging",
  mark: "S",
  navCta: "Get the $129 CAD + HST report",
  legalName: LEGAL_NAME,
};
