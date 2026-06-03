import { useState } from "react";
import "../styles/CertificationsList.css";

function CertificationsList() {
  const [showCertifications, setShowCertifications] = useState(true);

  const certifications = [
    {
      id: 1,
      name: "React Developer",
      provider: "Meta",
    },
    {
      id: 2,
      name: "JavaScript Algorithms",
      provider: "python",
    },
    {
      id: 3,
      name: "Python programming",
      provider: "python",
    },
    {
      id: 4,
      name: "Node.js fundamentals",
      provider: "python",
    },
    {
      id: 5,
      name: "AWS Cloud Practitioner",
      provider: "python",
    },
  ];

  return (
    <div className="Certifications-container">
      <h2 className="Certifications-title">
        Certifications
      </h2>

      {showCertifications &&
        certifications.map((certification) => (
          <div
            key={certification.id}
            className="Certification-item"
          >
            <span>{certification.name}</span>
            <span>{certification.provider}</span>
          </div>
        ))}

      <button
        className="toggle-button"
        onClick={() => 
            setShowCertifications(!showCertifications)
        }
      >
        {showCertifications
          ? "Hide Certifications"
          : "Show Certifications"}
      </button>
    </div>
  );
}

export default CertificationsList;