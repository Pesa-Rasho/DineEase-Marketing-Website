import { ArrowRight, CheckCircle2, Utensils, Calendar, Bell } from "lucide-react"
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

  const howItWorks = [
    {
      icon: Utensils,
      title: "Choose Your Restaurant",
      description: "Browse through our curated selection of top restaurants.",
    },
    {
      icon: Calendar,
      title: "Select Date & Time",
      description: "Pick your preferred dining date and time slot.",
    },
    {
      icon: Bell,
      title: "Get Confirmed",
      description: "Receive instant confirmation and reminder notifications.",
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
        "Special event bookings",
      ],
    },
    {
      name: "Enterprise",
      price: "$29.99/mo",
      description: "For businesses and groups",
      features: [
        "All Pro features",
        "Bulk reservations",
        "API access",
        "Dedicated account manager",
        "Custom integration",
        "Analytics dashboard",
        "White-label option",
      ],
    },
  ]

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate bg-gradient-to-b from-primary/10 pt-24">
          <Container className="py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Dining Made Easy with DineEase
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

        {/* How it Works Section */}
        <section id="how-it-works" className="bg-gradient-to-b from-muted/50 py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                How DineEase Works
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Three simple steps to your perfect dining experience
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center rounded-2xl bg-card p-8 shadow-lg ring-1 ring-muted transition-transform hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-center text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-4 text-4xl font-bold text-primary/20">
                    {index + 1}
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
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Simple, transparent pricing
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Choose the perfect plan for your dining needs
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {pricing.map((tier, index) => (
                <div
                  key={tier.name}
                  className={cn(
                    "flex flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-muted xl:p-10",
                    index === 1 && "relative bg-primary/5 ring-primary"
                  )}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white">
                      Most Popular
                    </div>
                  )}
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
                  <Button
                    className={cn(
                      "mt-8",
                      index === 1 && "bg-primary text-primary-foreground"
                    )}
                  >
                    Get started
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-t from-muted/50 py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
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
