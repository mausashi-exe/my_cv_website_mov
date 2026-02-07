import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { motion, AnimatePresence } from "framer-motion";

// --- CONFIGURACIÓN DE CONEXIÓN ---
const socket = io.connect("https://nomos-chat-server.onrender.com");

const CommLink = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const bottomRef = useRef(null);

  // --- PROTECCIÓN 1: SIEMPRE TENER UN ID ---
  const [userId] = useState(
    () => `ENG-${Math.floor(100 + Math.random() * 900)}`,
  );

  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        user: userId, // Envia el usuario explícitamente
        text: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      try {
        await socket.emit("send_message", messageData);
        setCurrentMessage("");
      } catch (err) {
        console.error("Error sending message:", err);
      }
    }
  };

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    const handler = (data) => {
      // --- PROTECCIÓN 2: SANITIZACIÓN DE DATOS ---
      // Si el mensaje llega vacío o roto, lo ignora para no romper React
      if (!data) return;

      // Crea un objeto seguro, si 'user' falta, ponemos 'UNKNOWN'
      const safeData = {
        user: data.user || "UNKNOWN",
        text: data.text || "...",
        time: data.time || "NOW",
      };

      setMessageList((list) => [...list, safeData]);
    };

    socket.on("receive_message", handler);

    return () => {
      socket.off("receive_message", handler);
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <div className="w-full mt-4 flex flex-col font-mono text-[10px] bg-black border border-[#ff4425]/30 h-[300px] shadow-[0_0_15px_rgba(255,68,37,0.05)]">
      <div className="bg-[#ff4425]/10 p-2 border-b border-[#ff4425]/30 flex justify-between items-center text-[#ff4425]">
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-[#ff4425] animate-pulse" : "bg-gray-600"}`}
          ></span>
          <span className="font-bold tracking-widest uppercase">
            Nomos_Link
          </span>
        </div>
        <span className="opacity-50">{isConnected ? "ONLINE" : "OFFLINE"}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide bg-[#050505]">
        <AnimatePresence>
          {messageList.map((msg, index) => {
            // --- PROTECCIÓN 3: RENDERIZADO SEGURO ---
            // Aquí ya no usa startsWith, usamos comparación directa
            const isSystem = msg.user === "SYS_ADMIN";
            const isMe = msg.user === userId;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex flex-col items-start ${isSystem ? "text-yellow-500" : "text-gray-300"}`}
              >
                <div className="flex gap-2 opacity-50 text-[9px] mb-0.5 font-bold">
                  <span className={isMe ? "text-[#ff4425]" : "text-gray-500"}>
                    {msg.user}
                  </span>
                  <span>[{msg.time}]</span>
                </div>
                <div
                  className={`
                            px-2 py-1 border-l-2 text-[10px] leading-relaxed break-all
                            ${isSystem ? "border-yellow-500 bg-yellow-500/5" : "border-[#ff4425] bg-[#ff4425]/5 text-white"}
                        `}
                >
                  {msg.text}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      <div className="p-2 border-t border-[#ff4425]/30 bg-[#0a0a0a] flex gap-2 items-center">
        <span className="text-[#ff4425] pl-1">&gt;</span>
        <input
          type="text"
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => event.key === "Enter" && sendMessage()}
          placeholder="TRANSMIT_DATA..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-gray-700 font-code uppercase"
        />
        <button
          onClick={sendMessage}
          className="text-[#ff4425] hover:bg-[#ff4425] hover:text-black px-2 py-1 transition-colors uppercase font-bold text-[9px] border border-[#ff4425]/30"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default CommLink;
