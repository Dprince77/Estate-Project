import { useState, useRef, useEffect } from "react";
import { nigeriaLocations } from "../data";

export default function LocationSearch({ value, onChange }) {
  const [query, setQuery] = useState(value || "");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (query.trim().length < 1) {
      setSuggestions([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = nigeriaLocations
      .filter((loc) => loc.toLowerCase().includes(q))
      .slice(0, 8);
    setSuggestions(filtered);
    setOpen(filtered.length > 0);
    setHighlighted(-1);
  }, [query]);

  useEffect(() => {
    const handleClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectLocation = (loc) => {
    setQuery(loc);
    onChange(loc);
    setOpen(false);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      setHighlighted((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter" && highlighted >= 0) {
      selectLocation(suggestions[highlighted]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const handleClear = () => {
    setQuery("");
    onChange("");
    setSuggestions([]);
    setOpen(false);
    inputRef.current?.focus();
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark>{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    );
  };

  return (
    <div className="location-search" ref={wrapRef}>
      <div className={`ls-input-wrap ${open ? "focused" : ""}`}>
        <span className="ls-icon">📍</span>
        <input
          ref={inputRef}
          type="text"
          className="ls-input"
          placeholder="Search location..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange("");
          }}
          onFocus={() => {
            if (suggestions.length) setOpen(true);
          }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        {query && (
          <button className="ls-clear" onClick={handleClear} type="button">
            ✕
          </button>
        )}
      </div>
      {open && (
        <ul className="ls-dropdown">
          {suggestions.map((loc, i) => {
            const [state, area] = loc.split(" — ");
            return (
              <li
                key={loc}
                className={`ls-item ${i === highlighted ? "highlighted" : ""}`}
                onMouseDown={() => selectLocation(loc)}
                onMouseEnter={() => setHighlighted(i)}
              >
                <span className="ls-item-icon">📍</span>
                <div className="ls-item-text">
                  <span className="ls-item-area">
                    {highlightMatch(area || loc, query)}
                  </span>
                  {area && <span className="ls-item-state">{state}</span>}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
