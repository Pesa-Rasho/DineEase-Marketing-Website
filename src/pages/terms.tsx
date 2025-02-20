
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Terms() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-32">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Welcome to DineEase! By using our web application, you agree to these terms.</p>

            <h2 className="text-2xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing DineEase, you confirm that you are at least 18 years old and agree to comply with these Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              2. Use of the Service
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete registration details.</li>
              <li>You are responsible for all activity on your account.</li>
              <li>You may not misuse the service or engage in fraudulent activities.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              3. Bookings and Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All restaurant reservations and meal pre-orders are subject to availability.</li>
              <li>Payments are processed securely through third-party providers.</li>
              <li>Cancellations and refunds are subject to restaurant policies.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              4. User Conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any laws while using DineEase.</li>
              <li>Use automated tools (bots, scrapers) to access our system.</li>
              <li>Submit false information or impersonate others.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              5. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and software on DineEase are owned by us or licensed to us. You may not copy or distribute our content without permission.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              6. Disclaimers and Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We provide DineEase "as is" without warranties of any kind.</li>
              <li>We are not responsible for errors, downtime, or restaurant-related disputes.</li>
              <li>Our liability is limited to the amount you paid for our services.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              7. Termination
            </h2>
            <p>We may suspend or terminate your access if you violate these terms.</p>

            <h2 className="text-2xl font-semibold text-foreground">
              8. Changes to Terms
            </h2>
            <p>We reserve the right to update these terms at any time.</p>

            <h2 className="text-2xl font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p>For questions, contact us at contact@dineease.com</p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
