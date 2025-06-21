import { CheckCircle, X, ArrowRight, MessageCircle, Crown, Zap, Building } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 49,
      description: 'Perfect for small salons just getting started',
      icon: <Zap className="h-8 w-8" />,
      features: [
        { name: 'Up to 100 bookings/month', included: true },
        { name: 'WhatsApp integration', included: true },
        { name: 'Basic AI responses', included: true },
        { name: 'Calendar sync (1 calendar)', included: true },
        { name: 'Email notifications', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Business hours automation', included: true },
        { name: 'Phone support', included: false },
        { name: 'Custom branding', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Multiple staff management', included: false },
        { name: 'API access', included: false }
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: 99,
      description: 'Best for growing salons with multiple staff',
      icon: <Crown className="h-8 w-8" />,
      features: [
        { name: 'Up to 500 bookings/month', included: true },
        { name: 'WhatsApp integration', included: true },
        { name: 'Advanced AI responses', included: true },
        { name: 'Calendar sync (5 calendars)', included: true },
        { name: 'Email & SMS notifications', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Business hours automation', included: true },
        { name: 'Phone support', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Multiple staff management', included: true },
        { name: 'Payment processing', included: true },
        { name: 'API access', included: false }
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For large salons and multi-location businesses',
      icon: <Building className="h-8 w-8" />,
      features: [
        { name: 'Unlimited bookings', included: true },
        { name: 'WhatsApp integration', included: true },
        { name: 'Premium AI responses', included: true },
        { name: 'Unlimited calendar sync', included: true },
        { name: 'Email, SMS & voice notifications', included: true },
        { name: 'Premium analytics & reporting', included: true },
        { name: 'Business hours automation', included: true },
        { name: 'Priority phone support', included: true },
        { name: 'Full custom branding', included: true },
        { name: 'Unlimited staff management', included: true },
        { name: 'Advanced payment processing', included: true },
        { name: 'Full API access', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 30-day free trial with no credit card required. You can test all features and see how BookBot AI works for your salon.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.'
    },
    {
      question: 'What happens if I exceed my booking limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan or we\'ll temporarily increase your limit with a small overage fee.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes! For large salon chains or unique requirements, we offer custom enterprise solutions. Contact our sales team for a personalized quote.'
    },
    {
      question: 'Is customer support included?',
      answer: 'All plans include email support. Professional and Enterprise plans include phone support with priority response times.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees. Your service continues until the end of your billing period.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-salon-purple">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Choose the perfect plan for your salon. Start with a 30-day free trial, 
            no credit card required.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-2 ring-salon-purple scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-salon-purple text-white px-6 py-2 rounded-b-lg text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-salon-pink to-salon-purple text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/demo'}
                    className={`w-full block text-center py-4 px-6 rounded-full font-semibold transition-all duration-300 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-salon-pink to-salon-purple text-white hover:shadow-xl hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={`${
                          feature.included ? 'text-gray-700' : 'text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-salon-purple/10">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {plans[0].features.map((feature, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {feature.name}
                      </td>
                      {plans.map((plan, planIndex) => (
                        <td key={planIndex} className={`px-6 py-4 text-center ${
                          planIndex === 1 ? 'bg-salon-purple/5' : ''
                        }`}>
                          {plan.features[index].included ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 1000+ salons already using BookBot AI to automate their bookings 
            and grow their business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-salon-purple px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Free Trial</span>
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-salon-purple transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Sales</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 