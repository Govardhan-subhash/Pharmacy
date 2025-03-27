import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion

const ChatBot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { user: userMessage, bot: "..." }]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages((prev) =>
        prev.map((msg, i) =>
          i === prev.length - 1 ? { ...msg, bot: data.response } : msg
        )
      );
    } catch (error) {
      setMessages((prev) =>
        prev.map((msg, i) =>
          i === prev.length - 1 ? { ...msg, bot: "Error connecting to server." } : msg
        )
      );
    }
  };

  return (
    <>
      {/* Floating Button with Animation */}
      <motion.div
        className="fixed bottom-24 right-6 z-50"
        animate={{ scale: [1, 1.2, 1] }} // Animation to increase and decrease size
        transition={{ duration: 1.5, repeat: Infinity }} // Continuous animation
      >
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          style={{ zIndex: 1000 }} // Ensure the chatbot button is on top
        >
          {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </motion.div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 bg-white shadow-lg rounded-lg w-80 h-96 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-bold text-gray-900">Chat with Us</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="mb-4">
                <p className="text-blue-600 font-medium">{msg.user}</p>
                <p className="text-gray-600">{msg.bot}</p>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;