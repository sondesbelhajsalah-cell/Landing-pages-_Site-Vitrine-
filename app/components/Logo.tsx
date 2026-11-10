export default function Logo({ light = false }: { light?: boolean }) {
  const word = light ? "#ffffff" : "#243140";

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="42" height="34" viewBox="0 0 42 34" aria-hidden="true">
        <path
          d="M6 14.5h30a3 3 0 0 1 3 3V28a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V17.5a3 3 0 0 1 3-3Z"
          fill={light ? "#ffffff" : "#243140"}
        />
        <path d="M3 16.5h36" stroke={light ? "#3d4c5c" : "#ffffff"} strokeWidth="1.4" />
        <path
          d="M14 14.2 21 8.2l7 6"
          fill="none"
          stroke="#2eb0ea"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M18.2 6.2h5.6v3.1a2.8 2.8 0 0 1-2.8 2.8 2.8 2.8 0 0 1-2.8-2.8V6.2Z"
          fill="#2eb0ea"
        />
        <rect x="16.5" y="20" width="9" height="6.2" rx="1" fill={light ? "#3d4c5c" : "#ffffff"} />
      </svg>
      <span className="text-[1.7rem] font-extrabold leading-none tracking-tight" style={{ color: word }}>
        MyScol
      </span>
    </span>
  );
}
