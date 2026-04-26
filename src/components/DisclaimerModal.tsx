import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("disclaimerDismissed");
    if (isDismissed) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("disclaimerDismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-lg w-full shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#C8A96A] to-[#3fb68b] p-6 flex justify-between items-center rounded-t-lg">
          <h2 className="text-2xl font-bold text-white">Disclaimer</h2>
          <button
            onClick={handleClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition"
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">Welcome! 👋</span>
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            This portfolio showcases my{" "}
            <span className="font-semibold">Outside Localhost activities</span>,
            including workshops, meetups, community initiatives, and speaking
            engagements.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <span className="text-red-600 font-semibold">
              ⚠️ This is NOT my technical portfolio.
            </span>{" "}
            If you're interested in viewing my technical work, projects, and
            coding expertise, please feel free to{" "}
            <span className="font-semibold">
              reach out through the contact section
            </span>{" "}
            I'll be happy to share it with you!
          </p>

          <p className="text-gray-600 text-sm italic">
            Thank you for visiting! 🙏
          </p>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 rounded-b-lg flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="bg-[#3fb68b] hover:bg-[#2d8b68] text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
