import { useState, useMemo } from "react";
import Navbar from "./components/Navbar.jsx";
import LocationSearch from "./components/Location.jsx";
import PropertyCard from "./components/Property.jsx";
import PropertyModal from "./components/PropertyModal.jsx";
import { properties } from "./data";
import "./App.css";

export default function App() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchTab, setSearchTab] = useState("buy");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [selectedProp, setSelectedProp] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const featured = properties.filter((p) => p.featured);

  const filteredListings = useMemo(() => {
    let list = [...properties];
    if (filter !== "all") list = list.filter((p) => p.type === filter);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "newest")
      list = [
        ...list.filter((p) => p.newest),
        ...list.filter((p) => !p.newest),
      ];
    return list;
  }, [filter, sort]);

  const handleSearch = () => {
    if (searchType) setFilter(searchType);
    document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSent(true);
      e.target.reset();
      setTimeout(() => setFormSent(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />

      <section id="hero">
        <div className="hero-bg">
          <div className="hero-shape s1" />
          <div className="hero-shape s2" />
          <div className="hero-shape s3" />
        </div>
        <div className="hero-content">
          <div className="hero-tag">Premium Real Estate · Nigeria</div>
          <h1 className="hero-title">
            Find Your
            <em>Perfect</em>
            Space.
          </h1>
          <p className="hero-desc">
            Luxury homes, modern apartments and commercial properties across
            Lagos, Abuja, Ibadan and beyond.
          </p>
          <div className="hero-search">
            <div className="search-tabs">
              {["buy", "rent", "shortlet"].map((tab) => (
                <button
                  key={tab}
                  className={`search-tab ${searchTab === tab ? "active" : ""}`}
                  onClick={() => setSearchTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="search-bar">
              <div className="search-field">
                <label>Location</label>
                <LocationSearch
                  value={searchLocation}
                  onChange={setSearchLocation}
                />
              </div>
              <div className="search-divider" />
              <div className="search-field">
                <label>Property Type</label>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="">Any Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House / Villa</option>
                  <option value="duplex">Duplex</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="search-divider" />
              <div className="search-field">
                <label>Budget</label>
                <select>
                  <option>Any Budget</option>
                  <option>Under ₦50M</option>
                  <option>₦50M – ₦200M</option>
                  <option>₦200M+</option>
                </select>
              </div>
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          {[
            ["1,200+", "Active Listings"],
            ["850+", "Happy Clients"],
            ["12", "Years Experience"],
            ["3+", "Cities Covered"],
          ].map(([n, l], i) => (
            <div key={i} className="hero-stat-wrap">
              {i > 0 && <div className="hero-stat-div" />}
              <div className="hero-stat">
                <span className="stat-n">{n}</span>
                <span className="stat-l">{l}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="featured">
        <div className="section-head">
          <div className="section-label">Featured</div>
          <h2 className="section-title">
            Hand-picked <em>Properties</em>
          </h2>
          <p className="section-sub">
            Our agents have personally verified every listing.
          </p>
        </div>
        <div className="featured-grid">
          {featured.map((p, i) => (
            <PropertyCard
              key={p.id}
              property={p}
              large={i === 0}
              onClick={setSelectedProp}
            />
          ))}
        </div>
      </section>

      <section className="section alt" id="listings">
        <div className="section-head">
          <div className="section-label">Listings</div>
          <h2 className="section-title">
            All <em>Properties</em>
          </h2>
        </div>
        <div className="filter-bar">
          <div className="filter-group">
            {["all", "apartment", "house", "duplex", "commercial"].map((f) => (
              <button
                key={f}
                className={`filter-pill ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f === "all"
                  ? "All"
                  : f.charAt(0).toUpperCase() + f.slice(1) + "s"}
              </button>
            ))}
          </div>
          <div className="filter-right">
            <select
              className="filter-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
            <div className="results-count">
              {filteredListings.length} propert
              {filteredListings.length === 1 ? "y" : "ies"}
            </div>
          </div>
        </div>
        <div className="listings-grid">
          {filteredListings.map((p) => (
            <PropertyCard key={p.id} property={p} onClick={setSelectedProp} />
          ))}
        </div>
        <div className="load-more-wrap">
          <button
            className="btn-outline"
            onClick={() => alert("Loading more...")}
          >
            Load More Properties
          </button>
        </div>
      </section>

      <section className="section" id="about">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-img-main">
              <div className="about-img-inner">
                <div className="about-badge-float">
                  <span className="badge-num">12+</span>
                  <span className="badge-txt">Years of Trust</span>
                </div>
              </div>
            </div>
            <div className="about-img-side">
              <div className="about-img-sm">
              </div>
              <div className="about-img-sm">
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">About Sage</div>
            <h2 className="section-title">
              Nigeria's Most <em>Trusted</em> Property Partner
            </h2>
            <p className="about-text">
              Sage Properties was founded on a simple belief — finding your
              ideal home or investment property should be a pleasure, not a
              stress. We combine deep local knowledge with a curated selection
              of verified listings.
            </p>
            <p className="about-text">
              Whether you're a first-time buyer, a seasoned investor, or a
              business seeking commercial space — our agents are with you from
              first search to final handshake.
            </p>
            <div className="about-features">
              {[
                "All properties personally verified",
                "Legal documentation support",
                "Transparent pricing, no hidden fees",
                "Post-sale client support",
              ].map((f) => (
                <div key={f} className="about-feature">
                  <span className="feature-icon">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Talk to an Agent
            </button>
          </div>
        </div>
      </section>

      <section className="section alt" id="contact">
        <div className="section-head">
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Get in <em>Touch</em>
          </h2>
          <p className="section-sub">Our agents respond within 24 hours.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            {[
              {
                icon: "📍",
                title: "Office",
                lines: ["14 Adewale Close, Victoria Island, Lagos"],
              },
              {
                icon: "📞",
                title: "Phone",
                lines: ["+234 814 515 8639", "+234 904 187 6198"],
              },
              {
                icon: "✉",
                title: "Email",
                lines: [
                  "hello@sageproperties.ng",
                  "listings@sageproperties.ng",
                ],
              },
              {
                icon: "🕐",
                title: "Hours",
                lines: ["Mon – Fri: 8am – 6pm", "Sat: 9am – 3pm"],
              },
            ].map((c) => (
              <div key={c.title} className="contact-card">
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <h4>{c.title}</h4>
                  {c.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form" onSubmit={handleContact}>
            <div className="form-row-2">
              <div className="form-field">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 ..." />
              </div>
            </div>
            <div className="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="sage@email.com" required />
            </div>
            <div className="form-field">
              <label>I'm interested in</label>
              <select>
                <option>Buying a property</option>
                <option>Renting a property</option>
                <option>Listing my property</option>
                <option>Investment advice</option>
                <option>General enquiry</option>
              </select>
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea
                placeholder="Tell us what you're looking for..."
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary full"
              disabled={formLoading}
            >
              {formLoading ? "Sending..." : "Send Message"}
            </button>
            {formSent && (
              <p className="form-note">
                ✓ Message sent! An agent will contact you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              SAGE <span>Properties</span>
            </div>
            <p>Premium real estate across Nigeria's finest cities.</p>
            <div className="footer-socials">
              {["Instagram", "Twitter", "LinkedIn", "WhatsApp"].map((s) => (
                <a key={s} href="#">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Properties</h4>
            {[
              "Lagos Listings",
              "Abuja Listings",
              "Ibadan Listings",
              "New Developments",
              "Commercial",
            ].map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            {["About Us", "Our Agents", "Blog", "Careers", "Contact"].map(
              (l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ),
            )}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {[
              "Property Search",
              "List a Property",
              "Property Valuation",
              "Legal Support",
              "Investment Advisory",
            ].map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Sage Properties Nigeria. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </footer>

      {selectedProp && (
        <PropertyModal
          property={selectedProp}
          onClose={() => setSelectedProp(null)}
        />
      )}
    </>
  );
}
