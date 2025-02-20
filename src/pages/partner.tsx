
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function Partner() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container className="py-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold">Partner with DineEase</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below and we'll get in touch with you to discuss how we can help grow your restaurant business.
            </p>
            <form className="mt-12 space-y-6">
              <div>
                <label htmlFor="restaurantName" className="block text-sm font-medium">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="plan" className="block text-sm font-medium">
                  Selected Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                >
                  <option value="">Select a plan</option>
                  <option value="starter">Starter ($99/mo)</option>
                  <option value="growth">Growth ($199/mo)</option>
                  <option value="premium">Premium ($399/mo)</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
