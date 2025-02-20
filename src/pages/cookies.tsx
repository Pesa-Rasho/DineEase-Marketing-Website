
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Cookies() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-32">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>
              DineEase uses cookies to improve your experience. This policy explains how we use cookies and how you can manage them.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              1. What Are Cookies?
            </h2>
            <p>Cookies are small text files stored on your device when you visit our website.</p>

            <h2 className="text-2xl font-semibold text-foreground">
              2. How We Use Cookies
            </h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enable core functionalities (e.g., login, bookings).</li>
              <li>Remember your preferences.</li>
              <li>Improve performance and analytics.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              3. Types of Cookies We Use
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential Cookies: Required for the website to function.</li>
              <li>Analytics Cookies: Help us analyze usage and improve our services.</li>
              <li>Marketing Cookies: Used to show relevant ads.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">
              4. Managing Cookies
            </h2>
            <p>
              You can control cookies through your browser settings. Disabling cookies may impact functionality.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">
              5. Updates to This Policy
            </h2>
            <p>We may update this policy from time to time.</p>

            <h2 className="text-2xl font-semibold text-foreground">
              6. Contact Us
            </h2>
            <p>For questions, contact us at contact@dineease.com</p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
