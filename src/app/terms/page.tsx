import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the StrataEdge website and the relationship between website information and paid consulting agreements.",
};

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms of Service"
      introduction="These terms govern use of the StrataEdge website. Paid consulting work is governed by the proposal, statement of work, or agreement accepted by both parties."
    >
      <h2>Website use</h2>
      <p>
        You may use this site for lawful business-information purposes. You may not attempt to disrupt the site,
        bypass security controls, introduce malicious code, scrape it in a way that harms availability, impersonate
        another person, or use the contact form for spam or unlawful content.
      </p>

      <h2>Informational content</h2>
      <p>
        Articles, service descriptions, and other website content are general information, not legal, financial,
        compliance, or situation-specific technical advice. Technology decisions depend on your environment and
        should be assessed before implementation. We may update or remove content without notice.
      </p>

      <h2>No client relationship through the website</h2>
      <p>
        Viewing the site, submitting a form, or participating in an introductory conversation does not create a
        client relationship. A consulting engagement begins only when the parties accept a written agreement that
        defines scope, responsibilities, fees, timing, confidentiality, intellectual property, and other applicable terms.
      </p>

      <h2>Fees, cancellation, and refunds</h2>
      <p>
        Fees and payment schedules are stated in the applicable written agreement. Our general refund approach is
        described in the <Link href="/refund-policy" className="font-bold text-ink underline underline-offset-4">Refund Policy</Link>.
        If a signed agreement conflicts with that general policy, the signed agreement controls to the extent permitted by law.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Unless otherwise stated, StrataEdge owns the website design, text, branding, and original materials on this
        site. You may link to public pages and quote short portions with attribution. You may not republish,
        distribute, or commercially exploit substantial site content without written permission. Ownership and
        license terms for client deliverables are addressed in the applicable engagement agreement.
      </p>

      <h2>Third-party services and links</h2>
      <p>
        This site may link to services operated by others. StrataEdge does not control their availability, security,
        content, or privacy practices. A link is provided for convenience and does not by itself constitute endorsement.
      </p>

      <h2>Disclaimers and limitation</h2>
      <p>
        The website is provided on an “as available” basis. To the maximum extent permitted by applicable law,
        StrataEdge disclaims warranties regarding uninterrupted availability, completeness, or fitness of general
        site information for a specific purpose. StrataEdge will not be liable for indirect, incidental, or
        consequential loss arising solely from use of, or inability to use, this website.
      </p>

      <h2>Changes and questions</h2>
      <p>
        We may revise these terms, with changes effective when posted and identified by the updated date. Questions
        can be sent to derekasa@strataedge.tech.
      </p>
    </LegalPage>
  );
}
