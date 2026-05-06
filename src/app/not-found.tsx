import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
