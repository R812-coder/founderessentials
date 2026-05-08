import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How founderessentials collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-prose mx-auto">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-8 tracking-tight">
          Privacy <span className="italic text-terracotta">policy</span>.
        </h1>

        <div className="prose-editorial">
          <p className="text-sm text-warmgray italic">
            Effective date: May 1, 2026. Last updated: May 2026.
          </p>

          <p>
            founderessentials.com ("we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using this site, you agree to the practices described here.
          </p>

          <h2>1. Information we collect</h2>

          <p>We collect information in three ways:</p>

          <h3>Information you give us directly</h3>
          <p>
            When you fill out our contact form, subscribe to our email list, or download a free resource, you provide your name, email address, and any message content. We use this information to respond to you, deliver the resource you requested, and (if you opt in) send you newsletter content.
          </p>

          <h3>Information collected automatically</h3>
          <p>We collect non-personally-identifying information that browsers and servers typically make available, including:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>IP address (anonymized)</li>
            <li>Pages visited and time spent</li>
            <li>Date and time of access</li>
          </ul>

          <h3>Cookies and analytics</h3>
          <p>
            We use Vercel Analytics, which is privacy-friendly and does not use cookies for tracking. We may also use Google Analytics or similar services in the future. These tools help us understand which content is most useful and improve the site.
          </p>

          <p>
            Affiliate links may set cookies in your browser to track conversions. These cookies are set by the affiliate program operator (e.g., Impact.com, PartnerStack, individual program networks), not by us, and are governed by their respective privacy policies.
          </p>

          <h2>2. How we use your information</h2>

          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and deliver requested resources</li>
            <li>Send newsletters and marketing emails (only if you opt in)</li>
            <li>Improve the content and functionality of the site</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Sharing your information</h2>

          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li><strong>Service providers:</strong> Email platforms (Beehiiv, ConvertKit), form processing (Web3Forms), and hosting (Vercel) that help us operate the site.</li>
            <li><strong>Legal authorities:</strong> When required by law, subpoena, or to protect our legal rights.</li>
            <li><strong>Successors:</strong> In the event of a merger, acquisition, or sale of assets.</li>
          </ul>

          <h2>4. Affiliate partners</h2>

          <p>
            When you click an affiliate link on this site and complete a transaction with the partner, the partner may share aggregate or transactional information with us for commission tracking. We do not receive your full personal or financial information from affiliate partners. See our <Link href="/disclosure" className="text-forest">Affiliate Disclosure</Link> for the full list of programs.
          </p>

          <h2>5. Your rights</h2>

          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate information</li>
            <li>Delete your information (subject to legal exceptions)</li>
            <li>Unsubscribe from marketing emails at any time (use the unsubscribe link in any email, or <Link href="/contact" className="text-forest">contact us</Link>)</li>
            <li>Opt out of certain data sharing if you live in California (CCPA), the EU (GDPR), or other jurisdictions with applicable laws</li>
          </ul>

          <p>
            To exercise any of these rights, <Link href="/contact" className="text-forest">contact us</Link>.
          </p>

          <h2>6. Data retention</h2>

          <p>
            We retain personal information for as long as necessary to provide the services you've requested or as required by law. Email list subscribers can unsubscribe at any time, after which we delete their information within 30 days unless retention is legally required.
          </p>

          <h2>7. Security</h2>

          <p>
            We use commercially reasonable measures to protect your information, including SSL/TLS encryption for data in transit. No method of transmission over the internet is 100% secure, however, and we cannot guarantee absolute security.
          </p>

          <h2>8. Children's privacy</h2>

          <p>
            This site is not directed at children under 13. We do not knowingly collect information from children under 13. If you believe we have collected such information, contact us and we will delete it.
          </p>

          <h2>9. Changes to this policy</h2>

          <p>
            We may update this policy from time to time. The "Last updated" date at the top reflects the most recent version. Material changes will be announced on the site or by email to subscribers.
          </p>

          <h2>10. Contact</h2>

          <p>
            Questions about this Privacy Policy? <Link href="/contact" className="text-forest">Contact us</Link>.
          </p>

          <hr className="my-10 border-warmgray-line" />

          <p className="text-sm text-warmgray italic">
            This privacy policy is provided as a baseline. For specific legal compliance with GDPR, CCPA, or other privacy regulations, we recommend regenerating a custom policy via TermsFeed (free) or Termly (paid) and consulting with a licensed attorney.
          </p>
        </div>
      </div>
    </div>
  );
}
