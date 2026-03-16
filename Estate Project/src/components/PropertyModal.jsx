import { useEffect } from "react";

const ModalIllustration = ({ type, color }) => {
  const illustrations = {
    apartment: (
      <svg
        viewBox="0 0 800 320"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="800" height="320" fill="transparent" />
        <rect
          x="180"
          y="60"
          width="440"
          height="240"
          rx="4"
          fill="rgba(255,255,255,0.07)"
        />
        <rect
          x="200"
          y="40"
          width="400"
          height="28"
          rx="3"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="220"
          y="5"
          width="80"
          height="42"
          rx="2"
          fill="rgba(255,255,255,0.08)"
        />
        <rect
          x="500"
          y="5"
          width="80"
          height="42"
          rx="2"
          fill="rgba(255,255,255,0.08)"
        />
        {[80, 120, 160, 200].map((y, r) =>
          [220, 300, 380, 460, 540].map((x, c) => (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="52"
              height="30"
              rx="2"
              fill={`rgba(255,255,255,${(r + c) % 2 === 0 ? 0.14 : 0.08})`}
            />
          )),
        )}
        <rect
          x="360"
          y="260"
          width="80"
          height="40"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        <rect x="0" y="295" width="800" height="25" fill="rgba(0,0,0,0.15)" />
        <ellipse
          cx="110"
          cy="270"
          rx="40"
          ry="50"
          fill="rgba(255,255,255,0.05)"
        />
        <ellipse
          cx="690"
          cy="275"
          rx="35"
          ry="44"
          fill="rgba(255,255,255,0.05)"
        />
      </svg>
    ),
    house: (
      <svg
        viewBox="0 0 800 320"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="800" height="320" fill="transparent" />
        <rect
          x="150"
          y="160"
          width="500"
          height="140"
          rx="3"
          fill="rgba(255,255,255,0.08)"
        />
        <polygon
          points="130,165 400,60 670,165"
          fill="rgba(255,255,255,0.11)"
        />
        <rect
          x="530"
          y="78"
          width="30"
          height="60"
          rx="2"
          fill="rgba(255,255,255,0.09)"
        />
        <rect
          x="180"
          y="185"
          width="90"
          height="72"
          rx="3"
          fill="rgba(255,255,255,0.14)"
        />
        <line
          x1="225"
          y1="185"
          x2="225"
          y2="257"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
        />
        <line
          x1="180"
          y1="220"
          x2="270"
          y2="220"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
        />
        <rect
          x="530"
          y="185"
          width="90"
          height="72"
          rx="3"
          fill="rgba(255,255,255,0.14)"
        />
        <line
          x1="575"
          y1="185"
          x2="575"
          y2="257"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
        />
        <line
          x1="530"
          y1="220"
          x2="620"
          y2="220"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
        />
        <rect
          x="340"
          y="225"
          width="120"
          height="75"
          rx="3"
          fill="rgba(255,255,255,0.12)"
        />
        <circle cx="450" cy="265" r="5" fill="rgba(255,255,255,0.25)" />
        <rect x="0" y="295" width="800" height="25" fill="rgba(0,0,0,0.15)" />
        <ellipse
          cx="80"
          cy="258"
          rx="48"
          ry="65"
          fill="rgba(255,255,255,0.05)"
        />
        <ellipse
          cx="720"
          cy="265"
          rx="42"
          ry="56"
          fill="rgba(255,255,255,0.05)"
        />
      </svg>
    ),
    duplex: (
      <svg
        viewBox="0 0 800 320"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="800" height="320" fill="transparent" />
        <rect
          x="60"
          y="140"
          width="310"
          height="155"
          rx="2"
          fill="rgba(255,255,255,0.08)"
        />
        <polygon points="45,145 215,55 390,145" fill="rgba(255,255,255,0.11)" />
        <rect
          x="430"
          y="140"
          width="310"
          height="155"
          rx="2"
          fill="rgba(255,255,255,0.09)"
        />
        <polygon
          points="415,145 585,55 760,145"
          fill="rgba(255,255,255,0.12)"
        />
        <line
          x1="400"
          y1="140"
          x2="400"
          y2="295"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="3"
        />
        <rect
          x="90"
          y="162"
          width="75"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.14)"
        />
        <rect
          x="210"
          y="162"
          width="75"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="460"
          y="162"
          width="75"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="580"
          y="162"
          width="75"
          height="55"
          rx="2"
          fill="rgba(255,255,255,0.14)"
        />
        <rect
          x="148"
          y="233"
          width="80"
          height="62"
          rx="2"
          fill="rgba(255,255,255,0.11)"
        />
        <rect
          x="572"
          y="233"
          width="80"
          height="62"
          rx="2"
          fill="rgba(255,255,255,0.11)"
        />
        <rect x="0" y="295" width="800" height="25" fill="rgba(0,0,0,0.15)" />
      </svg>
    ),
    commercial: (
      <svg
        viewBox="0 0 800 320"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <rect width="800" height="320" fill="transparent" />
        <rect
          x="270"
          y="20"
          width="260"
          height="275"
          rx="4"
          fill="rgba(255,255,255,0.08)"
        />
        {[40, 65, 90, 115, 140, 165, 190, 215, 240].map((y, i) => (
          <line
            key={i}
            x1="270"
            y1={y}
            x2="530"
            y2={y}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}
        {[335, 400, 465].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="20"
            x2={x}
            y2="295"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect
              key={`${r}-${c}`}
              x={285 + c * 65}
              y={30 + r * 60}
              width="48"
              height="40"
              rx="1"
              fill={`rgba(255,255,255,${(r + c) % 2 === 0 ? 0.15 : 0.08})`}
            />
          )),
        )}
        <rect
          x="100"
          y="120"
          width="160"
          height="175"
          rx="3"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="540"
          y="90"
          width="160"
          height="205"
          rx="3"
          fill="rgba(255,255,255,0.06)"
        />
        <rect
          x="330"
          y="258"
          width="140"
          height="37"
          rx="2"
          fill="rgba(255,255,255,0.12)"
        />
        <line
          x1="400"
          y1="258"
          x2="400"
          y2="295"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <rect x="0" y="295" width="800" height="25" fill="rgba(0,0,0,0.15)" />
        <line
          x1="400"
          y1="20"
          x2="400"
          y2="2"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2.5"
        />
        <circle cx="400" cy="2" r="4" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {illustrations[type] || illustrations.apartment}
    </div>
  );
};

export default function PropertyModal({ property, onClose }) {
  const statusMap = {
    sale: "For Sale",
    rent: "For Rent",
    shortlet: "Shortlet",
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  if (!property) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-gallery">
          <ModalIllustration type={property.type} color={property.color} />
        </div>
        <div className="modal-body">
          <div className="modal-left">
            <div className="modal-tag">
              {statusMap[property.status]} ·{" "}
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </div>
            <h2 className="modal-title">{property.title}</h2>
            <div className="modal-location">
              <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                style={{ marginRight: "5px", flexShrink: 0 }}
              >
                <path
                  d="M5.5 0C2.46 0 0 2.46 0 5.5c0 4.125 5.5 8.5 5.5 8.5S11 9.625 11 5.5C11 2.46 8.54 0 5.5 0zm0 7.5a2 2 0 110-4 2 2 0 010 4z"
                  fill="currentColor"
                  opacity="0.5"
                />
              </svg>
              {property.location}
            </div>
            <div className="modal-price">{property.priceLabel}</div>
            <div className="modal-specs">
              {property.beds > 0 && (
                <div className="modal-spec">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    style={{ marginRight: "5px" }}
                  >
                    <rect
                      x="0"
                      y="5"
                      width="16"
                      height="7"
                      rx="1"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="6"
                      height="5"
                      rx="1"
                      fill="currentColor"
                      opacity="0.4"
                    />
                    <rect
                      x="9"
                      y="1"
                      width="6"
                      height="5"
                      rx="1"
                      fill="currentColor"
                      opacity="0.4"
                    />
                  </svg>
                  <strong>{property.beds}</strong>&nbsp;Bedrooms
                </div>
              )}
              <div className="modal-spec">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    d="M1 10h12v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <path
                    d="M1 10V5a1 1 0 011-1h1.5v6H1zM13 10V8H5v2h8z"
                    fill="currentColor"
                    opacity="0.4"
                  />
                </svg>
                <strong>{property.baths}</strong>&nbsp;Bathrooms
              </div>
              <div className="modal-spec">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{ marginRight: "5px" }}
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="13"
                    height="13"
                    rx="1.5"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M3.5 10.5L10.5 3.5M3.5 3.5H7M10.5 10.5H7"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <strong>{property.sqft.toLocaleString()}</strong>&nbsp;sqft
              </div>
            </div>
            <p className="modal-desc">{property.desc}</p>
            <div className="modal-features">
              {property.features.map((f) => (
                <span key={f} className="modal-feature-tag">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="modal-right">
            <div className="agent-card">
              <div className="agent-avatar">SA</div>
              <div className="agent-info">
                <h4>Sage Agent</h4>
                <p>Property Specialist</p>
                <span>&#9733; 4.9 · 120+ deals</span>
              </div>
            </div>
            <button
              className="btn-primary full"
              onClick={() => alert("Scheduling a viewing...")}
            >
              Schedule Viewing
            </button>
            <button
              className="btn-outline full"
              onClick={() => alert("Contacting agent...")}
            >
              Contact Agent
            </button>
            <div className="modal-note">
              Free legal consultation with every purchase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
