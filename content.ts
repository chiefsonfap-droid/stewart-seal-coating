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

/** Travel policy: Sudbury-area, about an hour out by default. Farther by arrangement. */
export const SERVICE_AREA =
  "We work within about an hour’s drive of Sudbury by default. Farther is by arrangement — ask, and we will say honestly whether the trip makes sense.";

export const content = {
  title: "Steward Seal Coating — Sudbury, Ontario",
  description:
    "On-site parking-lot work from Sudbury, Ontario. Drone Condition Report — $129 CAD + HST, credited toward qualifying lot work if you proceed. Staging — not indexed.",
  wordmark: "Steward Seal Coating",
  wordmarkNote: "Sudbury, Ontario · Staging",
  legalName: LEGAL_NAME,
};
