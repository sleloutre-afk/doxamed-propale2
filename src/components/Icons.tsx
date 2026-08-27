type IconProps = { className?: string }

const paths: Record<string, React.ReactNode> = {
  pulse: <path d="M3 12h4l2-7 4 14 2-7h6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  brain: (
    <>
      <path d="M9 4.5a3 3 0 0 0-3 3v.3A3 3 0 0 0 4.5 10.5v1A3 3 0 0 0 6 14.2v.3a3 3 0 0 0 3 3h.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 4.5a3 3 0 0 1 3 3v.3a3 3 0 0 1 1.5 2.7v1a3 3 0 0 1-1.5 2.7v.3a3 3 0 0 1-3 3h-.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.5 4.5v14M14.5 4.5v14" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" strokeWidth="0" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.4" strokeWidth="1.6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="10" height="18" rx="1" strokeWidth="1.6" />
      <path d="M14 9h6v12h-6" strokeWidth="1.6" />
      <path d="M7 7h1M7 11h1M7 15h1M11 7h1M11 11h1M11 15h1M17 12h1M17 16h1" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  van: (
    <>
      <path d="M3 16V8a1 1 0 0 1 1-1h9v9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 10h4l3 3v3h-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="17" r="1.8" strokeWidth="1.6" />
      <circle cx="17" cy="17" r="1.8" strokeWidth="1.6" />
    </>
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="13" rx="4" strokeWidth="1.6" />
      <path d="M5 11h14M9 21l-2-3M17 21l-2 3" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="14" r="0.6" fill="currentColor" strokeWidth="0" />
      <circle cx="15" cy="14" r="0.6" fill="currentColor" strokeWidth="0" />
    </>
  ),
  cabin: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="1.5" strokeWidth="1.6" />
      <path d="M9 8h6M9 12h6" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="16.5" r="1.2" strokeWidth="1.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" strokeWidth="1.6" />
      <path d="M3.5 10h17M8 3v4M16 3v4" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  nurse: (
    <>
      <circle cx="12" cy="7" r="3.2" strokeWidth="1.6" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 11.5v5M9.5 14h5" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  doctor: (
    <>
      <circle cx="12" cy="6.5" r="3" strokeWidth="1.6" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 13c0 2.2 1.3 3.5 3 3.5s3-1.3 3-3.5" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="12" cy="17.3" r="1.1" fill="currentColor" strokeWidth="0" />
    </>
  ),
  report: (
    <>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h3" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  phone: (
    <path d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2C11.3 20 4 12.7 4 5a2 2 0 0 1 2-2Z" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  shield: <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" strokeWidth="1.6" strokeLinejoin="round" />,
  syringe: (
    <path d="M20 4l-3 3M11.5 6.5l6 6-8 8L4 15l8-8ZM6 17l-2 3M8 15l1.5 1.5M12 11l1.5 1.5M14 3l3 3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" strokeWidth="1.6" strokeLinejoin="round" />,
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" strokeWidth="1.6" />
    </>
  ),
  ear: (
    <path d="M14 3a6 6 0 0 0-6 6c0 2 .8 2.6 1.6 3.3.8.7 1.4 1.2 1.4 2.4 0 1-.6 1.3-1.4 1.3A2 2 0 0 1 7.6 14M14 3a6 6 0 0 1 6 6c0 4.5-2 6-2 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  tooth: (
    <path d="M12 4c-1.6 0-2.8.9-4 .9-1.8 0-3 1.3-3 3.3 0 1.8.7 2.3.9 4.1.3 2.3.9 6.3 2.3 8.1.7.9 1.4.4 1.5-.5l.7-4c.2-.9 1.4-.9 1.6 0l.7 4c.1.9.8 1.4 1.5.5 1.4-1.8 2-5.8 2.3-8.1.2-1.8.9-2.3.9-4.1 0-2-1.2-3.3-3-3.3-1.2 0-2.4-.9-4-.9Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  lungs: (
    <path d="M12 3v7M12 10c-.7-2.7-2.6-3.7-4.5-3.7-1.8 0-3 1.3-3 3.7 0 3.6.9 7.3 2.7 8.2 1.4.7 2.8-.5 2.8-2.1V11M12 10c.7-2.7 2.6-3.7 4.5-3.7 1.8 0 3 1.3 3 3.7 0 3.6-.9 7.3-2.7 8.2-1.4.7-2.8-.5-2.8-2.1V11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  spine: (
    <path d="M12 2v2.5M9.5 7h5l-1 2.3h-3L9.5 11h5l-1 2.3h-3L9.5 15h5l-1 2.3h-3L9.5 19h5M12 21.5V19" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  skin: (
    <>
      <circle cx="10" cy="10" r="6.5" strokeWidth="1.6" />
      <path d="M14.8 14.8L20.5 20.5" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="8.5" r="0.9" fill="currentColor" strokeWidth="0" />
      <circle cx="11.5" cy="10.5" r="0.7" fill="currentColor" strokeWidth="0" />
      <circle cx="9" cy="12.5" r="0.6" fill="currentColor" strokeWidth="0" />
    </>
  ),
  chat: (
    <path d="M4 5h16v11H9l-4 4V5Z" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" strokeWidth="1.6" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="17.5" cy="9" r="2.4" strokeWidth="1.6" />
      <path d="M21 20v-1a4.2 4.2 0 0 0-3-4" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  spark: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" strokeWidth="1.6" strokeLinecap="round" />,
  file: (
    <>
      <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 3v4h4" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  download: <path d="M12 3v13m0 0l-4.5-4.5M12 16l4.5-4.5M4 20h16" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  check: <path d="M4 12.5L9.5 18L20 6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
}

export default function Icon({ name, className = 'w-5 h-5' }: { name: keyof typeof paths; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
