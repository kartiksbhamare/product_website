import { ArrowRight, Bot, Calendar, MessageCircle, Settings, Users, TrendingUp, CheckCircle, Smartphone, Zap, BarChart3, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Custom illustration components for each step
const SetupIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="bg-green-500 p-3 rounded-full">
          <Smartphone className="h-6 w-6 text-white" />
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-salon-purple rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-salon-purple rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-salon-purple rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
        <div className="bg-blue-500 p-3 rounded-full">
          <Calendar className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">WhatsApp Business</span>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Calendar Sync</span>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -top-2 -right-2 bg-green-500 text-white p-2 rounded-full">
      <CheckCircle className="h-4 w-4" />
    </div>
  </div>
);

const AITrainingIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-4 rounded-full">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            <div className="text-xs font-medium text-gray-600 mb-1">Services</div>
            <div className="space-y-1">
              <div className="h-2 bg-salon-purple/20 rounded animate-pulse"></div>
              <div className="h-2 bg-salon-purple/40 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="h-2 bg-salon-purple/60 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            <div className="text-xs font-medium text-gray-600 mb-1">Pricing</div>
            <div className="space-y-1">
              <div className="h-2 bg-salon-pink/20 rounded animate-pulse"></div>
              <div className="h-2 bg-salon-pink/40 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="h-2 bg-salon-pink/60 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            <div className="text-xs font-medium text-gray-600 mb-1">Staff</div>
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              <div className="w-4 h-4 bg-green-300 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            <div className="text-xs font-medium text-gray-600 mb-1">Hours</div>
            <div className="text-xs text-gray-800">9AM - 7PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GoLiveIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="bg-green-500 p-4 rounded-full">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        
        <div className="w-full space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-3 w-3 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-600">Customer: "Book haircut tomorrow 2PM"</div>
                <div className="text-xs text-green-600 mt-1">✓ Available slot found!</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                <Bot className="h-3 w-3 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-600">AI: "Booked! Confirmation sent"</div>
                <div className="text-xs text-blue-600 mt-1">⚡ Instant response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GrowOptimizeIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full">
          <BarChart3 className="h-8 w-8 text-white" />
        </div>
        
        <div className="w-full">
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Revenue Growth</span>
              <span className="text-sm font-bold text-green-600">+40%</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Bookings</span>
                <span className="text-green-600">↑ 35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-salon-pink to-salon-purple h-2 rounded-full w-3/4 animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">No-shows</span>
                <span className="text-green-600">↓ 60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      title: 'Quick Setup',
      description: 'Connect your WhatsApp Business account and sync your calendar in under 5 minutes.',
      icon: <Settings className="h-8 w-8" />,
      illustration: <SetupIllustration />,
      details: [
        'WhatsApp Business API integration',
        'Calendar sync (Google, Outlook, etc.)',
        'Staff and service configuration',
        'Business hours setup'
      ]
    },
    {
      number: '02',
      title: 'AI Training',
      description: 'Our AI learns your salon\'s services, pricing, and booking preferences automatically.',
      icon: <Bot className="h-8 w-8" />,
      illustration: <AITrainingIllustration />,
      details: [
        'Service menu and pricing import',
        'Staff availability patterns',
        'Customer preference learning',
        'Custom responses training'
      ]
    },
    {
      number: '03',
      title: 'Go Live',
      description: 'Start accepting bookings through WhatsApp immediately with 24/7 AI assistance.',
      icon: <MessageCircle className="h-8 w-8" />,
      illustration: <GoLiveIllustration />,
      details: [
        'Instant customer responses',
        'Real-time availability checks',
        'Automated booking confirmations',
        'Smart conflict resolution'
      ]
    },
    {
      number: '04',
      title: 'Grow & Optimize',
      description: 'Watch your bookings increase while AI continuously improves performance.',
      icon: <TrendingUp className="h-8 w-8" />,
      illustration: <GrowOptimizeIllustration />,
      details: [
        'Performance analytics dashboard',
        'Customer behavior insights',
        'Revenue optimization suggestions',
        'Automated follow-up campaigns'
      ]
    }
  ];

  const features = [
    {
      title: 'Smart Scheduling',
      description: 'AI considers staff availability, service duration, and customer preferences',
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: 'Natural Conversations',
      description: 'Customers interact as they would with a human receptionist',
      icon: <MessageCircle className="h-6 w-6" />
    },
    {
      title: 'Customer Management',
      description: 'Automatic customer profiles and booking history tracking',
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How SalonSync
            <span className="block text-salon-purple">Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your AI-powered WhatsApp booking bot up and running in just 4 simple steps. 
            No technical expertise required.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-reverse' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl font-bold text-salon-purple/20">
                      {step.number}
                    </div>
                    <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    {step.illustration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes It Work So Well?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI combines advanced natural language processing with deep salon 
              industry knowledge to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl w-fit mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600">
              See the typical results our clients experience in their first months
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-salon-pink to-salon-purple"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-gray-900">Week 1</h3>
                  <p className="text-gray-600">Setup complete, first bookings coming in</p>
                </div>
                <div className="bg-white border-4 border-salon-pink rounded-full w-4 h-4 relative z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-salon-pink/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">🎉 15% increase in booking inquiries</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-salon-purple/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">📈 30% reduction in no-shows</p>
                  </div>
                </div>
                <div className="bg-white border-4 border-salon-purple rounded-full w-4 h-4 relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-bold text-gray-900">Month 1</h3>
                  <p className="text-gray-600">AI fully trained, customers loving the experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-xl font-bold text-gray-900">Month 3</h3>
                  <p className="text-gray-600">Full ROI achieved, scaling new heights</p>
                </div>
                <div className="bg-white border-4 border-salon-pink rounded-full w-4 h-4 relative z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-salon-pink/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">🚀 40% increase in monthly revenue</p>
                  </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to transform your salon with SalonSync? Start your free trial today 
            and see the difference AI can make for your business.
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
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 