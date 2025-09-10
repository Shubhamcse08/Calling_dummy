import { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigate
import "./Main.css";

export default function Main({ contacts }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅ hook for navigation

  // Filter contacts based on search
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

  // Function to navigate with data
  const handleCall = (contact) => {
    navigate("/call", { state: contact }); // pass the whole contact object
  };

  return (
    <div className="ui-center-container">
      <div className="ui-box2">
        {/* Status bar */}
        <div className="status-bar">
          <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          <span>📶</span>
        </div>

        {/* Header */}
        <div className="header">
          <h1>Contacts</h1>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Contacts list */}
        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <div key={contact.id} className="contact-row">
              <span className="circle">{contact.name[0]}</span>
              <div className="contact-info">
                <span className="contact">{contact.name}</span>
                <span className="phone">{contact.phone}</span>
              </div>
              <span className="right">
                <img
                  src="./end.png"
                  className="img"
                  alt="phone-icon"
                  onClick={() => handleCall(contact)} // ✅ pass data on click
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
          ))}

          {filteredContacts.length === 0 && (
            <p className="no-results">No contacts found</p>
          )}
        </div>
      </div>
    </div>
  );
}
