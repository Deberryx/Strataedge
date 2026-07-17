import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "StrataEdge accessibility statement and contact route for reporting barriers on this website.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      label="Website"
      title="Accessibility"
      introduction="StrataEdge wants this website to be useful to people with different abilities, devices, and ways of navigating. Accessibility is treated as an ongoing part of the site—not a one-time claim."
    >
      <h2>Our goal</h2>
      <p>
        We aim to align the website with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA where
        reasonably possible. Because content, browsers, and assistive technology change, we continue to review and
        improve the experience rather than claim that every interaction is permanently barrier-free.
      </p>

      <h2>Measures in place</h2>
      <ul>
        <li>Semantic headings, landmarks, labels, and link text.</li>
        <li>Keyboard-accessible navigation and visible focus treatment.</li>
        <li>A skip link to bypass repeated navigation.</li>
        <li>Color contrast, responsive text, and layouts that adapt to smaller screens.</li>
        <li>Form validation that does not rely on color alone.</li>
        <li>Reduced motion behavior when requested by the user’s device.</li>
      </ul>

      <h2>Feedback and alternative access</h2>
      <p>
        If you encounter a barrier, email derekasa@strataedge.tech. Include the page address, what you were trying to
        do, the problem you experienced, and—if you are comfortable sharing it—the browser or assistive technology
        involved. We aim to acknowledge accessibility feedback within three business days.
      </p>
      <p>
        If information or a service on this website is not accessible to you, we will make reasonable efforts to
        provide it in an alternative format or complete the interaction through another channel.
      </p>

      <h2>Ongoing review</h2>
      <p>
        Accessibility is considered when pages, content, and interactive features are changed. We welcome specific
        feedback that helps identify an issue our own review did not catch.
      </p>
    </LegalPage>
  );
}
