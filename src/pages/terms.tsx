
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
            <h2 className="text-2xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using SmartDine, you accept and agree to be bound by
              the terms and provision of this agreement.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              2. Description of Service
            </h2>
            <p>
              SmartDine provides an online platform for restaurant reservations and
              related services.
            </p>
            {/* Add more terms of service content as needed */}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
