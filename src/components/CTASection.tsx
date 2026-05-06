import Button from "./Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how we can help you achieve your goals with custom software solutions.",
  primaryButtonText = "Get a Free Quote",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonHref = "/portfolio",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryButtonHref} variant="primary" size="lg">
            {primaryButtonText}
          </Button>
          <Button href={secondaryButtonHref} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
