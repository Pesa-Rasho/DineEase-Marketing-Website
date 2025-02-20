import { ArrowRight, CheckCircle2, Utensils, Calendar, Bell, Sandwich, Bell as NotificationBell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

export default function Index() {
  const navigate = useNavigate()

  const features = [
    {
      name: "Smart Booking",
      description:
        "Advanced AI-powered booking system that learns from your preferences.",
    },
    {
      name: "Pre-order Meals",
      description: "Order your meals in advance and skip the wait time.",
    },
    {
      name: "Meal Customization",
      description: "Customize your dishes with detailed preferences and dietary requirements.",
    },
    {
      name: "Real-time Tracking",
      description: "Get instant updates on your order status from preparation to serving.",
    },
    {
      name: "Personalized Recommendations",
      description: "Get restaurant and dish suggestions based on your dining history.",
    },
    {
      name: "Instant Confirmation",
      description: "Receive immediate confirmation for your bookings and orders.",
    },
  ]

  const howItWorks = [
    {
      icon: Utensils,
      title: "Choose Your Restaurant",
      description: "Browse through our curated selection of top restaurants and their menus.",
    },
    {
      icon: Sandwich,
      title: "Pre-order & Customize",
      description: "Select your meals and customize them to your preferences.",
    },
    {
      icon: Calendar,
      title: "Select Date & Time",
      description: "Pick your preferred dining date and time slot.",
    },
    {
      icon: NotificationBell,
      title: "Stay Updated",
      description: "Receive real-time notifications about your order status.",
    },
  ]

  const pricing = [
    {
      name: "Starter",
      price: "$99/mo",
      description: "Perfect for small restaurants",
      features: [
        "List your restaurant",
        "Basic table management",
        "Menu display",
        "Email notifications",
        "Basic analytics",
        "Standard support",
        "Up to 50 bookings/month",
      ],
    },
    {
      name: "Growth",
      price: "$199/mo",
      description: "For growing restaurants",
      features: [
        "Everything in Starter",
        "Advanced table management",
        "Custom menu with photos",
        "SMS notifications",
        "Pre-order management",
        "Customer feedback system",
        "Priority support",
        "Up to 200 bookings/month",
        "Advanced analytics",
      ],
    },
    {
      name: "Premium",
      price: "$399/mo",
      description: "For established restaurants",
      features: [
        "Everything in Growth",
        "Multiple location support",
        "API access",
        "Dedicated account manager",
        "Custom integration options",
        "White-label solution",
        "24/7 VIP support",
        "Unlimited bookings",
        "Real-time analytics dashboard",
        "Custom reporting",
      ],
    },
  ]

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent" />
          <Container className="relative py-40 sm:py-48">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Dining Made Easy with{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  DineEase
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
                Elevate your restaurant's presence with our AI-powered platform. Seamless bookings, pre-orders, and real-time updates for an exceptional dining experience.
              </p>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <Button size="lg" className="gap-2 text-base">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-base">
                  Learn more
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Redefining Restaurant Management
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Comprehensive tools designed for modern restaurants
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-background to-background/80 p-8 backdrop-blur-sm transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                  <div className="relative">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    <h3 className="mt-6 text-xl font-semibold">{feature.name}</h3>
                    <p className="mt-4 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Simple Integration Process
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Get started in minutes, not days
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center rounded-2xl bg-card/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-4 text-center text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-6 text-5xl font-light text-primary/10">
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
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Restaurant Partnership Plans
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Choose the perfect plan to grow your restaurant business
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {pricing.map((tier, index) => (
                <div
                  key={tier.name}
                  onClick={() => navigate(`/partner?plan=${tier.name.toLowerCase()}`)}
                  className={cn(
                    "relative overflow-hidden rounded-3xl border bg-card p-8 transition-all hover:shadow-lg cursor-pointer xl:p-10",
                    index === 1 && "bg-primary/5 ring-2 ring-primary"
                  )}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-1 text-sm font-medium text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <p className="mt-4 text-muted-foreground">
                      {tier.description}
                    </p>
                    <p className="mt-8 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        /month
                      </span>
                    </p>
                    <ul role="list" className="mt-8 space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-3">
                          <CheckCircle2 className="h-6 w-6 flex-none text-primary" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={cn(
                      "mt-8 w-full text-base",
                      index === 1 && "bg-primary text-primary-foreground"
                    )}
                  >
                    Partner with us
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
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
                    className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                    className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                    className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button type="submit" className="w-full text-base">
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
