"use client";

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/+94704574568?text=Hello%20Numesh!%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.027 7.808L0 32l8.396-2.004A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.854l-.486-.29-5.026 1.198 1.237-4.896-.316-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.365-1.168-2.732-1.3-.367-.133-.634-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.216-1.983-1.188-1.06-1.99-2.367-2.223-2.767-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333 0 1.967 1.433 3.867 1.633 4.133.2.267 2.82 4.307 6.833 6.04.955.413 1.7.66 2.282.845.958.306 1.831.263 2.52.16.769-.115 2.365-.967 2.699-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
        </svg>
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25d366;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
          z-index: 9999;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: whatsapp-pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.7);
          animation: none;
        }

        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background: #1a1a1a;
          color: white;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          pointer-events: none;
          font-family: inherit;
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-right: none;
          border-left-color: #1a1a1a;
        }

        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </>
  );
}
