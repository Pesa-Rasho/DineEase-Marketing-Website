
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Privacy() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-32">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              DineEase, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our web application.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>We collect the following data when you use DineEase:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Information: Name, email address, phone number, and payment details.</li>
              <li>Usage Data: IP address, device information, and browsing behavior.</li>
              <li>Restaurant Preferences: Order history, favorite restaurants, and meal choices.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Facilitate restaurant bookings and meal pre-orders.</li>
              <li>Improve and personalize your experience.</li>
              <li>Process payments securely.</li>
              <li>Provide customer support.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              3. Data Sharing and Security
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not sell your data.</li>
              <li>We share data with restaurants to process bookings.</li>
              <li>Payment data is processed securely by third-party payment processors.</li>
              <li>We implement security measures to protect your data.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              4. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your data.</li>
              <li>Withdraw consent for marketing communications.</li>
              <li>Request data portability.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              5. Cookies and Tracking
            </h2>
            <p>
              We use cookies to enhance your experience. See our{" "}
              <a href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </a>{" "}
              for details.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this policy. Significant changes will be notified via email or app notifications.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              7. Contact Us
            </h2>
            <p>For any privacy concerns, contact us at contact@dineease.com</p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
