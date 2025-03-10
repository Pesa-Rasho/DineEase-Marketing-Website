
import { Link } from "react-router-dom"
import { Container } from "@/components/ui/container"

export function Footer() {
  const navigation = {
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/dineease.lk/",
      },
    ],
  }

  return (
    <footer className="border-t bg-background">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-primary">DineEase</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Making restaurant booking smarter and easier for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul role="list" className="mt-4 space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: teamdineease@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: (076) 998-5883
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DineEase. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
