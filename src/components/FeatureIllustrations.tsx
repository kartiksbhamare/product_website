'use client';
import { Bot, Calendar, MessageCircle, Users, Clock, Bell, BarChart3, Palette, Globe, Building, Settings, Shield, Smartphone, HeadphonesIcon, CreditCard } from 'lucide-react';

// WhatsApp Bot Illustration
export const WhatsAppBotIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 overflow-hidden">
    {/* Phone mockup */}
    <div className="absolute right-4 top-4 w-32 h-56 bg-gray-900 rounded-2xl p-1">
      <div className="w-full h-full bg-white rounded-xl p-2">
        {/* WhatsApp header */}
        <div className="bg-green-500 rounded-t-lg p-2 mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <Bot className="h-3 w-3 text-green-500" />
            </div>
            <div className="text-white text-xs font-medium">SalonSync Bot</div>
          </div>
        </div>
        {/* Chat messages */}
        <div className="space-y-1">
          <div className="bg-gray-100 p-1 rounded text-xs">Hi! Book appointment?</div>
          <div className="bg-green-100 p-1 rounded text-xs ml-4">✂️ Haircut - ₹500</div>
          <div className="bg-green-100 p-1 rounded text-xs ml-4">💅 Manicure - ₹300</div>
        </div>
      </div>
    </div>
    
    {/* Bot character */}
    <div className="absolute left-4 top-8">
      <div className="w-24 h-24 bg-gradient-to-br from-salon-pink to-salon-purple rounded-full flex items-center justify-center shadow-lg">
        <Bot className="h-12 w-12 text-white" />
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
    </div>
    
    {/* Floating elements */}
    <div className="absolute bottom-4 left-8 text-2xl animate-bounce">💬</div>
    <div className="absolute top-16 left-32 text-lg animate-pulse">⚡</div>
  </div>
);

// Service Menu Illustration
export const ServiceMenuIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 overflow-hidden">
    {/* Menu cards */}
    <div className="grid grid-cols-2 gap-3 h-full">
      <div className="bg-white rounded-xl p-3 shadow-lg hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">✂️</div>
        <div className="text-sm font-bold">Haircut</div>
        <div className="text-xs text-gray-600">₹500 • 45 min</div>
        <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded mt-2">Available</div>
      </div>
      
      <div className="bg-white rounded-xl p-3 shadow-lg hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">💅</div>
        <div className="text-sm font-bold">Manicure</div>
        <div className="text-xs text-gray-600">₹300 • 30 min</div>
        <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded mt-2">Available</div>
      </div>
      
      <div className="bg-white rounded-xl p-3 shadow-lg hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">💇‍♀️</div>
        <div className="text-sm font-bold">Hair Color</div>
        <div className="text-xs text-gray-600">₹1200 • 90 min</div>
        <div className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded mt-2">2 slots left</div>
      </div>
      
      <div className="bg-white rounded-xl p-3 shadow-lg hover:scale-105 transition-transform">
        <div className="text-2xl mb-2">🧖‍♀️</div>
        <div className="text-sm font-bold">Facial</div>
        <div className="text-xs text-gray-600">₹800 • 60 min</div>
        <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded mt-2">Available</div>
      </div>
    </div>
    
    {/* Floating price tags */}
    <div className="absolute -top-2 right-8 bg-salon-pink text-white px-2 py-1 rounded-full text-xs animate-bounce">New!</div>
  </div>
);

// Multi-Barber Scheduling Illustration
export const MultiBarberIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 overflow-hidden">
    {/* Barber profiles */}
    <div className="grid grid-cols-3 gap-4 h-full">
      {[
        { name: 'Priya', specialty: 'Hair Color', available: true, color: 'bg-pink-500' },
        { name: 'Raj', specialty: 'Haircuts', available: false, color: 'bg-blue-500' },
        { name: 'Anita', specialty: 'Facials', available: true, color: 'bg-purple-500' }
      ].map((barber, index) => (
        <div key={index} className="bg-white rounded-xl p-3 shadow-lg text-center">
          <div className={`w-12 h-12 ${barber.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm`}>
            {barber.name[0]}
          </div>
          <div className="text-xs font-bold">{barber.name}</div>
          <div className="text-xs text-gray-600 mb-2">{barber.specialty}</div>
          <div className={`text-xs px-2 py-1 rounded ${
            barber.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}>
            {barber.available ? 'Available' : 'Busy'}
          </div>
        </div>
      ))}
    </div>
    
    {/* Selection indicator */}
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
      <div className="bg-salon-purple text-white px-3 py-1 rounded-full text-xs animate-pulse">
        Choose your stylist
      </div>
    </div>
  </div>
);

// Real-time Calendar Illustration
export const CalendarIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-6 overflow-hidden">
    {/* Calendar grid */}
    <div className="bg-white rounded-xl p-4 h-full shadow-lg">
      <div className="text-sm font-bold mb-3 text-center">Today - March 15</div>
      <div className="grid grid-cols-4 gap-2 text-xs">
        {[
          { time: '9:00', status: 'booked', name: 'Priya S.' },
          { time: '10:00', status: 'available', name: '' },
          { time: '11:00', status: 'available', name: '' },
          { time: '12:00', status: 'booked', name: 'Raj K.' },
          { time: '1:00', status: 'available', name: '' },
          { time: '2:00', status: 'booking', name: 'Booking...' },
          { time: '3:00', status: 'available', name: '' },
          { time: '4:00', status: 'booked', name: 'Anita P.' }
        ].map((slot, index) => (
          <div key={index} className={`p-2 rounded text-center ${
            slot.status === 'booked' ? 'bg-red-100 text-red-600' :
            slot.status === 'booking' ? 'bg-yellow-100 text-yellow-600 animate-pulse' :
            'bg-green-100 text-green-600'
          }`}>
            <div className="font-medium">{slot.time}</div>
            <div className="text-xs">{slot.name}</div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Live indicator */}
    <div className="absolute top-2 right-2 flex items-center space-x-1">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
      <div className="text-xs text-green-600 font-medium">Live</div>
    </div>
  </div>
);

// Instant Confirmations Illustration
export const ConfirmationIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 overflow-hidden">
    {/* Notification cards */}
    <div className="space-y-3">
      {/* Customer notification */}
      <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-500">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold">Booking Confirmed!</div>
            <div className="text-xs text-gray-600">Haircut with Priya - Mar 15, 2:00 PM</div>
          </div>
        </div>
      </div>
      
      {/* Salon notification */}
      <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-blue-500">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Bell className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-bold">New Booking Alert</div>
            <div className="text-xs text-gray-600">Rahul M. booked haircut for 2:00 PM</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Success checkmarks */}
    <div className="absolute top-4 right-4 flex space-x-2">
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
        <div className="text-white text-xs">✓</div>
      </div>
      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
        <div className="text-white text-xs">✓</div>
      </div>
    </div>
  </div>
);

// Dashboard Illustration
export const DashboardIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 overflow-hidden">
    {/* Dashboard mockup */}
    <div className="bg-white rounded-xl p-4 h-full shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-bold">Salon Dashboard</div>
        <div className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Live</div>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-blue-50 p-2 rounded text-center">
          <div className="text-lg font-bold text-blue-600">12</div>
          <div className="text-xs text-blue-600">Today</div>
        </div>
        <div className="bg-green-50 p-2 rounded text-center">
          <div className="text-lg font-bold text-green-600">₹8,400</div>
          <div className="text-xs text-green-600">Revenue</div>
        </div>
        <div className="bg-purple-50 p-2 rounded text-center">
          <div className="text-lg font-bold text-purple-600">94%</div>
          <div className="text-xs text-purple-600">Occupied</div>
        </div>
      </div>
      
      {/* Chart representation */}
      <div className="flex items-end space-x-1 h-16">
        {[60, 80, 40, 90, 70, 95, 85].map((height, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-salon-pink to-salon-purple rounded-t flex-1 animate-pulse"
            style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

// Custom Branding Illustration
export const BrandingIllustration = () => (
  <div className="relative w-full h-64 bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 overflow-hidden">
    {/* Branding elements */}
    <div className="space-y-4">
      {/* Logo customization */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-salon-pink to-salon-purple rounded-lg flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <div className="text-sm font-bold">Your Salon Logo</div>
            <div className="text-xs text-gray-600">Custom branding applied</div>
          </div>
        </div>
      </div>
      
      {/* Color palette */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="text-sm font-bold mb-2">Brand Colors</div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-salon-pink rounded-full"></div>
          <div className="w-8 h-8 bg-salon-purple rounded-full"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
    
    {/* Customization tools */}
    <div className="absolute top-4 right-4">
      <Palette className="h-8 w-8 text-orange-500 animate-bounce" />
    </div>
  </div>
);

// Security Illustration
export const SecurityIllustration = () => (
  <div className="relative w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 overflow-hidden">
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Shield className="h-16 w-16 text-blue-600" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <div className="text-white text-xs">✓</div>
        </div>
      </div>
    </div>
    <div className="absolute top-2 left-2 text-xs text-blue-600 font-medium">256-bit</div>
    <div className="absolute bottom-2 right-2 text-xs text-blue-600 font-medium">GDPR</div>
  </div>
);

// Mobile Optimized Illustration
export const MobileIllustration = () => (
  <div className="relative w-full h-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4 overflow-hidden">
    <div className="flex items-center justify-center space-x-2 h-full">
      <div className="w-8 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
        <Smartphone className="h-6 w-6 text-white" />
      </div>
      <div className="w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
        <Smartphone className="h-4 w-4 text-white rotate-90" />
      </div>
    </div>
    <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
  </div>
);

// Analytics Illustration
export const AnalyticsIllustration = () => (
  <div className="relative w-full h-32 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 overflow-hidden">
    <div className="flex items-end justify-center space-x-1 h-full">
      {[40, 70, 30, 90, 60].map((height, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-green-500 to-emerald-400 rounded-t w-3"
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
    <div className="absolute top-2 right-2 text-xs text-green-600 font-bold">+25%</div>
  </div>
);

// Support Illustration
export const SupportIllustration = () => (
  <div className="relative w-full h-32 bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-4 overflow-hidden">
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <HeadphonesIcon className="h-16 w-16 text-orange-600" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <div className="text-white text-xs">24</div>
        </div>
      </div>
    </div>
  </div>
);

// Payment Illustration
export const PaymentIllustration = () => (
  <div className="relative w-full h-32 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-4 overflow-hidden">
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <CreditCard className="h-16 w-16 text-teal-600" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <div className="text-white text-xs">✓</div>
        </div>
      </div>
    </div>
    <div className="absolute top-2 left-2 text-xs text-teal-600 font-medium">Secure</div>
  </div>
);

export const FeatureIllustrations = {
  WhatsAppBotIllustration,
  ServiceMenuIllustration,
  MultiBarberIllustration,
  CalendarIllustration,
  ConfirmationIllustration,
  DashboardIllustration,
  BrandingIllustration,
  SecurityIllustration,
  MobileIllustration,
  AnalyticsIllustration,
  SupportIllustration,
  PaymentIllustration
}; 