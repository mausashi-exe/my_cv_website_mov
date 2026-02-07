import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { motion } from "framer-motion";

// Conectar al backend (Asegúrate de que el servidor esté corriendo)
const socket = io.connect("http://localhost:3001");

const CommLink = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const bottomRef = useRef(null);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const handler = (data) => {
      setMessageList((list) => [...list, data]);
    };
    socket.on("receive_message", handler);
    // Limpieza para evitar duplicados
    return () => socket.off("receive_message", handler);
  }, []);

  // Auto-scroll al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <div className="w-full max-w-md mx-auto h-[500px] bg-black border border-[#ff4425]/50 flex flex-col font-mono text-xs shadow-[0_0_30px_rgba(255,68,37,0.1)]">
      {/* HEADER */}
      <div className="bg-[#ff4425]/10 p-2 border-b border-[#ff4425]/30 flex justify-between items-center text-[#ff4425]">
        <span className="animate-pulse">● LIVE_FEED</span>
        <span>NOMOS_SECURE_CHANNEL</span>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
        {messageList.map((msg, index) => {
          const isSystem = msg.user.startsWith("SYS");
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex flex-col ${isSystem ? "items-center text-yellow-500" : "items-start text-gray-300"}`}
            >
              <div className="flex gap-2 opacity-50 text-[10px] mb-0.5">
                <span>[{msg.timestamp}]</span>
                <span className="text-[#ff4425]">{msg.user}:</span>
              </div>
              <div className="bg-[#1a1a1a] px-3 py-1.5 border-l-2 border-[#ff4425]">
                {msg.text}
              </div>
            </motion.div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-2 border-t border-[#ff4425]/30 bg-black flex gap-2">
        <span className="text-[#ff4425] py-2">&gt;</span>
        <input
          type="text"
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && sendMessage()}
          placeholder="TRANSMIT_DATA..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-gray-700"
        />
        <button
          onClick={sendMessage}
          className="text-[#ff4425] hover:text-white transition-colors"
        >
          [SEND]
        </button>
      </div>
    </div>
  );
};

export default CommLink;
