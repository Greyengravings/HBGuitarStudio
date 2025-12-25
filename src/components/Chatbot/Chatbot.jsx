import React, { useState, useEffect, useRef } from 'react';
import { ChatIcon, CloseIcon } from '../Icons/IconLibrary';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const presetQuestions = [
    {
      id: 1,
      question: "Do I need to bring my own instrument for the first lesson?",
      answer: "No, we provide instruments for all lessons. However, if you have your own instrument, feel free to bring it for a more personalized experience."
    },
    {
      id: 2,
      question: "What is the minimum age to start learning music?",
      answer: "We welcome students from age 6 and above. For younger children, we offer specialized programs designed to make learning fun and engaging."
    },
    {
      id: 3,
      question: "Can I switch between different course types?",
      answer: "Absolutely! We encourage students to explore different instruments and styles. Our instructors will help you transition smoothly between courses."
    },
    {
      id: 4,
      question: "Do you offer online lessons?",
      answer: "Yes, we offer both in-person and online lessons. Online lessons are conducted through high-quality video calls with shared screen capabilities."
    },
    {
      id: 5,
      question: "What are your studio hours?",
      answer: "We're open Monday - Friday: 9:00 AM - 8:00 PM, Saturday: 9:00 AM - 6:00 PM, and Sunday: 10:00 AM - 4:00 PM."
    },
    {
      id: 6,
      question: "How can I contact you?",
      answer: "You can call us at +91 97306 05718, email us at info@musicstudio.com, or visit us at Nizampura, Vadodara, Gujarat, India."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            type: 'bot',
            content: "Hi! I'm here to help you with any questions about our music studio. What would you like to know?",
            timestamp: new Date()
          }
        ]);
      }, 500);
    }
  }, [isOpen]);

  const handleQuestionClick = (question) => {
    const questionMessage = {
      id: Date.now(),
      type: 'user',
      content: question.question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, questionMessage]);
    setCurrentQuestion(question);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const answerMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: question.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, answerMessage]);
      setIsTyping(false);
      setCurrentQuestion(null);
    }, 1500);
  };

  const clearChat = () => {
    setMessages([]);
    setCurrentQuestion(null);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-wood-dark hover:bg-wood-dark rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group border-wood-light border"
            aria-label="Open Chat"
          >
            <ChatIcon className="w-7 h-7" />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96">
          <div className="bg-white rounded-2xl shadow-2xl border border-wood-light overflow-hidden">
            {/* Chat Header */}
            <div className="bg-wood-dark text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-wood-medium rounded-full flex items-center justify-center">
                  <ChatIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Music Studio Assistant</h3>
                  <p className="text-xs text-wood-light">🟢 Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={clearChat}
                  className="text-wood-light hover:text-white transition-colors p-1"
                  title="Clear Chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-wood-light hover:text-white transition-colors p-1"
                  title="Close Chat"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white to-wood-medium/5">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-wood-dark text-white rounded-br-md'
                        : 'bg-white border border-wood-dark text-gray-800 rounded-bl-md shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-wood-light' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-wood-dark rounded-3xl rounded-bl-md px-4 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-wood-medium rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-wood-medium rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-wood-medium rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 bg-wood-light/10 border-t border-wood-light/20">
              <p className="text-xs text-gray-600 mb-3 font-medium">Quick Questions:</p>
              <div className="grid grid-cols-1 gap-2">
                {presetQuestions.slice(0, 3).map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleQuestionClick(preset)}
                    disabled={isTyping}
                    className="text-left text-xs p-2 bg-white hover:bg-wood-light rounded-lg border border-wood-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {preset.question}
                  </button>
                ))}
              </div>
              {presetQuestions.length > 3 && (
                <div className="mt-3 pt-3 border-t border-wood-light">
                  <div className="grid grid-cols-1 gap-2">
                    {presetQuestions.slice(3).map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handleQuestionClick(preset)}
                        disabled={isTyping}
                        className="text-left text-xs p-2 bg-white hover:bg-wood-light rounded-lg border border-wood-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {preset.question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
