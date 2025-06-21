'use client';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Phone, MessageCircle, Clock, CheckCheck } from 'lucide-react';

export default function WhatsAppDemo() {
  const [activeDemo, setActiveDemo] = useState<'chat' | 'qr'>('chat');

  const messages = [
    {
      type: 'received',
      message: 'Hi! I\'d like to book an appointment for a haircut.',
      time: '10:30 AM',
    },
    {
      type: 'sent',
      message: 'Hello! I\'d be happy to help you book an appointment. 📅 What day works best for you?',
      time: '10:30 AM',
    },
    {
      type: 'received',
      message: 'Tomorrow afternoon would be great!',
      time: '10:31 AM',
    },
    {
      type: 'sent',
      message: 'Perfect! I have these slots available tomorrow afternoon:\n\n🕐 2:00 PM - Sarah (Senior Stylist)\n🕓 3:30 PM - Mike (Hair Specialist)\n🕔 4:00 PM - Sarah (Senior Stylist)\n\nWhich time works for you?',
      time: '10:31 AM',
    },
    {
      type: 'received',
      message: '3:30 PM with Mike sounds perfect!',
      time: '10:32 AM',
    },
    {
      type: 'sent',
      message: '✅ Great choice! I\'ve booked you for:\n\n📅 Tomorrow, Dec 15th\n🕓 3:30 PM\n💇‍♂️ Haircut with Mike\n💰 $45\n\nPlease provide your name and phone number to confirm.',
      time: '10:32 AM',
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Phone Header */}
      <div className="bg-gray-100 p-4 flex justify-center space-x-4">
        <button
          onClick={() => setActiveDemo('chat')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeDemo === 'chat'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          <MessageCircle className="h-4 w-4 inline mr-2" />
          Chat Demo
        </button>
        <button
          onClick={() => setActiveDemo('qr')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeDemo === 'qr'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          <Phone className="h-4 w-4 inline mr-2" />
          QR Code
        </button>
      </div>

      {activeDemo === 'chat' ? (
        <>
          {/* WhatsApp Header */}
          <div className="bg-green-500 text-white p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 font-bold text-lg">🏪</span>
            </div>
            <div>
              <h3 className="font-semibold">Glamour Salon</h3>
              <p className="text-xs opacity-90">BookBot AI • Online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.type === 'sent'
                      ? 'bg-green-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.message}</p>
                  <div className={`flex items-center justify-end mt-1 space-x-1 ${
                    msg.type === 'sent' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{msg.time}</span>
                    {msg.type === 'sent' && <CheckCheck className="h-3 w-3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                <p className="text-gray-500 text-sm">AI is typing...</p>
              </div>
              <button className="bg-green-500 text-white p-2 rounded-full">
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Connect via WhatsApp</h3>
            <p className="text-sm text-gray-600">
              Scan this QR code to start a conversation with our demo bot
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <QRCodeSVG
                value="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20try%20the%20BookBot%20demo"
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
                includeMargin={false}
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-gray-500">Or click to open WhatsApp directly:</p>
            <a
              href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20try%20the%20BookBot%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Open WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
} 