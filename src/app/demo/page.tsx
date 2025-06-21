'use client';
import { useState } from 'react';
import { MessageCircle, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import Link from 'next/link';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salonName: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    console.log('Demo request:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Experience BookBot AI
              <span className="block text-salon-purple">Live Demo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI-powered WhatsApp bot handles real salon bookings. 
              Try the interactive demo below or schedule a personalized walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Try the Interactive Demo
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                This is exactly how your customers will interact with BookBot AI. 
                The conversation flows naturally and handles complex booking scenarios.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-pink/10 p-2 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-salon-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Natural Conversation</h3>
                    <p className="text-gray-600">
                      AI understands context and responds like a human receptionist
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-purple/10 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-salon-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
                    <p className="text-gray-600">
                      Automatically suggests available slots based on preferences 
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-pink/10 p-2 rounded-lg">
                    <Phone className="h-6 w-6 text-salon-pink" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
                    <p className="text-gray-600">
                      Confirms bookings immediately and sends reminders
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:sticky lg:top-24">
              <WhatsAppDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Personal Demo */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Want a Personalized Demo?
              </h2>
              <p className="text-lg text-gray-600">
                Schedule a free 15-minute demo tailored to your salon's specific needs. 
                No commitment required.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="salonName" className="block text-sm font-medium text-gray-700 mb-2">
                      Salon Name
                    </label>
                    <input
                      type="text"
                      id="salonName"
                      name="salonName"
                      value={formData.salonName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent transition-all"
                      placeholder="Your salon name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your needs (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent transition-all"
                    placeholder="How many appointments per day? Any specific requirements?"
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-salon-pink to-salon-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Schedule Free Demo</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    We'll reach out within 24 hours to schedule your demo
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Demo Request Received!
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thanks for your interest! We'll contact you within 24 hours to schedule 
                  your personalized BookBot AI demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/features"
                    className="bg-salon-purple text-white px-6 py-3 rounded-full font-semibold hover:bg-salon-purple/90 transition-colors"
                  >
                    Explore Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="border-2 border-salon-purple text-salon-purple px-6 py-3 rounded-full font-semibold hover:bg-salon-purple hover:text-white transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help or Have Questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you understand how BookBot AI can transform your salon.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@bookbot.ai"
              className="inline-flex items-center space-x-2 text-salon-purple hover:text-salon-pink font-semibold"
            >
              <Mail className="h-5 w-5" />
              <span>hello@bookbot.ai</span>
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center space-x-2 text-salon-purple hover:text-salon-pink font-semibold"
            >
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 