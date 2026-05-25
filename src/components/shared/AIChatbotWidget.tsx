import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const quickReplies = [
  "What services do you offer?",
  "Tell me about your AI solutions",
  "How can I contact your team?",
  "What is your pricing model?",
];

const botResponses: Record<string, string> = {
  "What services do you offer?":
    "We offer comprehensive technology services including Cybersecurity, AI Solutions, Networking, Software Development, Cloud Computing, Smart Systems, IT Consultancy, and Web Development. Each service is tailored to meet enterprise-grade standards.",
  "Tell me about your AI solutions":
    "Our AI solutions leverage cutting-edge machine learning and deep learning frameworks. We specialize in predictive analytics, natural language processing, computer vision, and intelligent automation systems that drive business transformation.",
  "How can I contact your team?":
    "You can reach our team through the Contact page, email us at info@quantumhydra.tech, call +1 (555) 123-4567, or click the WhatsApp button for instant messaging. Our team responds within 24 hours.",
  "What is your pricing model?":
    "We offer flexible pricing models including project-based quotes, retainer agreements, and hourly consulting rates. Contact us for a personalized quote based on your specific requirements and scope.",
  default:
    "Thank you for your message. Our team will review your inquiry and get back to you shortly. For immediate assistance, please contact us directly or browse our services page for more information.",
};

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm the Quantum Hydra AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = botResponses[text] || botResponses.default;
      const botMsg: Message = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-qht-primary text-white shadow-glow-lg flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-140px)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-qht-primary text-white flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Quantum AI Assistant</p>
                <p className="text-[10px] text-white/70">Online • Ready to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === "bot"
                        ? "bg-qht-primary/10 text-qht-primary"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <Bot className="w-3.5 h-3.5" />
                    ) : (
                      <User className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.sender === "bot"
                        ? "bg-muted text-foreground rounded-tl-sm"
                        : "bg-qht-primary text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-qht-primary/10 flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-qht-primary" />
                  </div>
                  <div className="bg-muted px-3 py-2 rounded-xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0.1s]" />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 rounded-full text-xs bg-qht-primary/10 text-qht-primary hover:bg-qht-primary/20 transition-colors border border-qht-primary/20"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-border shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:border-qht-primary/50"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="w-9 h-9 rounded-lg bg-qht-primary text-white flex items-center justify-center hover:bg-qht-accent transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
