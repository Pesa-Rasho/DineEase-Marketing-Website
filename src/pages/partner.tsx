
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { CheckCircle2 } from "lucide-react"
import { useSearchParams } from 'react-router-dom'

export default function Partner() {
  const form = useRef<HTMLFormElement>(null);
  const [searchParams] = useSearchParams();
  const [formStatus, setFormStatus] = useState({
    isSending: false,
    isSent: false,
    error: null
  });

  // Get the plan from URL parameters
  const planFromUrl = searchParams.get('plan');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isSending: true, isSent: false, error: null });

    if (form.current) {
      emailjs.sendForm(
        'service_3ceb2ic',    // Replace with your EmailJS service ID
        'template_65kg9ob',   // Replace with your EmailJS template ID
        form.current,
        'mw2YKJHQiErlpbpj8'     // Replace with your EmailJS public key
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
    }
  };

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
            <form ref={form} onSubmit={sendEmail} className="mt-12 space-y-6">
              <div>
                <label htmlFor="restaurant_name" className="block text-sm font-medium">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  id="restaurant_name"
                  name="restaurant_name"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="mt-2 block w-full rounded-lg border bg-background/50 px-4 py-2.5 text-foreground shadow-sm backdrop-blur-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
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
                  defaultValue={planFromUrl || ""}
                >
                  <option value="">Select a plan</option>
                  <option value="value pack">Value Pack ($99/mo)</option>
                  <option value="standard package">Standard Package ($199/mo)</option>
                  <option value="max pack">Max Pack ($299/mo)</option>
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
              <Button 
                type="submit" 
                className="w-full"
                disabled={formStatus.isSending}
              >
                {formStatus.isSending ? 'Sending...' : 'Submit Application'}
              </Button>
              
              {formStatus.isSent && (
                <div className="mt-4 rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Application submitted successfully! Our team will contact you soon.
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
                        Failed to submit application. Please try again later.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}