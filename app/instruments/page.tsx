import Image from "next/image";
import { getInstrumentPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

export default async function InstrumentsPage() {
  const page = await getInstrumentPage("instruments");

  if (!page) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          {page.introHeading}
        </p>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
          {page.title}
        </h1>
        {page.introSubtitle && (
          <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
            {page.introSubtitle}
          </p>
        )}
        {page.introDescription && (
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {page.introDescription}
          </p>
        )}
      </section>

      {page.sections?.length > 0 && (
        <section className="space-y-16 border-t border-gray-200 py-16">
          <div className="max-w-7xl mx-auto px-4">
            {page.sections.map((section: any, index: number) => (
              <div
                key={index}
                className={`grid gap-10 items-center lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  {section.subtitle && (
                    <p className="mt-4 text-lg font-medium text-gray-700">
                      {section.subtitle}
                    </p>
                  )}
                  {section.description && (
                    <p className="mt-4 text-gray-600 leading-8">
                      {section.description}
                    </p>
                  )}
                </div>

                {section.image && (
                  <div className="relative h-80 overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
                    <Image
                      src={urlFor(section.image).url()}
                      alt={section.imageAlt || section.title || "Instrument Section"}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {page.features?.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Why choose us</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Finowiz for Trades?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {page.features.map((feature: any, index: number) => (
              <div key={index} className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                {feature.image && (
                  <div className="relative h-60 overflow-hidden rounded-3xl bg-gray-100 mb-6">
                    <Image
                      src={urlFor(feature.image).url()}
                      alt={feature.imageAlt || feature.title || "Feature"}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                {feature.description && (
                  <p className="mt-4 text-gray-600 leading-7">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          {page.ctaTitle && <h2 className="text-4xl font-bold">{page.ctaTitle}</h2>}
          {page.ctaDescription && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {page.ctaDescription}
            </p>
          )}
          {page.ctaLink && (
            <a
              href={page.ctaLink}
              className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {page.ctaLabel || "Register Now"}
            </a>
          )}
          {page.disclaimer && (
            <p className="mt-10 text-sm leading-6 text-slate-400 max-w-3xl mx-auto">
              {page.disclaimer}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
