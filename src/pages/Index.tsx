import { ArrowRight, CheckCircle2, Utensils, Calendar, Bell, Sandwich, Bell as NotificationBell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import emailJs from "@emailjs/browser"


export default function Index() {
  const navigate = useNavigate()

  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    isSent: false,
    error: null
  });
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
      icon: Calendar,
      title: "Select Date & Time",
      description: "Pick your preferred dining date and time slot.",
    },
    {
      icon: Sandwich,
      title: "Customize your table and Pre-order Meals",
      description: "Select your table and meals, and customize them to your preferences.",
    },
    {
      icon: NotificationBell,
      title: "Stay Updated",
      description: "Receive real-time notifications about your order status.",
    },
  ]

  const pricing = [
    {
      name: "Value Pack",
      price: "$99",
      description: "Perfect for small restaurants",
      features: [
        "Standard Restaurant Page",
        "Standard Meal Page",
        "One promotional advertisement per week",
        "5% commission per pre-order",
        "Exclusion from top listings  ",
        "Standard support",
      ],
    },
    {
      name: "Standard Package",
      price: "$199",
      description: "For growing restaurants",
      features: [
        "Custom Restaurant Page",
        "Custom Meal Page",
        "Custom menu with photos",
        "2-3 Promotional Ads per week",
        "2% commission per pre-order",
        "Top listing for selected weeks",
        "Priority support",
      ],
    },
    {
      name: "Max Pack",
      price: "$299",
      description: "For established restaurants",
      features: [
        "Custom Restaurant Page",
        "Custom Meal Page",
        "5 promotional Ads per week",
        "Top Listing",
        "No commissions",
        "Personalized analystics and demand forecast",
        "24/7 VIP support",
      ],
    },
  ]

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ isSending: true, isSent: false, error: null });

    emailJs.sendForm(
      'service_3ceb2ic',
      'template_3xdd2wd',
      form.current,
      'mw2YKJHQiErlpbpj8'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus({ isSending: false, isSent: true, error: null });
        form.current?.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setFormStatus({ isSending: false, isSent: false, error: error.text });
      });
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden mt-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: "url('/background.jpg')" }}
          />

          {/* Dark Background Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent" />

          <Container className="relative py-40 sm:py-48">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
                Dining Made Easy with{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  DineEase
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-xl sm:text-2xl text-white">
                Elevate your restaurant's presence with our AI-powered platform. Seamless bookings, pre-orders, and real-time updates for an exceptional dining experience.
              </p>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <Button size="lg" className="gap-2 text-lg sm:text-xl">
                  Get Started
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section id="features" className="py-24  mt-4">
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
                  className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-background to-background/80 p-8 backdrop-blur-sm transition-all hover:shadow-lg cursor-pointer"
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
            <div className="mx-auto mt-16 grid max-w-lg gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center rounded-2xl bg-card/50 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-[300px]"
                >
                  <div className="absolute top-4 right-4 text-3xl font-light text-primary/50">
                    {index + 1}
                  </div>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold">{step.title}</h3>

                  <p className="mt-4 text-center text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="pricing" >
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
                    "relative overflow-hidden rounded-3xl border bg-card p-8 transition-all hover:shadow-lg cursor-pointer xl:p-10"
                  )}
                >
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
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="to_name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="to_name"
                    id="to_name"
                    className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="reply_to"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
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
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full text-base"
                  disabled={formStatus.isSending}
                >
                  {formStatus.isSending ? 'Sending...' : 'Send message'}
                </Button>

                {formStatus.isSent && (
                  <div className="mt-4 rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Message sent successfully! Our team will contact you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formStatus.error && (
                  <div className="mt-4 rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          Failed to send message. Please try again later.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
