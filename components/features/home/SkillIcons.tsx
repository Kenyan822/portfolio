import React from "react";

export const SkillIcon = ({ name, className = "" }: { name: string; className?: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    // ... existing icons ...
    "React": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <circle cx="12" cy="12" r="2" />
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.63.49-3.15 1.34-4.43l9.32 12.02c-.84.27-1.74.41-2.66.41zm5.63-2.12L9.24 7.24c.85-.5 1.83-.79 2.87-.79 2.92 0 5.4 1.58 6.64 3.93.38.72.6 1.53.6 2.39 0 2.01-.93 3.82-2.38 5.11h.03z" />
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 5v-8h-2v8h2zm4-6h-2v2h2v4h-3v-2h1v1h1v-2h-1v-1h2v-2zM8 9H6v2h2v6H6v-6H5V9h3z" />
        <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 15h2.5M15.2 11h-2.5v4h2.5c.8 0 1.3-.5 1.3-1.2 0-.6-.4-1.1-1-1.2.5-.1.9-.5.9-1.1 0-.6-.5-1-1.3-1h-2.4v4.5" fill="none" stroke="currentColor" strokeWidth="0" />
        <path d="M10.5 15h1.5v-3h-1.5m4.5 3h1.5l-1-2.5 1-2.5h-1.5l-.5 1.5-.5-1.5h-1.5l1 2.5-1 2.5" stroke="none" />
        <text x="7" y="16" fontSize="10" fontWeight="bold" fill="currentColor">TS</text>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2ZM11 18.5V13.5H13V18.5H11ZM17 16C17 16.55 16.55 17 16 17H14V12H17V16ZM7 16V12H10V17H8C7.45 17 7 16.55 7 16Z" fillRule="evenodd" />
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
         <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-2.5l.03-.28.06-.25.1-.22.12-.18.15-.14.17-.11.2-.08.21-.05.23-.03.22-.03h3.38l.48.05.45.13.4.21.34.27.27.31.19.32.12.3.06.26zM15.1 3.88h1.66v1.65H15.1V3.88zM8.9 20.12H7.25v-1.65H8.9v1.65z" />
      </svg>
    ),
    "SQL": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M21.362 9.354H12L13.732 2H4.445a1.09 1.09 0 0 0-1.077 1.307l2.138 9.354h-2.18l-1.68 9.988L12.001 22l-1.732-7.354h8.361a1.09 1.09 0 0 0 1.077-1.307l-2.138-9.354z" />
      </svg>
    ),
    "Git": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="none" />
        <circle cx="12" cy="12" r="2" />
        <path d="M20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path d="M12 6v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19.98 12.3c.02-.13.02-.27.02-.4 0-2.21-1.79-4-4-4-1.63 0-3.03.96-3.66 2.37-.36-.18-.76-.29-1.19-.29-.69 0-1.32.28-1.79.73C8.6 10.23 7.85 10 7.05 10c-1.33 0-2.52.7-3.23 1.76-.32-.1-.65-.16-1.01-.16-1.55 0-2.81 1.26-2.81 2.81 0 1.51 1.2 2.75 2.69 2.8h17.3c1.1 0 2.01-.91 2.01-2.01 0-1.1-.91-2.01-2.01-2.01z" />
      </svg>
    ),
    "VS Code": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 2l-12.7 2.7L2 12l7.3 7.3L22 22l2-2V4l-2-2zM4.7 12l4.6-4.6 4.6 4.6-4.6 4.6L4.7 12zm13.6 5.3l-2.9-2.9 2.9-2.9 2.9 2.9-2.9 2.9z" />
      </svg>
    ),
    "Figma": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C9.79 2 8 3.79 8 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-6 0C3.79 10 2 11.79 2 14s1.79 4 4 4V10zm0-8C3.79 2 2 3.79 2 6s1.79 4 4 4h4V2H6z" />
        <circle cx="12" cy="18" r="4" />
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    "X": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    "LinkedIn": (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    "Default": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    )
  };

  return <>{icons[name] || icons["Default"]}</>;
};
