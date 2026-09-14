export function Orbit() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <svg className="orbit-svg" viewBox="0 0 560 510" fill="none">
        <defs>
          <radialGradient id="sphere" cx="0.3" cy="0.23" r="0.85">
            <stop stopColor="#ff9568" />
            <stop offset="0.5" stopColor="#ee542c" />
            <stop offset="1" stopColor="#b83012" />
          </radialGradient>
          <clipPath id="sphere-clip">
            <circle cx="280" cy="260" r="115" />
          </clipPath>
        </defs>
        <g className="orbit-grid" stroke="currentColor" strokeWidth="0.6">
          <path d="M0 260h560M280 25v470" strokeDasharray="3 8" />
          <circle cx="280" cy="260" r="211" />
          <circle cx="280" cy="260" r="169" strokeDasharray="2 8" />
        </g>
        <ellipse
          cx="280"
          cy="260"
          rx="249"
          ry="81"
          transform="rotate(-34 280 260)"
          stroke="#92928a"
          strokeWidth="0.8"
        />
        <ellipse
          cx="280"
          cy="260"
          rx="235"
          ry="99"
          transform="rotate(40 280 260)"
          stroke="#92928a"
          strokeWidth="0.8"
        />
        <circle cx="280" cy="260" r="115" fill="url(#sphere)" />
        <g
          clipPath="url(#sphere-clip)"
          stroke="#792707"
          strokeOpacity=".3"
          strokeWidth=".8"
        >
          <ellipse cx="280" cy="260" rx="80" ry="115" />
          <ellipse cx="280" cy="260" rx="37" ry="115" />
          <ellipse cx="280" cy="260" rx="115" ry="80" />
          <ellipse cx="280" cy="260" rx="115" ry="37" />
          <path d="M165 260h230M280 145v230" />
        </g>
        <path
          d="M74 379c75-6 162-37 249-96s143-119 154-157"
          stroke="#393b31"
          strokeWidth="1"
        />
        <g className="orbit-satellite">
          <circle cx="102" cy="146" r="7" fill="#272b23" />
          <circle
            cx="102"
            cy="146"
            r="13"
            stroke="#272b23"
            strokeOpacity=".18"
          />
        </g>
        <g className="orbit-satellite second">
          <circle cx="450" cy="384" r="6" fill="#ee542c" />
          <circle
            cx="450"
            cy="384"
            r="12"
            stroke="#ee542c"
            strokeOpacity=".3"
          />
        </g>
        <path d="M70 57v14M63 64h14M480 436v14M473 443h14" stroke="#77786c" />
      </svg>
      <div className="orbit-tag guardian-tag">
        <span className="tiny-dot" />
        GUARDIAN<span className="tag-sub">Software engineering</span>
      </div>
      <div className="orbit-tag steward-tag">
        <span className="tiny-dot orange" />
        STEWARD<span className="tag-sub">Technical cofounder</span>
      </div>
    </div>
  );
}
