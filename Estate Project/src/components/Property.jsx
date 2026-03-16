import { useState } from "react";

const PropertyIllustration = ({ type, color }) => {
  const illustrations = {
    apartment: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="400" height="260" fill="transparent" />
        {/* Sky gradient */}
        <rect width="400" height="180" fill="rgba(255,255,255,0.04)" />
        {/* Main building */}
        <rect
          x="80"
          y="60"
          width="240"
          height="180"
          rx="3"
          fill="rgba(255,255,255,0.08)"
        />
        {/* Building top */}
        <rect
          x="90"
          y="50"
          width="220"
          height="20"
          rx="2"
          fill="rgba(255,255,255,0.1)"
        />
        {/* Windows row 1 */}
        <rect
          x="105"
          y="80"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="155"
          y="80"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        <rect
          x="205"
          y="80"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="255"
          y="80"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        {/* Windows row 2 */}
        <rect
          x="105"
          y="122"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        <rect
          x="155"
          y="122"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="205"
          y="122"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        <rect
          x="255"
          y="122"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        {/* Windows row 3 */}
        <rect
          x="105"
          y="164"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="155"
          y="164"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        <rect
          x="205"
          y="164"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.18)"
        />
        <rect
          x="255"
          y="164"
          width="35"
          height="28"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        {/* Door */}
        <rect
          x="175"
          y="210"
          width="50"
          height="30"
          rx="2"
          fill="rgba(255,255,255,0.15)"
        />
        {/* Ground */}
        <rect x="0" y="238" width="400" height="22" fill="rgba(0,0,0,0.15)" />
        {/* Trees */}
        <ellipse
          cx="50"
          cy="210"
          rx="22"
          ry="28"
          fill="rgba(255,255,255,0.07)"
        />
        <rect
          x="47"
          y="228"
          width="6"
          height="12"
          fill="rgba(255,255,255,0.06)"
        />
        <ellipse
          cx="350"
          cy="215"
          rx="18"
          ry="24"
          fill="rgba(255,255,255,0.07)"
        />
        <rect
          x="347"
          y="230"
          width="6"
          height="10"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>
    ),
    house: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="400" height="260" fill="transparent" />
        {/* Sky */}
        <rect width="400" height="200" fill="rgba(255,255,255,0.03)" />
        {/* Main house body */}
        <rect
          x="70"
          y="130"
          width="260"
          height="110"
          rx="2"
          fill="rgba(255,255,255,0.09)"
        />
        {/* Roof */}
        <polygon points="55,135 200,55 345,135" fill="rgba(255,255,255,0.12)" />
        {/* Roof ridge */}
        <line
          x1="55"
          y1="135"
          x2="345"
          y2="135"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        {/* Chimney */}
        <rect
          x="270"
          y="68"
          width="22"
          height="42"
          rx="1"
          fill="rgba(255,255,255,0.1)"
        />
        {/* Door */}
        <rect
          x="168"
          y="185"
          width="64"
          height="55"
          rx="3"
          fill="rgba(255,255,255,0.13)"
        />
        <circle cx="224" cy="214" r="3" fill="rgba(255,255,255,0.3)" />
        {/* Windows */}
        <rect
          x="95"
          y="155"
          width="55"
          height="45"
          rx="2"
          fill="rgba(255,255,255,0.15)"
        />
        <line
          x1="122"
          y1="155"
          x2="122"
          y2="200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="95"
          y1="177"
          x2="150"
          y2="177"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <rect
          x="250"
          y="155"
          width="55"
          height="45"
          rx="2"
          fill="rgba(255,255,255,0.15)"
        />
        <line
          x1="277"
          y1="155"
          x2="277"
          y2="200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1="250"
          y1="177"
          x2="305"
          y2="177"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Path */}
        <rect
          x="182"
          y="238"
          width="36"
          height="22"
          fill="rgba(255,255,255,0.06)"
        />
        {/* Ground */}
        <rect x="0" y="238" width="400" height="22" fill="rgba(0,0,0,0.15)" />
        {/* Trees */}
        <ellipse
          cx="38"
          cy="200"
          rx="26"
          ry="36"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="35"
          y="225"
          width="7"
          height="15"
          fill="rgba(255,255,255,0.05)"
        />
        <ellipse
          cx="362"
          cy="205"
          rx="22"
          ry="30"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="359"
          y="228"
          width="7"
          height="12"
          fill="rgba(255,255,255,0.05)"
        />
      </svg>
    ),
    duplex: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="400" height="260" fill="transparent" />
        {/* Left unit */}
        <rect
          x="35"
          y="100"
          width="155"
          height="140"
          rx="2"
          fill="rgba(255,255,255,0.08)"
        />
        <polygon points="25,105 112,48 200,105" fill="rgba(255,255,255,0.11)" />
        {/* Right unit */}
        <rect
          x="210"
          y="100"
          width="155"
          height="140"
          rx="2"
          fill="rgba(255,255,255,0.1)"
        />
        <polygon
          points="200,105 288,48 375,105"
          fill="rgba(255,255,255,0.13)"
        />
        {/* Divider line */}
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="240"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        {/* Left windows */}
        <rect
          x="55"
          y="120"
          width="42"
          height="34"
          rx="2"
          fill="rgba(255,255,255,0.15)"
        />
        <rect
          x="115"
          y="120"
          width="42"
          height="34"
          rx="2"
          fill="rgba(255,255,255,0.1)"
        />
        {/* Right windows */}
        <rect
          x="228"
          y="120"
          width="42"
          height="34"
          rx="2"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="288"
          y="120"
          width="42"
          height="34"
          rx="2"
          fill="rgba(255,255,255,0.15)"
        />
        {/* Left door */}
        <rect
          x="80"
          y="190"
          width="44"
          height="50"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        {/* Right door */}
        <rect
          x="276"
          y="190"
          width="44"
          height="50"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        {/* Ground */}
        <rect x="0" y="238" width="400" height="22" fill="rgba(0,0,0,0.15)" />
        {/* Chimney left */}
        <rect
          x="148"
          y="58"
          width="16"
          height="30"
          rx="1"
          fill="rgba(255,255,255,0.09)"
        />
        {/* Chimney right */}
        <rect
          x="236"
          y="58"
          width="16"
          height="30"
          rx="1"
          fill="rgba(255,255,255,0.09)"
        />
      </svg>
    ),
    commercial: (
      <svg
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="400" height="260" fill="transparent" />
        {/* Main tower */}
        <rect
          x="120"
          y="30"
          width="160"
          height="210"
          rx="3"
          fill="rgba(255,255,255,0.09)"
        />
        {/* Glass facade lines */}
        {[50, 70, 90, 110, 130, 150, 170, 190, 210].map((y, i) => (
          <line
            key={i}
            x1="120"
            y1={y}
            x2="280"
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}
        {[160, 200, 240].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="30"
            x2={x}
            y2="240"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}
        {/* Highlight windows */}
        <rect
          x="130"
          y="40"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.16)"
        />
        <rect
          x="170"
          y="40"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="210"
          y="40"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.16)"
        />
        <rect
          x="130"
          y="80"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="210"
          y="80"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.16)"
        />
        <rect
          x="130"
          y="120"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.16)"
        />
        <rect
          x="170"
          y="120"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="210"
          y="120"
          width="30"
          height="20"
          rx="1"
          fill="rgba(255,255,255,0.1)"
        />
        {/* Entrance */}
        <rect
          x="165"
          y="205"
          width="70"
          height="35"
          rx="2"
          fill="rgba(255,255,255,0.14)"
        />
        <line
          x1="200"
          y1="205"
          x2="200"
          y2="240"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        {/* Side buildings */}
        <rect
          x="40"
          y="120"
          width="72"
          height="120"
          rx="2"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="288"
          y="100"
          width="72"
          height="140"
          rx="2"
          fill="rgba(255,255,255,0.06)"
        />
        {/* Ground */}
        <rect x="0" y="238" width="400" height="22" fill="rgba(0,0,0,0.15)" />
        {/* Top antenna */}
        <line
          x1="200"
          y1="30"
          x2="200"
          y2="10"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
        />
        <circle cx="200" cy="10" r="3" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
  };

  return (
    <div className="card-illustration" style={{ background: color }}>
      {illustrations[type] || illustrations.apartment}
    </div>
  );
};

export default function PropertyCard({ property, large, onClick }) {
  const [saved, setSaved] = useState(false);

  const statusMap = {
    sale: "For Sale",
    rent: "For Rent",
    shortlet: "Shortlet",
  };
  const statusClass = {
    sale: "status-sale",
    rent: "status-rent",
    shortlet: "status-shortlet",
  };

  return (
    <div
      className={`prop-card ${large ? "large" : ""}`}
      onClick={() => onClick(property)}
    >
      <div className="card-img">
        <PropertyIllustration type={property.type} color={property.color} />
        <span className={`card-status ${statusClass[property.status]}`}>
          {statusMap[property.status]}
        </span>
        <button
          className="card-save"
          onClick={(e) => {
            e.stopPropagation();
            setSaved((s) => !s);
          }}
        >
          {saved ? "♥" : "♡"}
        </button>
      </div>
      <div className="card-body">
        <div className="card-type">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </div>
        <div className="card-title">{property.title}</div>
        <div className="card-location">
          <svg
            width="11"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            style={{ marginRight: "4px", flexShrink: 0 }}
          >
            <path
              d="M5.5 0C2.46 0 0 2.46 0 5.5c0 4.125 5.5 8.5 5.5 8.5S11 9.625 11 5.5C11 2.46 8.54 0 5.5 0zm0 7.5a2 2 0 110-4 2 2 0 010 4z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
          {property.location}
        </div>
        <div className="card-specs">
          {property.beds > 0 && (
            <div className="spec">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <rect
                  x="0"
                  y="4"
                  width="14"
                  height="6"
                  rx="1"
                  fill="currentColor"
                  opacity="0.5"
                />
                <rect
                  x="1"
                  y="1"
                  width="5"
                  height="4"
                  rx="1"
                  fill="currentColor"
                  opacity="0.4"
                />
                <rect
                  x="8"
                  y="1"
                  width="5"
                  height="4"
                  rx="1"
                  fill="currentColor"
                  opacity="0.4"
                />
              </svg>
              {property.beds} Beds
            </div>
          )}
          <div className="spec">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path
                d="M1 9h10v2a2 2 0 01-2 2H3a2 2 0 01-2-2V9z"
                fill="currentColor"
                opacity="0.5"
              />
              <path
                d="M1 9V4a1 1 0 011-1h1v6H1zM11 9V7H4V9h7z"
                fill="currentColor"
                opacity="0.4"
              />
            </svg>
            {property.baths} Baths
          </div>
          <div className="spec">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="12"
                height="12"
                rx="1"
                stroke="currentColor"
                strokeOpacity="0.5"
              />
              <path
                d="M3 10L10 3M3 3h4M10 10H6"
                stroke="currentColor"
                strokeOpacity="0.5"
                strokeWidth="1.2"
              />
            </svg>
            {property.sqft.toLocaleString()} sqft
          </div>
        </div>
        <div className="card-footer">
          <div className="card-price">{property.priceLabel}</div>
          <button className="card-btn">View Details</button>
        </div>
      </div>
    </div>
  );
}
