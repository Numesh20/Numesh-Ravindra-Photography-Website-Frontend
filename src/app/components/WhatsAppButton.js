"use client";

import { useState, useEffect, useRef } from "react";

const WA_NUMBER = "94704574568";
const QUICK_REPLIES = [
  "What are your wedding photography packages?",
  "Are you available on my date?",
  "How much does a portrait session cost?",
  "I'd like to book a session",
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);
  const inputRef = useRef(null);

  // Show greeting bubble after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowGreeting(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Hide greeting when chat opens
  useEffect(() => {
    if (open) setShowGreeting(false);
  }, [open]);

  // Focus input when chat opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = (text) => {
    const msg = text || message;
    if (!msg.trim()) return;
    const encoded = encodeURIComponent(msg.trim());
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Greeting bubble */}
      {showGreeting && !open && (
        <div className="wc-greeting" onClick={() => setOpen(true)}>
          <p>Hi! Need help choosing a package?</p>
          <button className="wc-greeting-close" onClick={(e) => { e.stopPropagation(); setShowGreeting(false); }}>×</button>
        </div>
      )}

      {/* Chat popup */}
      {open && (
        <div className="wc-popup">
          {/* Header */}
          <div className="wc-header">
            <div className="wc-header-left">
              <div className="wc-avatar">
                <span>N</span>
                <span className="wc-online-dot" />
              </div>
              <div className="wc-header-info">
                <div className="wc-name">Numesh Ravindra</div>
                <div className="wc-status">
                  <span className="wc-status-dot" />
                  Typically replies within minutes
                </div>
              </div>
            </div>
            <button className="wc-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="wc-body">
            {/* Intro message bubble */}
            <div className="wc-message-wrap">
              <div className="wc-bubble wc-bubble-in">
                <p>Hi! I'm Numesh, a professional photographer based in Mawanella, Sri Lanka.</p>
                <p>How can I help you today?</p>
                <span className="wc-time">Now</span>
              </div>
            </div>

            {/* Quick reply buttons */}
            <div className="wc-quick-wrap">
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr}
                  className="wc-quick-btn"
                  onClick={() => sendMessage(qr)}
                >
                  {qr}
                </button>
              ))}
            </div>
          </div>

          {/* Footer / Input */}
          <div className="wc-footer">
            <div className="wc-input-row">
              <textarea
                ref={inputRef}
                className="wc-input"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKey}
                rows={1}
              />
              <button
                className="wc-send-btn"
                onClick={() => sendMessage()}
                disabled={!message.trim()}
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
            <div className="wc-powered">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#25d366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.128.554 4.122 1.527 5.854L.05 23.5l5.82-1.527A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.887 9.887 0 0 1-5.03-1.374l-.362-.215-3.737.98.998-3.645-.237-.376A9.891 9.891 0 0 1 2.106 12C2.106 6.537 6.537 2.106 12 2.106S21.894 6.537 21.894 12 17.463 21.894 12 21.894z"/>
              </svg>
              Powered by WhatsApp
            </div>
          </div>
        </div>
      )}

      {/* Main FAB button */}
      <button
        className={`wc-fab ${open ? "wc-fab-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.027 7.808L0 32l8.396-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-5.026 1.198 1.237-4.896-.316-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.365-1.168-2.732-1.3-.367-.133-.634-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.216-1.983-1.188-1.06-1.99-2.367-2.223-2.767-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333 0 1.967 1.433 3.867 1.633 4.133.2.267 2.82 4.307 6.833 6.04.955.413 1.7.66 2.282.845.958.306 1.831.263 2.52.16.769-.115 2.365-.967 2.699-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
          </svg>
        )}
        {!open && <span className="wc-fab-pulse" />}
      </button>

      <style jsx>{`
        /* FAB */
        .wc-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25d366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37,211,102,0.5);
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .wc-fab:hover { transform: scale(1.1); }
        .wc-fab-open { background: #1a1a2e; box-shadow: 0 6px 24px rgba(0,0,0,0.4); }
        .wc-fab-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.5);
          animation: wc-pulse 2s ease-out infinite;
        }
        @keyframes wc-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        /* Greeting */
        .wc-greeting {
          position: fixed;
          bottom: 100px;
          right: 28px;
          background: #fff;
          color: #111;
          padding: 12px 36px 12px 16px;
          border-radius: 14px 14px 4px 14px;
          font-size: 0.85rem;
          font-weight: 500;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          z-index: 9998;
          cursor: pointer;
          max-width: 220px;
          animation: wc-slide-in 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .wc-greeting p { margin: 0; line-height: 1.4; }
        .wc-greeting-close {
          position: absolute;
          top: 6px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.1rem;
          color: #888;
          cursor: pointer;
          line-height: 1;
        }
        @keyframes wc-slide-in {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Popup */
        .wc-popup {
          position: fixed;
          bottom: 100px;
          right: 28px;
          width: 340px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          z-index: 9998;
          display: flex;
          flex-direction: column;
          animation: wc-popup-in 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes wc-popup-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Header */
        .wc-header {
          background: #075e54;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .wc-header-left { display: flex; align-items: center; gap: 12px; }
        .wc-avatar {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d4af37, #f0d060);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: #000;
          flex-shrink: 0;
        }
        .wc-online-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #25d366;
          border: 2px solid #075e54;
        }
        .wc-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
        }
        .wc-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.7);
          margin-top: 2px;
        }
        .wc-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #25d366;
        }
        .wc-close-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .wc-close-btn:hover { background: rgba(255,255,255,0.15); }

        /* Body */
        .wc-body {
          background: #0b1114;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          padding: 18px 14px 12px;
          min-height: 180px;
        }
        .wc-message-wrap { margin-bottom: 14px; }
        .wc-bubble {
          display: inline-block;
          max-width: 85%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.83rem;
          line-height: 1.55;
          position: relative;
        }
        .wc-bubble p { margin: 0 0 4px; }
        .wc-bubble p:last-of-type { margin-bottom: 6px; }
        .wc-bubble-in {
          background: #1e2e2a;
          color: rgba(255,255,255,0.85);
          border-bottom-left-radius: 4px;
        }
        .wc-time {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.3);
          display: block;
          text-align: right;
        }

        /* Quick replies */
        .wc-quick-wrap {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .wc-quick-btn {
          background: rgba(37,211,102,0.08);
          border: 1px solid rgba(37,211,102,0.25);
          color: #25d366;
          padding: 9px 14px;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          letter-spacing: 0.2px;
        }
        .wc-quick-btn:hover {
          background: rgba(37,211,102,0.15);
          border-color: #25d366;
          transform: translateX(3px);
        }

        /* Footer */
        .wc-footer {
          background: #1a1a1a;
          padding: 12px 14px 10px;
        }
        .wc-input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          background: #2a2a2a;
          border-radius: 24px;
          padding: 8px 8px 8px 14px;
          margin-bottom: 8px;
        }
        .wc-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: rgba(255,255,255,0.85);
          font-size: 0.85rem;
          resize: none;
          font-family: inherit;
          line-height: 1.5;
          max-height: 80px;
          overflow-y: auto;
        }
        .wc-input::placeholder { color: rgba(255,255,255,0.3); }
        .wc-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #25d366;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
          color: white;
        }
        .wc-send-btn:disabled {
          background: #333;
          color: rgba(255,255,255,0.3);
          cursor: not-allowed;
        }
        .wc-send-btn:not(:disabled):hover { background: #20ba5a; transform: scale(1.08); }
        .wc-powered {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.25);
        }

        @media (max-width: 480px) {
          .wc-popup {
            right: 12px;
            left: 12px;
            width: auto;
            bottom: 90px;
          }
          .wc-fab { bottom: 20px; right: 16px; }
          .wc-greeting { right: 16px; bottom: 90px; }
        }
      `}</style>
    </>
  );
}
