'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Star, Shield, Sparkles, Zap, TrendingUp, CheckCircle, Users } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    salonName: '',
    message: '',
    source: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          salonName: '',
          message: '',
          source: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyReachOutReasons = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Get personalized advice for your salon size',
      emoji: '💬'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Save hours of manual scheduling every week',
      emoji: '💸'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Start booking more clients this week itself',
      emoji: '📈'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Risk-free setup with money-back guarantee',
      emoji: '✅'
    }
  ];

  const demoFeatures = [
    'Customers see your service menu instantly',
    'Bookings auto-confirm with zero effort',
    'You get notified and stay hands-free!'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-salon-purple" />
            <h1 className="text-5xl font-bold text-gray-900">
              📞 Contact Us
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-salon-purple mb-6">
            ✨ Let's Automate Your Salon — Together!
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            You're just one step away from making your salon smarter, faster, and fully automated with WhatsApp.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Whether you need a demo, have a question, or want a personalized plan — we're here to help.
          </p>
        </div>
      </section>

      {/* WhatsApp Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💬 WhatsApp Support — Fastest Response
            </h2>
            <p className="text-xl text-gray-600">
              Talk to a real human (not a bot!).
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-200 text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-green-500 p-4 rounded-full">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl">💬</div>
              </div>
              
              <a
                href="https://wa.me/918308520943"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-green-600 transition-colors duration-300 mb-6"
              >
                📲 Chat on WhatsApp Now
              </a>
              
              <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                <Clock className="h-5 w-5" />
                <span>🕒 Available 9 AM – 8 PM, Monday to Saturday</span>
              </div>
              
              <div className="bg-white/80 p-4 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-700">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="italic">"I just sent a WhatsApp message and got booked within minutes. So easy!"</span>
                  <span className="font-medium">— Happy Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Support */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📧 Prefer Email?
            </h2>
            <p className="text-xl text-gray-600">
              We're happy to help over email too.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-purple-200 text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="bg-salon-purple p-4 rounded-full">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl">📧</div>
              </div>
              
              <a
                href="mailto:salonsync.first@gmail.com"
                className="block w-full bg-salon-purple text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-salon-purple/90 transition-colors duration-300"
              >
                📩 salonsync.first@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Book a Free Demo — See It Live
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Want to see the magic live on WhatsApp? We'll walk you through the full experience — 
              from "Hi" to confirmed booking — in less than 1 minutes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🪄 Experience how:
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/80 p-6 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-full">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-800 font-medium">•	{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="/demo"
                  className="inline-block bg-gradient-to-r from-salon-pink to-salon-purple text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  🪄 Book Free Demo Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📝 Quick Contact Form
            </h2>
            <p className="text-xl text-gray-600">
              Let us know who you are and how we can help — we'll respond within a few hours.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
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
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent"
                      placeholder="+91 98765 43210"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent"
                      placeholder="Your salon name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Friend/Colleague Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salon-purple focus:border-transparent"
                    placeholder="Tell us about your salon and what you need help with..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-salon-pink to-salon-purple text-white py-4 px-8 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message 📩'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-center text-green-600 font-medium">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center text-red-600 font-medium">
                    ❌ Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}
              </form>

              <div className="mt-8 text-center">
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center justify-center space-x-2 text-green-700">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">🔐 100% Privacy Guaranteed</span>
                  </div>
                  <p className="text-sm text-green-600 mt-2">
                    We don't spam. We don't share your details. Ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reach Out Today */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💡 Why Reach Out Today?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyReachOutReasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{reason.emoji}</div>
                  <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-full text-white">
                    {reason.icon}
                  </div>
                  <span className="text-gray-800 font-medium">{reason.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-white/30"></div>
            <div className="px-4 text-white/60">⸻</div>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            🌟 Join 100+ Salons Already Using the Bot
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let competitors get ahead. Let's get your salon automated — today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918308520943"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-salon-purple px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us Now</span>
            </a>
            
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Book Free Demo</span>
              <Zap className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 