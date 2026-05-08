import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with flbizstart. Questions, corrections, partnerships, or anything related to starting a Florida LLC.',
};

export default function ContactPage() {
  return (
    <div className="max-w-wide mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-prose mx-auto">
        <div className="eyebrow mb-4">Contact</div>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-8 tracking-tight">
          Send a <span className="italic text-terracotta">note</span>.
        </h1>

        <p className="text-xl text-ink-soft leading-relaxed mb-12 max-w-2xl">
          I read every email and usually respond within 1–2 business days. Faster on questions about Florida-specific filings; slower on long discussions.
        </p>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <ContactForm />
          </div>

          <aside className="col-span-12 md:col-span-5">
            <div className="bg-paper border border-warmgray-line/60 p-6 space-y-5">
              <div>
                <h3 className="eyebrow mb-2">Content questions</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Anything in the guides — corrections, additions, things you wish I'd cover. The form on the left.
                </p>
              </div>

              <div className="hairline" />

              <div>
                <h3 className="eyebrow mb-2">Sunwrit data services</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  For the B2B side — Florida new-LLC data feeds, custom enrichment, vertical-specific lists — mention "Sunwrit" in the subject line.
                </p>
              </div>

              <div className="hairline" />

              <div>
                <h3 className="eyebrow mb-2">Partnerships</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Run a service that fits the site? Mention "Partnership" in the subject. I'm picky about additions but always reading.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
