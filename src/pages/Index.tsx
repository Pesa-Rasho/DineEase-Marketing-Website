import { ArrowRight, CheckCircle2, Utensils, Calendar, Bell, Sandwich, Bell as NotificationBell, Star, ShieldCheck, BarChart3 } from "lucide-react"
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
      icon: ShieldCheck,
      name: "Smart Booking",
      description:
        "Advanced AI-powered booking system that learns from your preferences.",
    },
    {
      icon: Sandwich,
      name: "Pre-order Meals",
      description: "Order your meals in advance and skip the wait time.",
    },
    {
      icon: Star,
      name: "Meal Customization",
      description: "Customize your dishes with detailed preferences and dietary requirements.",
    },
    {
      icon: Bell,
      name: "Real-time Tracking",
      description: "Get instant updates on your order status from preparation to serving.",
    },
    {
      icon: BarChart3,
      name: "Personalized Recommendations",
      description: "Get restaurant and dish suggestions based on your dining history.",
    },
    {
      icon: CheckCircle2,
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
      title: "Customize Your Order",
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
        "Exclusion from top listings",
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
        "Personalized analytics and demand forecast",
        "24/7 VIP support",
      ],
    },
  ]

  const testimonials = [
    {
      text: "DineEase transformed how we manage reservations. We've seen a 30% increase in pre-orders and much happier customers.",
      author: "Maria Sanchez",
      role: "Owner, La Trattoria"
    },
    {
      text: "The analytics tools have helped us optimize our menu and staffing. The ROI has been incredible for our business.",
      author: "James Chen",
      role: "Manager, Fusion Kitchen"
    },
    {
      text: "Our customers love the convenience of pre-ordering. It's made our busy periods so much more manageable.",
      author: "Sarah Johnson",
      role: "Owner, Coastal Bites"
    }
  ];

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
          {/* Background Image with Modern Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('/background.jpg')" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

          {/* Abstract Shapes */}
          <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50" />
            <div className="absolute -top-16 right-1/3 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-2xl opacity-40" />
          </div>

          <Container className="relative py-40 sm:py-48">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                Restaurant Management Simplified
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-7xl">
                Dining Made Easy with{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  DineEase
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-xl sm:text-2xl text-gray-200">
                Elevate your restaurant's presence with our AI-powered platform. Seamless bookings, pre-orders, and real-time updates for an exceptional dining experience.
              </p>
              <div className="mt-12 flex items-center justify-center gap-x-6">
                <Button size="lg" className="gap-2 text-lg px-6 py-6 bg-primary hover:bg-primary/90 text-white">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-lg px-6 py-6 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30">
                  Watch Demo
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gradient-to-b from-background to-background/70">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Key Features
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
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
                  className="relative overflow-hidden rounded-2xl border bg-card p-8 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-80" />
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full opacity-70 group-hover:bg-primary/10 transition-all duration-500" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
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

        {/* How It Works Section */}
        <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Simple Process
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground text-[#EF4444]">
                Integration Made Simple
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Our streamlined approach gets you up and running in minutes, not days
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 z-0" />

              <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                {howItWorks.map((step, index) => (
                  <div
                    key={step.title}
                    className="group relative flex flex-col items-start rounded-xl bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-muted/20 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-7 w-7" />
                    </div>

                    <div className="absolute top-6 right-6 flex items-center justify-center h-8 w-8 rounded-full bg-muted text-foreground/70 font-semibold text-sm">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20" id="team">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Meet Our Team
              </span>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                The Minds Behind DineEase
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Our dedicated team of developers and designers working together to revolutionize restaurant management
              </p>
            </div>

            <div className="mx-auto grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Kevin Fernando",
                  role: "Team Leader, Full Stack Developer",
                  image: "/team/kevin.jpg" // Replace with actual image path
                },
                {
                  name: "Pesandu Rashodya",
                  role: "Co-Leader, Full Stack Developer",
                  image: "/pesandu.jpg" // Replace with actual image path
                },
                {
                  name: "Imsarie Dharmathilaka",
                  role: "Full Stack Developer, Marketing",
                  image: "/imsarie.jpg" // Replace with actual image path
                },
                {
                  name: "Sudhir Fernando",
                  role: "Full Stack Developer, Designer",
                  image: "/team/sudhir.jpg" // Replace with actual image path
                },
                {
                  name: "Manazir Mohommed",
                  role: "Full Stack Developer, Designer",
                  image: "/team/manazir.jpg" // Replace with actual image path
                },
                {
                  name: "Yasindu Imanjith",
                  role: "Full Stack Developer, ML Engineer",
                  image: "/team/yasindu.jpg" // Replace with actual image path
                }
              ].map((member, index) => (
                <div key={index} className="relative p-6 rounded-2xl bg-card shadow-md border border-muted/20 backdrop-blur-sm flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
                  <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                    {/* Replace with actual images - using placeholder for now */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gradient-to-br from-background to-muted/20">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Pricing Plans
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground text-[#EF4444]">
                Restaurant Partnership Plans
              </h2>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan to elevate your restaurant's digital presence and grow your business
              </p>
            </div>

            <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {pricing.map((tier, index) => (
                <div
                  key={tier.name}
                  onClick={() => navigate(`/partner?plan=${tier.name.toLowerCase()}`)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group xl:p-10",
                    index === 1 ? "border-primary/30 shadow-lg ring-1 ring-primary/20 bg-card/80 backdrop-blur-sm" : ""
                  )}
                >
                  {/* Decorative elements */}
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full opacity-70 group-hover:scale-110 transition-all duration-500"></div>

                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      {index === 0 && (
                        <span className="bg-muted px-3 py-1 text-xs rounded-full font-medium">
                          Get Started
                        </span>
                      )}
                      {index === 2 && (
                        <span className="bg-amber-500/10 text-amber-500 px-3 py-1 text-xs rounded-full font-medium">
                          Enterprise
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mt-8 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        /month
                      </span>
                    </div>

                    <div className="mt-8 space-y-5">
                      <p className="text-sm font-medium text-foreground">What's included:</p>
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-x-3">
                          <div className={cn(
                            "mt-1 flex-none rounded-full p-1",
                            index === 1 ? "bg-primary/10" : "bg-muted"
                          )}>
                            <CheckCircle2 className={cn(
                              "h-4 w-4",
                              index === 1 ? "text-primary" : "text-foreground/70"
                            )} />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={cn(
                      "mt-10 w-full text-base font-medium shadow-sm transition-all duration-300",
                      index === 1
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    )}
                  >
                    {index === 1 ? "Partner with us now" : "Partner with us"}
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                Need a custom solution? <a href="/contact" className="text-primary font-medium hover:underline">Contact our sales team</a>
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
          <Container className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  Contact Us
                </span>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6">
                  Ready to transform your restaurant experience?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions? We'd love to hear from you. Our team is ready to help you get started with DineEase and take your restaurant to the next level.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">teamdineease@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">(076) 998-5883</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-muted/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
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
                    className="w-full text-base bg-primary hover:bg-primary/90"
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
            </div>
          </Container>
        </section>

        {/* CTA Section - NEW */}
        <section className="bg-primary py-16">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-foreground">Ready to elevate your restaurant experience?</h2>
              <p className="text-xl text-primary-foreground/80 mt-4 mb-8 max-w-2xl mx-auto">
                Join thousands of restaurants already using DineEase to boost their business
              </p>
              <Button size="lg" variant="secondary" className="px-8 gap-2">
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}