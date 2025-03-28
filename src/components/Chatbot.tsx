import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import "./Chatbot.css"; // Import the CSS file

const ChatBot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run

  useEffect(() => {
    // Trigger the fly-fall animation on page load
    setHasAnimated(true);
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Button with Ease-In-Out Animation */}
      <div
        className={`fixed bottom-24 left-6 z-50 chatbot-icon ${
          hasAnimated ? "fly-fall" : ""
        }`}
      >
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          style={{ zIndex: 1000 }} // Ensure the chatbot button is on top
        >
          {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 left-6 bg-white shadow-lg rounded-lg w-80 h-96 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-bold text-gray-900">Chat with Us</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages will go here */}
          </div>

          {/* Input Field */}
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;