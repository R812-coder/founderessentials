import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for founderessentials.com.',
};

export default function TermsPage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-prose mx-auto">
        <div className="eyebrow mb-4">Legal</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-8 tracking-tight">
          Terms of <span className="italic text-terracotta">service</span>.
        </h1>

        <div className="prose-editorial">
          <p className="text-sm text-warmgray italic">
            Effective date: May 1, 2026. Last updated: May 2026.
          </p>

          <p>
            By accessing or using founderessentials.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you don't agree, please don't use the Site.
          </p>

          <h2>1. Educational content only — not advice</h2>

          <p>
            <strong>Nothing on this Site is legal, tax, accounting, financial, or other professional advice.</strong> The content is general educational information about Florida LLC formation and operation. Your situation is unique. Consult a licensed Florida attorney, CPA, or financial advisor before making decisions based on anything you read here.
          </p>

          <p>
            We make reasonable efforts to keep information accurate and up to date, but laws, fees, and program details change. We disclaim all liability for outcomes resulting from reliance on this content.
          </p>

          <h2>2. Affiliate links</h2>

          <p>
            Many links on this Site are affiliate links. We may earn a commission when you sign up for a service through one of these links, at no additional cost to you. See our <Link href="/disclosure" className="text-forest">Affiliate Disclosure</Link> for full details.
          </p>

          <h2>3. Content ownership</h2>

          <p>
            All content on this Site — articles, graphics, layouts, and code — is the property of Founder Essentials, a publication of Sunwrit, and is protected by US copyright law. You may share short excerpts (under 100 words) with attribution and a link back to the original article. You may not republish, reproduce, or distribute substantial portions without written permission.
          </p>

          <h2>4. User submissions</h2>

          <p>
            When you submit content through the contact form, email, or other channels, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display that content for the purpose of operating the Site and responding to your inquiry.
          </p>

          <h2>5. Disclaimer of warranties</h2>

          <p>
            The Site is provided "as is" without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2>6. Limitation of liability</h2>

          <p>
            To the fullest extent permitted by law, Founder Essentials, Sunwrit, and their respective owners, employees, and contractors are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site, the content, or any third-party services or products linked from the Site.
          </p>

          <h2>7. Third-party services</h2>

          <p>
            Many services discussed on this Site — banking, registered agent, payroll, bookkeeping, and others — are operated by independent third parties. We are not responsible for their products, terms, fees, or practices. Read their terms and conditions before signing up.
          </p>

          <h2>8. Governing law</h2>

          <p>
            These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles. Any disputes arising from these Terms or the Site will be resolved in state or federal courts located in Florida.
          </p>

          <h2>9. Changes to these Terms</h2>

          <p>
            We may update these Terms periodically. Continued use of the Site after changes are posted constitutes acceptance of the new Terms.
          </p>

          <h2>10. Contact</h2>

          <p>
            Questions? <Link href="/contact" className="text-forest">Contact us</Link>.
          </p>

          <hr className="my-10 border-warmgray-line" />

          <p className="text-sm text-warmgray italic">
            These terms are provided as a baseline. For specific legal compliance, we recommend regenerating custom terms via TermsFeed (free) or Termly (paid) and consulting with a licensed attorney.
          </p>
        </div>
      </div>
    </div>
  );
}
