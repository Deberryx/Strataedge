import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "StrataEdge policy for consultation fees, deposits, milestone payments, retainers, cancellations, and approved refunds.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Refund Policy"
      introduction="StrataEdge aims to make payment and cancellation expectations clear before paid work begins. This policy is the general standard; an accepted proposal or agreement may set terms specific to an engagement."
    >
      <h2>Introductory consultations</h2>
      <p>
        A consultation described as free carries no fee and therefore has no refundable amount. If a paid workshop,
        assessment, or consultation is proposed, its price and cancellation terms will be disclosed before booking.
        Please give reasonable notice if you need to reschedule so reserved time can be released.
      </p>

      <h2>Deposits and work not yet started</h2>
      <p>
        Project deposits may reserve delivery capacity and authorize initial planning. If you cancel before work has
        started, amounts paid are generally refundable, less any clearly disclosed nonrecoverable third-party costs,
        completed discovery or preparation, and payment-processing costs where deduction is lawful. A proposal may
        identify a reasonable portion of a deposit as nonrefundable when capacity has been specifically reserved.
      </p>

      <h2>Work already in progress</h2>
      <p>
        After work begins, any refund is based on the unearned portion of fees paid. StrataEdge may deduct the value
        of work completed, approved time spent, deliverables supplied, committed capacity, and authorized expenses up
        to the cancellation date. We will provide a clear accounting when determining the refundable balance.
      </p>

      <h2>Completed milestones and accepted deliverables</h2>
      <p>
        Fees for completed and accepted milestones are generally nonrefundable. If a deliverable materially fails to
        match the written scope, notify us promptly with enough detail to evaluate the issue. StrataEdge will first
        have a reasonable opportunity to correct or reperform the affected work before a refund is considered.
      </p>

      <h2>Retainers and recurring advisory</h2>
      <p>
        You may cancel future retainer periods according to the notice terms in your agreement. Fees for a current
        period are refundable only to the extent the applicable agreement provides for unused or undelivered
        services. Work already performed and capacity already committed remain chargeable.
      </p>

      <h2>Third-party costs</h2>
      <p>
        Cloud usage, software licenses, domains, travel, contractors, hardware, platform fees, and other third-party
        purchases are not refundable by StrataEdge once committed or incurred. Any refund available from the vendor
        is subject to that vendor’s policy and will be passed through where appropriate.
      </p>

      <h2>How to request a refund</h2>
      <p>
        Email derekasa@strataedge.tech with your name, organization, invoice or proposal reference, amount, and reason
        for the request. We aim to acknowledge requests within three business days and communicate a decision or
        request for additional information within ten business days.
      </p>
      <p>
        Approved refunds are returned to the original payment method where practical. Bank and payment-provider
        processing may take an additional five to ten business days after approval.
      </p>

      <h2>Agreement priority and legal rights</h2>
      <p>
        If an accepted proposal, statement of work, or other signed agreement contains different cancellation or
        refund terms, that agreement controls. Nothing in this policy limits any non-waivable rights available under
        applicable law.
      </p>
    </LegalPage>
  );
}
