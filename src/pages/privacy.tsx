
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
            <h2 className="text-2xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us, including when
              you create an account, make a reservation, or contact us for support.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and improve
              our services, to process your reservations, and to communicate with
              you.
            </p>
            {/* Add more privacy policy content as needed */}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
