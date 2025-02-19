
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Index() {
  const features = [
    {
      name: "Smart Booking",
      description:
        "Advanced AI-powered booking system that learns from your preferences.",
    },
    {
      name: "Real-time Availability",
      description: "See available tables and time slots in real-time.",
    },
    {
      name: "Personalized Recommendations",
      description: "Get restaurant suggestions based on your dining history.",
    },
    {
      name: "Instant Confirmation",
      description: "Receive immediate confirmation for your bookings.",
    },
  ]

  const pricing = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for occasional diners",
      features: [
        "Basic restaurant search",
        "Simple booking system",
        "Email confirmations",
        "Basic user profile",
      ],
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      description: "For food enthusiasts",
      features: [
        "Advanced restaurant search",
        "Priority bookings",
        "SMS notifications",
        "Detailed user preferences",
        "24/7 customer support",
      ],
    },
  ]

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate pt-24">
          <Container className="py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Smart Dining for the Modern Age
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Book your favorite restaurants instantly with our AI-powered platform.
              No more waiting in lines or endless phone calls.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to dine smarter
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Our platform brings together the best features to make your dining
                experience seamless and enjoyable.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex gap-x-4 rounded-xl border bg-card p-6"
                >
                  <CheckCircle2 className="h-7 w-5 flex-none text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Choose the perfect plan for your dining needs
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {pricing.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-muted xl:p-10"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                    <p className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold">{tier.price}</span>
                    </p>
                    <ul role="list" className="mt-8 space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckCircle2 className="h-6 w-5 flex-none text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="mt-8">Get started</Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-2 block w-full rounded-md border bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
