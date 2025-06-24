'use client';
import { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Phone, MessageCircle, Clock, CheckCheck, MoreVertical, Paperclip, Mic } from 'lucide-react';

interface Message {
  type: 'received' | 'sent';
  message: string;
  time: string;
  delay: number;
  typingTime?: number;
}

export default function WhatsAppDemo() {
  const [activeDemo, setActiveDemo] = useState<'chat' | 'qr'>('chat');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [showMessages, setShowMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const messages: Message[] = [
    {
      type: 'received',
      message: 'Hi! I\'d like to book an appointment for a haircut.',
      time: '10:30 AM',
      delay: 1000,
    },
    {
      type: 'sent',
      message: 'Hello! I\'d be happy to help you book an appointment. 📅 What day works best for you?',
      time: '10:30 AM',
      delay: 2000,
      typingTime: 2500,
    },
    {
      type: 'received',
      message: 'Tomorrow afternoon would be great!',
      time: '10:31 AM',
      delay: 2500,
    },
    {
      type: 'sent',
      message: 'Perfect! I have these slots available tomorrow afternoon:\n\n🕐 2:00 PM - Neha (Senior Stylist)\n🕓 3:30 PM - Arjun (Hair Specialist)\n🕔 4:00 PM - Kavya (Senior Stylist)\n\nWhich time works for you?',
      time: '10:31 AM',
      delay: 2000,
      typingTime: 3500,
    },
    {
      type: 'received',
      message: '3:30 PM with Arjun sounds perfect!',
      time: '10:32 AM',
      delay: 2000,
    },
    {
      type: 'sent',
      message: '✅ Great choice! I\'ve booked you for:\n\n📅 Tomorrow, Dec 15th\n🕓 3:30 PM\n💇‍♂️ Haircut with Arjun\n💰 ₹450\n\nPlease provide your name and phone number to confirm.',
      time: '10:32 AM',
      delay: 2500,
      typingTime: 4000,
    },
    {
      type: 'received',
      message: 'Perfect! My name is Sarah and my number is +91 98765 43210',
      time: '10:33 AM',
      delay: 3000,
    },
    {
      type: 'sent',
      message: '🎉 Booking confirmed, Sarah!\n\nYou\'ll receive a reminder 1 hour before your appointment. Looking forward to seeing you at Aura Beauty Salon!\n\nIs there anything else I can help you with? 😊',
      time: '10:33 AM',
      delay: 2000,
      typingTime: 3000,
    }
  ];

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  };

  const typeMessage = (message: string, callback: () => void) => {
    let index = 0;
    setCurrentTypingMessage('');
    
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setCurrentTypingMessage(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        callback();
      }
    }, 50); // Typing speed
  };

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentMessageIndex(-1);
    setShowMessages([]);
    setIsTyping(false);
    playNextMessage(0);
  };

  const playNextMessage = (index: number) => {
    if (index >= messages.length) {
      // Demo finished, restart after a pause
      timeoutRef.current = setTimeout(() => {
        startDemo();
      }, 5000);
      return;
    }

    const message = messages[index];
    
    timeoutRef.current = setTimeout(() => {
      if (message.type === 'sent' && message.typingTime) {
        // Show typing indicator for bot messages
        setIsTyping(true);
        setTypingText('SalonSync AI is typing...');
        
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
          // Type the message character by character
          typeMessage(message.message, () => {
            setShowMessages(prev => [...prev, message]);
            setCurrentMessageIndex(index);
            setTimeout(scrollToBottom, 100);
            playNextMessage(index + 1);
          });
        }, message.typingTime);
      } else {
        // User messages appear instantly
        setShowMessages(prev => [...prev, message]);
        setCurrentMessageIndex(index);
        setTimeout(scrollToBottom, 100);
        playNextMessage(index + 1);
      }
    }, message.delay);
  };

  const resetDemo = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPlaying(false);
    setCurrentMessageIndex(-1);
    setShowMessages([]);
    setIsTyping(false);
    setCurrentTypingMessage('');
  };

  useEffect(() => {
    if (activeDemo === 'chat') {
      startDemo();
    } else {
      resetDemo();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeDemo]);

  useEffect(() => {
    scrollToBottom();
  }, [showMessages, isTyping]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Phone Header */}
      <div className="bg-gray-50 p-4 flex justify-center space-x-4 border-b border-gray-200">
        <button
          onClick={() => setActiveDemo('chat')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeDemo === 'chat'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          <MessageCircle className="h-4 w-4 inline mr-2" />
          Live Chat Demo
        </button>
        <button
          onClick={() => setActiveDemo('qr')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeDemo === 'qr'
              ? 'bg-green-500 text-white shadow-lg'
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
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                <span className="text-green-600 font-bold text-lg">🏪</span>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Aura Beauty Salon</h3>
                <p className="text-xs opacity-90 flex items-center">
                  <span className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></span>
                  SalonSync AI • Online
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Phone className="h-6 w-6 opacity-80" />
              <MoreVertical className="h-6 w-6 opacity-80" />
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={chatContainerRef}
            className="h-96 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-gray-100 scroll-smooth"
          >
            {showMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                    msg.type === 'sent'
                      ? 'bg-green-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {msg.type === 'sent' && currentTypingMessage && index === showMessages.length - 1
                      ? currentTypingMessage
                      : msg.message}
                  </p>
                  <div className={`flex items-center justify-end mt-2 space-x-1 ${
                    msg.type === 'sent' ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{msg.time}</span>
                    {msg.type === 'sent' && <CheckCheck className="h-3 w-3 text-blue-200" />}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-end animate-fadeInUp">
                <div className="max-w-xs px-4 py-3 rounded-2xl bg-gray-200 text-gray-600 rounded-br-md">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs">{typingText}</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  {isPlaying ? 'Demo is running...' : 'Type a message...'}
                </p>
                <div className="flex space-x-2">
                  <Paperclip className="h-5 w-5 text-gray-400" />
                  <Mic className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button 
                onClick={isPlaying ? resetDemo : startDemo}
                className={`p-3 rounded-full transition-all ${
                  isPlaying 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isPlaying ? (
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                ) : (
                  <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
                )}
              </button>
            </div>
            <div className="mt-2 text-center">
              <button
                onClick={isPlaying ? resetDemo : startDemo}
                className="text-xs text-green-600 hover:text-green-700 font-medium"
              >
                {isPlaying ? '⏹️ Stop Demo' : '▶️ Play Demo'}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Connect via WhatsApp</h3>
            <p className="text-sm text-gray-600">
              Scan this QR code to start a conversation with our demo bot
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <QRCodeSVG
                value="https://wa.me/918308520943?text=Hi!%20I'd%20like%20to%20try%20the%20SalonSync%20demo"
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
                includeMargin={false}
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-gray-500">Or click to open WhatsApp directly:</p>
            <a
              href="https://wa.me/918308520943?text=Hi!%20I'd%20like%20to%20try%20the%20SalonSync%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors shadow-lg"
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