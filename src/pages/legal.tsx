
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Legal() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-32">
          <h1 className="text-4xl font-bold">Legal Information</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>
              This page contains important legal information about SmartDine, its
              services, and your rights and obligations as a user.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              Company Information
            </h2>
            <p>
              SmartDine is operated by SmartDine Inc., a company registered in
              [Your Location] with registration number [XXX].
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              Contact Information
            </h2>
            <p>Email: legal@smartdine.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: [Your Company Address]</p>
            {/* Add more legal content as needed */}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
