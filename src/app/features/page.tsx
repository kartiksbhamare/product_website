import { 
  Bot, Calendar, MessageCircle, TrendingUp, Shield, Clock, 
  Users, BarChart3, Smartphone, Zap, CheckCircle, ArrowRight,
  HeadphonesIcon, Globe, CreditCard, RefreshCw, Bell, Palette, Building, Settings, Sparkles, Star
} from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  const mainFeatures = [
    {
      title: '24/7 WhatsApp Booking Bot',
      description: 'Your salon\'s digital receptionist — always online.',
      details: 'Customers can book anytime, even after hours or on holidays.',
      icon: <Bot className="h-8 w-8" />,
      emoji: '🤖'
    },
    {
      title: 'Interactive Service Menu',
      description: 'Customers instantly see your full menu with names, prices, and service times.',
      details: '💇 Haircut? 💅 Manicure? It\'s all there — beautifully formatted and easy to select.',
      icon: <Calendar className="h-8 w-8" />,
      emoji: '📋'
    },
    {
      title: 'Multi-Barber Scheduling',
      description: 'Let customers choose their favorite barber/stylist.',
      details: 'Each barber has their own time slots — no overlaps, no confusion.',
      icon: <Users className="h-8 w-8" />,
      emoji: '👩‍🎨'
    },
    {
      title: 'Real-Time Slot Availability',
      description: 'The bot checks your available slots live — so no double bookings ever.',
      details: '',
      icon: <Clock className="h-8 w-8" />,
      emoji: '📆'
    },
    {
      title: 'Instant Confirmations',
      description: 'As soon as a booking is made, the customer and the salon get a WhatsApp message confirmation.',
      details: '',
      icon: <MessageCircle className="h-8 w-8" />,
      emoji: '📲'
    },
    {
      title: 'Automated Reminders',
      description: 'Reduce no-shows with gentle automated WhatsApp reminders sent before the appointment.',
      details: '',
      icon: <Bell className="h-8 w-8" />,
      emoji: '🔔'
    },
    {
      title: 'Admin Dashboard',
      description: 'View all bookings in a beautiful web dashboard.',
      details: 'Filter by date, barber, or status — works in real time.',
      icon: <BarChart3 className="h-8 w-8" />,
      emoji: '📊'
    },
    {
      title: 'Custom Branding',
      description: 'We\'ll add your logo, business name, and tone of voice so your bot feels like part of your salon.',
      details: '',
      icon: <Palette className="h-8 w-8" />,
      emoji: '🖼️'
    },
    {
      title: 'Works Without a Website',
      description: 'You don\'t need to build or manage a website. All bookings happen via WhatsApp — simple, fast, familiar.',
      details: '',
      icon: <Globe className="h-8 w-8" />,
      emoji: '🌐'
    },
    {
      title: 'Multi-Location Ready',
      description: 'If you have more than one branch or staff working in shifts, we support that too.',
      details: '',
      icon: <Building className="h-8 w-8" />,
      emoji: '💼'
    },
    {
      title: 'Free Setup & Easy Integration',
      description: 'No technical knowledge needed. We set up everything for you — ready to go in 24 hours.',
      details: '',
      icon: <Settings className="h-8 w-8" />,
      emoji: '🛠️'
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Data Security',
      description: 'Bank-level encryption and GDPR compliance'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Automated Reminders',
      description: 'Reduce no-shows with smart reminder system'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Customer Profiles',
      description: 'Automatic customer data management'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance metrics'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Mobile Optimized',
      description: 'Perfect experience on all devices'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Setup',
      description: 'Go live in under 5 minutes'
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: 'Priority Support',
      description: '24/7 dedicated customer success team'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Multi-Language',
      description: 'Support for 50+ languages'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Payment Integration',
      description: 'Secure payment processing built-in'
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Auto-Updates',
      description: 'Always get the latest AI improvements'
    }
  ];

  const useCases = [
    {
      title: 'Hair Salons',
      description: 'Perfect for hair styling, coloring, and treatment bookings',
      features: ['Stylist matching', 'Color consultation booking', 'Treatment scheduling']
    },
    {
      title: 'Beauty Parlours',
      description: 'Ideal for facial treatments, threading, and bridal services',
      features: ['Bridal packages', 'Facial treatments', 'Threading & waxing']
    },
    {
      title: 'Nail Studios',
      description: 'Optimized for manicures, pedicures, and nail art appointments',
      features: ['Service duration tracking', 'Design consultations', 'Group bookings']
    },
    {
      title: 'Unisex Salons',
      description: 'Designed for comprehensive grooming services for all',
      features: ['Family bookings', 'Service packages', 'Loyalty tracking']
    }
  ];

  const extraTouches = [
    'Mobile-first design',
    'Emoji-enhanced messages for friendliness',
    'Staff booking notifications',
    'Optional customer notes (e.g., "wants haircut + shave")',
    'Easy export to Excel (for reports)'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-salon-purple" />
            <h1 className="text-5xl font-bold text-gray-900">
              ✨ Features
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-salon-purple mb-6">
            Everything You Need to Automate Bookings & Delight Customers
          </h2>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={feature.title}>
                {/* Feature Divider */}
                <div className="flex items-center justify-center mb-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
                  <div className="px-4 text-salon-purple/60">⸻</div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
                </div>

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-reverse' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl">{feature.emoji}</div>
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    
                    {feature.details && (
                      <p className="text-gray-600">
                        {feature.details}
                      </p>
                    )}
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blush-50 to-deep-purple-50 rounded-2xl p-8 border border-salon-purple/20">
                        <div className="flex items-center justify-center">
                          <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="text-6xl mb-4 text-center">{feature.emoji}</div>
                            <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-4 rounded-xl text-white text-center">
                              {feature.icon}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Feature Set
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a complete salon booking solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-lg w-fit mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Salon Type
            </h2>
            <p className="text-xl text-gray-600">
              SalonSync adapts to your specific salon needs and workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-salon-purple flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Works with the tools you already use
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Calendar Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Google Calendar, Outlook, Apple Calendar, and more
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Two-way sync</li>
                <li>• Real-time updates</li>
                <li>• Conflict prevention</li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Payment Processors
              </h3>
              <p className="text-gray-600 mb-4">
                Stripe, PayPal, Square, and popular POS systems
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Secure transactions</li>
                <li>• Automated receipts</li>
                <li>• Refund handling</li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CRM Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Salesforce, HubSpot, and popular salon management software
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Customer data sync</li>
                <li>• Automated follow-ups</li>
                <li>• Analytics integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Touches Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
            <div className="px-4 text-salon-purple/60">⸻</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💡 Extra Touches That Make a Big Difference:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small details that create exceptional customer experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extraTouches.map((touch, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{touch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Salon Owners Love SalonSync
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600">40%</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                More Bookings
              </h3>
              <p className="text-gray-600">
                Customers book more often when it's this easy
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600">60%</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fewer No-Shows
              </h3>
              <p className="text-gray-600">
                Automated reminders keep customers committed
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-salon-purple p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-salon-purple">5 hrs</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Time Saved Weekly
              </h3>
              <p className="text-gray-600">
                No more phone calls or manual scheduling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how SalonSync can transform your salon's booking process in just 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-salon-purple px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Try Live Demo</span>
            </Link>
            
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>See Pricing</span>
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 