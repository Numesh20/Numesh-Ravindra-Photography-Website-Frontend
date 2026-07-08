'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileActionBar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      href: '/gallery',
      label: 'Gallery',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )
    },
    {
      href: 'https://wa.me/94704574568',
      label: 'WhatsApp',
      external: true,
      isWhatsApp: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      href: '/about',
      label: 'About',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
      )
    },
    {
      href: '/contact',
      label: 'Book',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z" />
        </svg>
      )
    },
  ];

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav className="mob-bar" aria-label="Mobile navigation">
        {navItems.map((item) => {
          const active = !item.external && isActive(item.href);
          if (item.external) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mob-item mob-whatsapp`}
                aria-label={item.label}
              >
                <span className="mob-icon">{item.icon}</span>
              </a>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mob-item ${active ? 'mob-active' : ''}`}
              aria-label={item.label}
            >
              <span className="mob-icon">{item.icon}</span>
              <span className="mob-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <style jsx>{`
        .mob-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 900;
          background: rgba(10, 10, 13, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 4px 12px;
          padding-bottom: max(12px, env(safe-area-inset-bottom));
          flex-direction: row;
          justify-content: space-around;
          align-items: flex-end;
        }

        .mob-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          border-radius: 14px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.45);
          transition: all 0.2s ease;
          min-width: 52px;
          cursor: pointer;
          border: none;
          background: none;
          flex: 1;
        }

        .mob-item:active {
          transform: scale(0.92);
          background: rgba(255, 255, 255, 0.05);
        }

        .mob-active {
          color: var(--accent) !important;
        }

        .mob-whatsapp {
          color: #25D366 !important;
          flex: 1;
        }

        .mob-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          transition: all 0.2s ease;
        }

        .mob-active .mob-icon {
          background: rgba(212, 175, 55, 0.12);
        }

        .mob-whatsapp .mob-icon {
          background: rgba(37, 211, 102, 0.1);
        }

        .mob-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .mob-bar {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
