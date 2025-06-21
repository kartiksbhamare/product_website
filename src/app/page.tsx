'use client';
import { ArrowRight, Bot, Calendar, MessageCircle, TrendingUp, CheckCircle, Star, Phone } from 'lucide-react';
import Link from 'next/link';
import StatsCounter from '@/components/StatsCounter';
import WhatsAppDemo from '@/components/WhatsAppDemo';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blush-50 via-white to-deep-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Bot className="h-5 w-5 text-salon-purple" />
                <span className="text-sm font-medium text-gray-700">AI-Powered Booking Assistant</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-salon-pink to-salon-purple bg-clip-text text-transparent">
                  Salon Bookings
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Automate appointment scheduling with our intelligent WhatsApp bot. 
                Reduce no-shows by 60%, increase bookings by 40%, and let AI handle customer service 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/demo"
                  className="bg-gradient-to-r from-salon-pink to-salon-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2 pulse-glow"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Try Free Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <Link
                  href="/how-it-works"
                  className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-salon-purple hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>How It Works</span>
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-salon-pink/20 to-salon-purple/20 rounded-3xl blur-3xl"></div>
              <WhatsAppDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-salon-purple">1000+</span> Salons Worldwide
            </h2>
            <p className="text-lg text-gray-600">Real results from real businesses</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-salon-purple mb-2">
                <StatsCounter endValue={1247} />
              </div>
              <p className="text-gray-600 font-medium">Active Salons</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-salon-pink mb-2">
                <StatsCounter endValue={89} suffix="%" />
              </div>
              <p className="text-gray-600 font-medium">Customer Satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-salon-purple mb-2">
                <StatsCounter endValue={2.4} suffix="M" />
              </div>
              <p className="text-gray-600 font-medium">Bookings Processed</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-salon-pink mb-2">
                <StatsCounter endValue={60} suffix="%" />
              </div>
              <p className="text-gray-600 font-medium">Reduction in No-Shows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Salons Choose SalonSync
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent WhatsApp bot handles everything from appointment scheduling 
              to customer follow-ups, so you can focus on what you do best.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl w-fit mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">
                AI automatically manages your calendar, suggests optimal time slots, 
                and handles rescheduling with intelligent conflict resolution.
              </p>
              <Link 
                href="/features" 
                className="text-salon-purple font-semibold hover:text-salon-pink transition-colors inline-flex items-center space-x-1"
              >
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl w-fit mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Never miss a booking again. Our AI responds instantly to customer 
                inquiries, even when you're closed or busy with clients.
              </p>
              <Link 
                href="/features" 
                className="text-salon-purple font-semibold hover:text-salon-pink transition-colors inline-flex items-center space-x-1"
              >
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Growth</h3>
              <p className="text-gray-600 mb-4">
                Increase bookings by 40% with automated follow-ups, 
                upselling suggestions, and personalized service recommendations.
              </p>
              <Link 
                href="/features" 
                className="text-salon-purple font-semibold hover:text-salon-pink transition-colors inline-flex items-center space-x-1"
              >
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by Salon Owners
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-700">4.9/5 rating</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "SalonSync has transformed our booking process. We've seen a 50% 
                reduction in no-shows and our clients love the convenience!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Owner, Radiance Beauty Salon</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The AI handles all our appointment scheduling perfectly. 
                It's like having a full-time receptionist that never sleeps!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-salon-purple rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">Manager, Elegant Hair Studio</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Our revenue increased by 35% in just 3 months. 
                SalonSync pays for itself and then some!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-salon-pink rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anita Patel</p>
                  <p className="text-sm text-gray-600">Owner, Bliss Beauty Parlour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Salon?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 1000+ salons using SalonSync to automate bookings and grow their business.
            Start your free 30-day trial today - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-salon-purple px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Start Free Trial</span>
            </Link>
            
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>View Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
