import { ArrowRight, MessageCircle, ShoppingBag, UserCheck, Bell, RotateCcw, CheckCircle, Smartphone, Clock, Calendar, Users, Sparkles, TrendingUp, Star, Zap } from 'lucide-react';
import Link from 'next/link';

// Custom illustration components for each step
const CustomerSaysHiIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <div className="bg-green-500 p-4 rounded-full">
          <Smartphone className="h-8 w-8 text-white" />
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm border">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-800">"Hi"</div>
            <div className="text-xs text-gray-500">Customer message</div>
          </div>
          <div className="text-xs text-green-600">✓ Received</div>
        </div>
        <div className="text-center text-xs text-gray-500">
          No app download needed • Works instantly
        </div>
      </div>
    </div>
  </div>
);

const ServiceMenuIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
      <div className="flex flex-col space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-salon-purple" />
              <span className="font-medium text-gray-800">Service Menu</span>
            </div>
            <div className="text-xs text-green-600">Instant Reply</div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">💇‍♀️ Haircut & Style</span>
              <span className="text-sm font-medium text-salon-purple">₹1,500</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">💅 Manicure</span>
              <span className="text-sm font-medium text-salon-purple">₹800</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-sm">✨ Facial</span>
              <span className="text-sm font-medium text-salon-purple">₹2,000</span>
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <div className="text-xs text-gray-500">✅ Custom branding with your logo</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SelectionIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center space-x-2 mb-3">
            <UserCheck className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-gray-800">Selection Process</span>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-gray-800">Service Selected:</div>
              <div className="text-sm text-blue-600">💇‍♀️ Haircut & Style</div>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-gray-800">Barber Selected:</div>
              <div className="text-sm text-green-600">👩‍🎨 Priya (Available)</div>
            </div>
            
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm font-medium text-gray-800">Time Slot:</div>
              <div className="text-sm text-purple-600">⏰ Tomorrow 2:00 PM</div>
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <div className="text-xs text-gray-500">⏱️ No clashes, no double bookings</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BookingConfirmedIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-green-500 p-4 rounded-full">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border w-full">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600 mb-2">Booking Confirmed! ✅</div>
            <div className="text-sm text-gray-600 mb-3">
              Haircut & Style with Priya<br />
              Tomorrow at 2:00 PM
            </div>
            <div className="bg-green-50 p-2 rounded text-xs text-green-700">
              Backend system updated automatically
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 text-center">
          No staff intervention needed
        </div>
      </div>
    </div>
  </div>
);

const NotificationIllustration = () => (
  <div className="relative">
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
      <div className="flex items-center justify-center space-x-6 mb-6">
        <div className="text-center">
          <div className="bg-blue-500 p-3 rounded-full mb-2 relative">
            <Users className="h-6 w-6 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <Bell className="h-2 w-2 text-white" />
            </div>
          </div>
          <div className="text-xs text-gray-600">Customer</div>
        </div>
        
        <div className="flex flex-col items-center">
          <Bell className="h-8 w-8 text-orange-500 animate-pulse mb-2" />
          <div className="text-xs text-gray-600">Instant</div>
        </div>
        
        <div className="text-center">
          <div className="bg-salon-purple p-3 rounded-full mb-2 relative">
            <UserCheck className="h-6 w-6 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <Bell className="h-2 w-2 text-white" />
            </div>
          </div>
          <div className="text-xs text-gray-600">Salon Owner</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-3 shadow-sm border">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-800 mb-2">Both Receive:</div>
          <div className="space-y-1 text-xs text-gray-600">
            <div>✅ Booking confirmation</div>
            <div>📱 Dashboard update</div>
            <div>🔔 Automatic reminders scheduled</div>
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
      title: 'Customer Says "Hi" on WhatsApp',
      description: 'Your customer simply sends a message like "Hi" to your WhatsApp number — no app download, no waiting, no calls.',
      icon: <Smartphone className="h-8 w-8" />,
      illustration: <CustomerSaysHiIllustration />,
      details: [
        'Works with any WhatsApp message',
        'No app download required',
        'Instant response guaranteed',
        'Available 24/7'
      ]
    },
    {
      number: '02',
      title: 'Service Menu Appears Instantly',
      description: 'The bot instantly replies with your customized service list, complete with prices and descriptions.',
      icon: <ShoppingBag className="h-8 w-8" />,
      illustration: <ServiceMenuIllustration />,
      details: [
        'Haircut, Styling, Manicure, Facial — all included',
        'Custom branding with your logo & name',
        'Real-time pricing updates',
        'Professional service descriptions'
      ]
    },
    {
      number: '03',
      title: 'Customer Selects Service, Barber & Time',
      description: 'Your customer selects the service, their preferred barber, and picks an available time slot based on real-time calendar availability.',
      icon: <UserCheck className="h-8 w-8" />,
      illustration: <SelectionIllustration />,
      details: [
        'Real-time availability checking',
        'No clashes, no double bookings',
        'Multiple barber support',
        'Flexible time slot selection'
      ]
    },
    {
      number: '04',
      title: 'Booking Confirmed Automatically',
      description: 'Once a slot is selected, the bot confirms the booking right away and updates your backend system — no staff intervention needed.',
      icon: <CheckCircle className="h-8 w-8" />,
      illustration: <BookingConfirmedIllustration />,
      details: [
        'Instant booking confirmation',
        'Automatic backend updates',
        'No staff intervention required',
        'Real-time calendar sync'
      ]
    },
    {
      number: '05',
      title: 'You & Customer Receive Instant Notification',
      description: 'Both you and the customer get an instant confirmation. The appointment is saved in your dashboard and Firestore, and reminders are automatically scheduled.',
      icon: <Bell className="h-8 w-8" />,
      illustration: <NotificationIllustration />,
      details: [
        'Instant notifications for both parties',
        'Dashboard and Firestore integration',
        'Automatic reminder scheduling',
        'Complete booking history tracking'
      ]
    }
  ];

  const bonusFeatures = [
    {
      title: 'Works 24/7',
      description: 'Even while you sleep',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Multiple Barbers & Locations',
      description: 'Scale your business effortlessly',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Google Calendar Integration',
      description: 'Real-time sync (optional)',
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  const results = [
    {
      title: 'More appointments booked automatically',
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      title: 'No more call management headaches',
      icon: <Zap className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Happier clients who love the convenience',
      icon: <Star className="h-6 w-6 text-yellow-600" />
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
              How It Works
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-salon-purple mb-6">
            Booking Made Effortless — For You & Your Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            With our AI-powered WhatsApp bot, your salon gets a smart, fully automated booking system 
            that works exactly like a human receptionist — only faster, cheaper, and 24/7.
          </p>
          <div className="mt-8">
            <p className="text-lg font-medium text-gray-800">
              Here's how your customers book an appointment:
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number}>
                {/* Step Divider */}
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
                      <div className="text-4xl font-bold text-salon-purple/20">
                        {step.number}
                      </div>
                      <div className="bg-gradient-to-r from-salon-pink to-salon-purple p-3 rounded-xl text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      📲 Step {step.number.replace('0', '')}: {step.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section className="py-20 bg-gradient-to-br from-blush-50 to-deep-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🪄 Bonus Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your AI booking assistant comes packed with powerful features that work behind the scenes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bonusFeatures.map((feature, index) => (
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

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ✅ Results You'll See
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of salon owners who have transformed their booking process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-100">
                <div className="flex items-center space-x-4 mb-4">
                  {result.icon}
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {result.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-salon-pink to-salon-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Bookings?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial today and watch your salon transform with AI-powered booking automation.
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