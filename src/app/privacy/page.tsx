import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StrataEdge collects, uses, protects, and retains information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      introduction="This policy explains what information StrataEdge receives through this website and how it is used. We collect only what we need to respond, operate the site, and deliver agreed services."
    >
      <h2>Information we collect</h2>
      <p>
        When you submit the consultation form or email us, we may receive your name, email address, organization,
        area of interest, project stage, message, and any other information you choose to provide. Please do not send
        passwords, credentials, protected health information, or confidential production data through the form.
      </p>
      <p>
        Our hosting and security providers may automatically process limited technical information such as IP address,
        browser type, request time, referring page, and error or security logs. The site does not currently use
        advertising trackers or sell personal information.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>Respond to consultation requests and communicate about potential or active work.</li>
        <li>Prepare proposals, agreements, and service communications requested by you.</li>
        <li>Operate, secure, troubleshoot, and improve the website and contact process.</li>
        <li>Meet legal, accounting, fraud-prevention, and contractual obligations.</li>
      </ul>

      <h2>When information is shared</h2>
      <p>
        We may use service providers for website hosting, email delivery, security, and business administration. They
        receive only the information needed to perform those functions and are expected to handle it under their own
        contractual and privacy obligations. We may also disclose information when required by law, to protect rights
        or safety, or as part of a business transaction with appropriate safeguards.
      </p>

      <h2>Retention and security</h2>
      <p>
        Inquiry information is retained only as long as reasonably needed to respond, maintain business records,
        resolve disputes, and meet legal obligations. We use reasonable administrative and technical measures to
        protect information, but no internet transmission or storage system can be guaranteed completely secure.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to request access, correction, deletion, restriction, or a
        copy of personal information. You may also object to certain processing or withdraw consent where consent is
        the basis for use. Send a request to derekasa@strataedge.tech. We may need to verify your identity before acting.
      </p>

      <h2>Children and international processing</h2>
      <p>
        This business website is not directed to children under 13, and we do not knowingly collect their personal
        information. Information may be processed in the United States or other locations where our service providers
        operate, subject to applicable safeguards.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update this policy as the website or legal requirements change. The date at the top shows the latest
        revision. Privacy questions or requests can be sent to derekasa@strataedge.tech.
      </p>
    </LegalPage>
  );
}
