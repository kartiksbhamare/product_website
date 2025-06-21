'use client';
import { ArrowRight, Calendar, MessageCircle, TrendingUp, CheckCircle, Star, Phone, Sparkles, Zap, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import StatsCounter from '@/components/StatsCounter';
import WhatsAppDemo from '@/components/WhatsAppDemo';
import Logo from '@/components/Logo';

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
                <Logo size={20} className="flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">🤖 AI-Powered WhatsApp Booking Bot</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">📲 Turn WhatsApp Into Your</span>
                <br />
                <span className="bg-gradient-to-r from-salon-pink to-salon-purple bg-clip-text text-transparent">
                  Smart Booking Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                🚀 Let customers book appointments instantly on WhatsApp — while you focus on making them beautiful. 
                No more missed calls, no more manual scheduling, no more no-shows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/demo"
                  className="bg-gradient-to-r from-salon-pink to-salon-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2 pulse-glow"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>🪄 Try Free Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <Link
                  href="https://wa.me/918308520943"
            target="_blank"
            rel="noopener noreferrer"
                  className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-salon-purple hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>💬 Chat with Us</span>
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>✅ No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>🎁 30 days free support</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>💸 Money-back guarantee</span>
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

      {/* Quick Navigation Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🧭 Explore SalonSync
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about automating your salon bookings
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Link
              href="/how-it-works"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">How It Works</h3>
              <p className="text-sm text-gray-600">See the booking process step-by-step</p>
              <div className="mt-4 text-blue-600 font-medium flex items-center justify-center space-x-1">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/features"
              className="group bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl border border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Features</h3>
              <p className="text-sm text-gray-600">Discover all powerful capabilities</p>
              <div className="mt-4 text-purple-600 font-medium flex items-center justify-center space-x-1">
                <span>Explore features</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/pricing"
              className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pricing</h3>
              <p className="text-sm text-gray-600">Simple plans for every salon size</p>
              <div className="mt-4 text-green-600 font-medium flex items-center justify-center space-x-1">
                <span>View plans</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/demo"
              className="group bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-2xl border border-orange-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Demo</h3>
              <p className="text-sm text-gray-600">Try the booking bot yourself</p>
              <div className="mt-4 text-orange-600 font-medium flex items-center justify-center space-x-1">
                <span>Try demo</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="group bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-2xl border border-teal-200 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-600">Get help from our team</p>
              <div className="mt-4 text-teal-600 font-medium flex items-center justify-center space-x-1">
                <span>Get in touch</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              🌟 Trusted by <span className="text-salon-purple">100+</span> Salons Across India
            </h2>
            <p className="text-xl text-gray-600">Real results from real salon owners — just like you.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <div className="text-4xl mb-2">💼</div>
              <div className="text-4xl font-bold text-salon-purple mb-2">
                <StatsCounter endValue={100} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Happy Salons</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="text-4xl mb-2">😊</div>
              <div className="text-4xl font-bold text-salon-pink mb-2">
                <StatsCounter endValue={95} suffix="%" />
              </div>
              <p className="text-gray-600 font-medium">Customer Satisfaction</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
              <div className="text-4xl mb-2">📅</div>
              <div className="text-4xl font-bold text-salon-purple mb-2">
                <StatsCounter endValue={50000} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Bookings Processed</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-4xl font-bold text-salon-pink mb-2">
                <StatsCounter endValue={60} suffix="%" />
              </div>
              <p className="text-gray-600 font-medium">Fewer No-Shows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SalonSync */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💡 Why Salon Owners Love SalonSync
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              🎯 Our WhatsApp bot handles the boring stuff — so you can focus on making your clients look amazing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">📅</div>
                <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤖 Smart Scheduling That Just Works</h3>
              <p className="text-gray-600 mb-4">
                ✨ Customers pick their service, barber, and time — all automatically synced to your calendar. 
                No double bookings, no confusion, no stress.
              </p>
              <Link 
                href="/features" 
                className="text-salon-purple font-semibold hover:text-salon-pink transition-colors inline-flex items-center space-x-1"
              >
                <span>See how it works</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">💬</div>
                <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌙 24/7 Customer Service (While You Sleep!)</h3>
              <p className="text-gray-600 mb-4">
                🛌 Your bot never sleeps, never takes breaks, and never misses a booking. 
                Customers get instant responses — even at 2 AM.
              </p>
              <Link 
                href="/features" 
                className="text-salon-purple font-semibold hover:text-salon-pink transition-colors inline-flex items-center space-x-1"
              >
                <span>See all features</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">💰</div>
                <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">📈 More Bookings = More Money</h3>
              <p className="text-gray-600 mb-4">
                💸 Automated follow-ups, smart reminders, and instant booking confirmations 
                mean 40% more appointments and 60% fewer no-shows.
              </p>
              <Link 
                href="/pricing" 
                className="text-salon-purple font-semibold hover:text-salon-pink transition-colors inline-flex items-center space-x-1"
              >
                <span>See pricing plans</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
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
              ❤️ Real Stories from Real Salon Owners
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold text-gray-700">4.9/5 rating ⭐</span>
            </div>
            <p className="text-xl text-gray-600">Don't just take our word for it — hear from salon owners who've transformed their business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "💥 Game changer! My customers love booking on WhatsApp — it's so much easier than calling. 
                And I've cut my no-shows by half!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">💇‍♀️ Owner, Radiance Beauty Salon, Mumbai</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "🤖 It's like having a super-smart receptionist that never takes a day off. 
                My phone doesn't ring all day with booking calls anymore!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-salon-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">✂️ Manager, Elegant Hair Studio, Delhi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "💰 Best investment I've made for my salon! Revenue up 35% in 3 months. 
                The bot pays for itself in the first week!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anita Patel</p>
                  <p className="text-sm text-gray-600">💅 Owner, Bliss Beauty Parlour, Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 See It in Action — Free Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              🪄 Watch how your customers will book appointments — from "Hi" to confirmed booking in under 30 seconds.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-purple-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    🎯 What you'll see:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-800">💬 Customer says "Hi" on WhatsApp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-800">📋 Service menu appears instantly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-800">🗓️ They pick service, barber & time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-2 rounded-full">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-800">✅ Booking confirmed automatically</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 mb-6">
                    <div className="text-6xl mb-4">🪄</div>
                    <p className="text-gray-700 font-medium">
                      Live demo takes less than 5 minutes
                    </p>
                  </div>
                  
                  <Link
                    href="/demo"
                    className="bg-gradient-to-r from-salon-pink to-salon-purple text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <Zap className="h-5 w-5" />
                    <span>🎬 Watch Demo Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-white/30"></div>
            <div className="px-4 text-white/60">⸻</div>
            <div className="flex-1 h-px bg-white/30"></div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            🌟 Ready to Automate Your Salon?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            📈 Join 100+ salon owners who've already transformed their booking process. 
            Get started today with 30 days free support and money-back guarantee.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/918308520943"
          target="_blank"
          rel="noopener noreferrer"
              className="bg-white text-salon-purple px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>💬 Chat with Us Now</span>
            </Link>
            
            <Link
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>🎬 Watch Free Demo</span>
              <Zap className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-white/80 text-sm">
              💸 No setup fees • 🎁 30 days free support • ✅ Money-back guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
