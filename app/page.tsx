"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                  <span className="text-foreground">Anouar</span> <span className="text-primary">Bensalah</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Manager &amp; Head of Banking Projects and Technical Office 
                </p>
              </div>

              <div className="flex flex-wrap gap-3"></div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/anouar-bensalah-06aa2b80/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6"></div>
                <Card className="relative bg-card border-2 border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/images/anouar.jpg"
                      alt="Anouar Bensalah"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      {/* Experience Section */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="tel:+212664097538" className="block">
              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+212664097538</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/anouar-bensalah-06aa2b80/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">linkedin.com/in/anouar-bensalah-06aa2b80</p>
                </CardContent>
              </Card>
            </a>

            <a href="mailto:anouar.bensalah@socgen.com" className="block">
              <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">anouar.bensalah@socgen.com</p>
                </CardContent>
              </Card>
            </a>

            
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/anouar-bensalah-06aa2b80/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                View LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-medium mb-2">Anouar Bensalah</p>
          <p className="text-secondary-foreground/80">Manager & Head of Banking Projects and Technical Office AFS</p>
        </div>
      </footer>
    </div>
  )
}
