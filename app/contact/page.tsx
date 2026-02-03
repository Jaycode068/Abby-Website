'use client'

import React from "react"

import { Mail, Phone, Globe, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/xojlozrq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
          setSubmitted(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground tracking-tight hover:text-accent transition">
            ABBY
          </Link>
          <Link href="/">
            <Button size="sm" variant="outline" className="border-border text-foreground hover:bg-muted bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about Abby Table Water? Want to become a distributor? We're here to help. Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20 hover:border-accent/50 transition">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+234 810 521 5621</p>
            <a href="tel:+2348105215621" className="text-accent hover:text-accent/80 transition mt-2 text-sm font-medium">
              Call Now
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20 hover:border-accent/50 transition">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">abby7officials@gmail.com</p>
            <a href="mailto:abby7officials@gmail.com" className="text-accent hover:text-accent/80 transition mt-2 text-sm font-medium">
              Send Email
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border/20 hover:border-accent/50 transition">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Website</h3>
            <p className="text-muted-foreground">www.abbytablewater.com</p>
            <a href="https://www.abbytablewater.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition mt-2 text-sm font-medium">
              Visit Site
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Send us a Message</h2>
            <p className="text-muted-foreground text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border/20 rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition"
                  placeholder="+234 810 521 5621"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label htmlFor="company" className="text-sm font-medium text-foreground mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition"
                  placeholder="Your Company"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col mb-6">
              <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition"
                placeholder="How can we help you?"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-8">
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {submitted ? 'Message Sent!' : 'Send Message'}
            </Button>

            {submitted && (
              <p className="text-center text-accent text-sm mt-4 font-medium">
                Thank you! We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 bg-primary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">ABBY</h4>
              <p className="text-gray-300 text-sm">
                The water you proudly serve.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/#why" className="hover:text-white transition">Why Abby</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="tel:+2348105215621" className="hover:text-white transition">+234 810 521 5621</a></li>
                <li><a href="mailto:abby7officials@gmail.com" className="hover:text-white transition">abby7officials@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Visit</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://www.abbytablewater.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">www.abbytablewater.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Abby Table Water. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
