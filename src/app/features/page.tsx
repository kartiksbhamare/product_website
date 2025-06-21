import { 
  Bot, Calendar, MessageCircle, TrendingUp, Shield, Clock, 
  Users, BarChart3, Smartphone, Zap, CheckCircle, ArrowRight,
  HeadphonesIcon, Globe, CreditCard, RefreshCw
} from 'lucide-react';
import Link from 'next/link';

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: 'AI-Powered Conversations',
      description: 'Natural language processing that understands customer intent and responds like a human receptionist.',
      benefits: [
        'Understands complex booking requests',
        'Handles multiple languages',
        'Learns from conversations',
        'Contextual responses'
      ]
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: 'Smart Scheduling',
      description: 'Intelligent calendar management that optimizes appointments and prevents conflicts.',
      benefits: [
        'Real-time availability checking',
        'Automatic conflict resolution',
        'Staff preference matching',
        'Service duration optimization'
      ]
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: '24/7 Customer Service',
      description: 'Round-the-clock availability ensures you never miss a booking opportunity.',
      benefits: [
        'Instant response to inquiries',
        'After-hours booking acceptance',
        'Weekend and holiday coverage',
        'Multiple conversation handling'
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Revenue Optimization',
      description: 'AI-driven insights and automated upselling to maximize your salon\'s revenue.',
      benefits: [
        'Automated service recommendations',
        'Peak time pricing suggestions',
        'Customer lifetime value tracking',
        'Revenue forecasting'
      ]
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
      title: 'Beauty Spas',
      description: 'Ideal for facial treatments, massages, and wellness services',
      features: ['Treatment packages', 'Therapist preferences', 'Wellness consultations']
    },
    {
      title: 'Nail Salons',
      description: 'Optimized for manicures, pedicures, and nail art appointments',
      features: ['Service duration tracking', 'Design consultations', 'Group bookings']
    },
    {
      title: 'Barbershops',
      description: 'Designed for quick cuts, shaves, and grooming services',
      features: ['Walk-in management', 'Loyalty tracking', 'Group appointments']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block text-salon-purple">Modern Salons</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to automate bookings, delight customers, 
            and grow your salon business with AI-powered intelligence.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-4 rounded-2xl text-white">
                    {feature.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
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
              BookBot AI adapts to your specific salon needs and workflow
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how BookBot AI can transform your salon with a personalized demo.
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
              <span>View Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 