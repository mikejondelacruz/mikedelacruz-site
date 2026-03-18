import Link from "next/link";

interface AEOPageProps {
  title: string;
  definition: string;
  whyItMatters: string;
  howItWorks: string[];
  example: string;
  keyTakeaway: string;
  relatedLinks: { href: string; label: string }[];
  faqQuestion: string;
  faqAnswer: string;
}

export default function AEOPage({
  title,
  definition,
  whyItMatters,
  howItWorks,
  example,
  keyTakeaway,
  relatedLinks,
  faqQuestion,
  faqAnswer,
}: AEOPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: {
      "@type": "Person",
      name: "Mike de la Cruz",
      url: "https://mikedelacruz.com/about",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: faqQuestion,
        acceptedAnswer: {
          "@type": "Answer",
          text: faqAnswer,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-2xl mx-auto px-6 md:px-12 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink leading-tight">
          {title}
        </h1>

        <p className="text-lg text-muted mt-6 leading-relaxed">{definition}</p>

        <div className="border-l-2 border-ink pl-6 mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Why it matters
          </h2>
          <p className="text-base leading-relaxed text-ink">{whyItMatters}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            How it works
          </h2>
          <ol className="space-y-4">
            {howItWorks.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-muted mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 bg-white border border-border rounded-lg p-6">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Example
          </h2>
          <p className="text-base leading-relaxed text-ink">{example}</p>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Key takeaway
          </h2>
          <p className="text-lg font-medium leading-relaxed text-ink">
            {keyTakeaway}
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
            Related
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/proof"
              className="text-sm border border-border rounded-full px-4 py-2 text-muted hover:text-ink hover:border-ink transition-colors"
            >
              See the proof →
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
