
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
            <h2 className="text-2xl font-semibold text-foreground">
              What are Cookies?
            </h2>
            <p>
              Cookies are small text files that are placed on your computer by
              websites that you visit. They are widely used to make websites work
              more efficiently and provide information to the owners of the site.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">
              How We Use Cookies
            </h2>
            <p>
              We use cookies to improve your experience on our website and to
              understand how you use our website.
            </p>
            {/* Add more cookie policy content as needed */}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
