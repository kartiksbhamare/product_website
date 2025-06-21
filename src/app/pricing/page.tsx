import { Check, Star, MessageCircle, Mail, ArrowRight, Sparkles, Users, Calendar, BarChart3, Settings, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹799',
      period: '/month',
      description: 'For individual barbers or small salons',
      icon: '🌿',
      popular: false,
      features: [
        'WhatsApp booking bot (1 number)',
        'Custom services & prices',
        '24/7 automated bookings',
        'Dashboard to view bookings',
        'Up to 2 barbers',
        'Automated confirmations & reminders',
        'Free setup & onboarding',
        'Chat support'
      ]
    },
    {
      name: 'Standard Plan',
      price: '₹1,499',
      period: '/month',
      description: 'Great for growing teams',
      icon: '🔥',
      popular: true,
      features: [
        'Everything in Basic, plus:',
        'Up to 5 barbers',
        'Realtime dashboard with filters',
        'Staff assignment per booking',
        'Export bookings (CSV)',
        'WhatsApp + Email support',
        'Logo & branding customization'
      ]
    },
    {
      name: 'Pro Plan',
      price: '₹2,499',
      period: '/month',
      description: 'For busy salons with multiple chairs',
      icon: '🏢',
      popular: false,
      features: [
        'Everything in Standard, plus:',
        'Unlimited barbers',
        'Google Calendar integration',
        'Multi-location support',
        'Priority support',
        'Booking insights (top services/barbers)'
      ]
    }
  ];

  const launchBonusFeatures = [
    {
      title: '30 Days Free Support',
      description: 'Get dedicated support for your first month',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'No Setup Fee',
      description: 'We\'ll set everything up for you at no extra cost',
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: 'Money-back Guarantee',
      description: 'No risk! Get your money back if not satisfied',
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-salon-purple" />
            <h1 className="text-5xl font-bold text-gray-900">
              💸 Pricing Made Simple
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-salon-purple mb-6">
            Affordable Automation for Every Salon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start growing your business without breaking the bank.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {plans.map((plan, index) => (
              <div key={plan.name}>
                {/* Plan Divider */}
                <div className="flex items-center justify-center mb-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-salon-purple/30"></div>
                  <div className="px-4 text-salon-purple/60">⸻</div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-salon-purple/30"></div>
                </div>

                <div className={`relative ${plan.popular ? 'transform scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple text-white px-6 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`bg-white rounded-3xl shadow-xl border-2 p-8 lg:p-12 ${
                    plan.popular 
                      ? 'border-salon-purple shadow-salon-purple/20' 
                      : 'border-gray-200 hover:border-salon-purple/50'
                  } transition-all duration-300 hover:shadow-2xl`}>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Plan Info */}
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-4xl">{plan.icon}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                              {plan.name}
                            </h3>
                            <p className="text-gray-600 mt-2">{plan.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-baseline space-x-2 mb-8">
                          <span className="text-5xl font-bold text-salon-purple">
                            {plan.price}
                          </span>
                          <span className="text-xl text-gray-600">{plan.period}</span>
                        </div>
                        
                        <div className="space-y-4">
                          <Link
                            href="/demo"
                            className={`block w-full text-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${
                              plan.popular
                                ? 'bg-gradient-to-r from-salon-pink to-salon-purple text-white hover:shadow-2xl hover:scale-105'
                                : 'bg-gray-100 text-gray-900 hover:bg-salon-purple hover:text-white'
                            }`}
                          >
                            Get Started
                          </Link>
                          
                          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>WhatsApp Support</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Shield className="h-4 w-4" />
                              <span>Money-back Guarantee</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6">
                          What's Included:
                        </h4>
                        <ul className="space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className={`text-gray-700 ${
                                feature.startsWith('Everything in') ? 'font-medium text-salon-purple' : ''
                              }`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Launch Bonus */}
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
              🎉 Special Launch Bonus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get these exclusive benefits when you sign up today!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {launchBonusFeatures.map((bonus, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-200">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl w-fit mb-6 text-white">
                  {bonus.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ✅ {bonus.title}
                </h3>
                <p className="text-gray-600">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-green-200 inline-block">
              <div className="text-2xl font-bold text-green-600 mb-2">
                No Risk!
              </div>
              <div className="text-gray-700">
                Money-back guarantee — Try risk-free for 30 days
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
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
              💡 Not sure which one to pick?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start with Basic, and upgrade anytime as your salon grows!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">WhatsApp us now</h3>
                  <p className="text-gray-600">Get instant help choosing your plan</p>
                </div>
              </div>
              <a
                href="https://wa.me/918308520943"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-colors duration-300"
              >
                📱 Chat on WhatsApp
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-salon-purple p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email support</h3>
                  <p className="text-gray-600">If you need help choosing</p>
                </div>
              </div>
              <a
                href="mailto:salonsync.first@gmail.com"
                className="block w-full bg-salon-purple text-white text-center px-6 py-3 rounded-full font-bold hover:bg-salon-purple/90 transition-colors duration-300"
              >
                📧 Send Email
              </a>
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
            Join hundreds of salon owners who have automated their bookings with SalonSync.
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
              href="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>How It Works</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 