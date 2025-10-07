import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'I have a question',
    'Tell me more about the company',
    'I need a quote',
  ];

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('service')) {
      return 'We offer Website Development, Mobile App Development, UI/UX Design, CMS & CRM, ERP Solutions, and Graphics Design.';
    } else if (msg.includes('price') || msg.includes('quote') || msg.includes('cost')) {
      return 'Contact us for a detailed quote tailored to your specific needs. Every project is unique!';
    } else if (msg.includes('company') || msg.includes('about')) {
      return 'WhiteStone Infotech specializes in providing high-quality offshore software development services with 6+ years of experience and 50+ IT professionals.';
    } else if (msg.includes('technology') || msg.includes('tech')) {
      return 'We work with React, Node.js, Python, Angular, MongoDB, Docker, AWS, and many other modern technologies.';
    } else {
      return 'Thanks for your message! Our team will get back to you shortly. You can also call us at +91 99788 09533 or email info@whitestoneinfotech.com.';
    }
  };

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    setMessages([...messages, { type: 'user', text: messageText }]);
    setInputValue('');

    setTimeout(() => {
      const botReply = getBotResponse(messageText);
      setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="absolute bottom-20 right-0 bg-white p-4 rounded-xl shadow-xl animate-bounce mb-2 max-w-xs">
            <p className="text-sm font-medium">👋 Hi there! How can we help you?</p>
          </div>
        )}
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-2xl hover:shadow-3xl hover:scale-110 transition-all relative animate-pulse"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[550px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-glow text-white p-4 rounded-t-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="font-bold">WhiteStone Assistant</h3>
              <p className="text-xs opacity-90">● Online • Powered by AI</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                {message.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-2">
                    🤖
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(reply)}
                  className="px-3 py-1 bg-white border border-primary text-primary rounded-full text-xs hover:bg-primary hover:text-white transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={() => handleSend()} className="bg-primary hover:bg-primary-glow">
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;