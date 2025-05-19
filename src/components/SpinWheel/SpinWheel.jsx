import React, { useRef, useState } from "react";
import "./SpinWheel.css";

function SpinWheel() {
  const [lastSpinDegrees, setLastSpinDegrees] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Strength");
  const spinBoxRef = useRef();

  const VIDEO_URLS = {
    Strength: "https://www.youtube.com/embed/H1F-UfC8Mb8?si=WabegDvWTvk7nHSY",
    Balance: "https://www.youtube.com/embed/8BcPHWGQO44",
    Endurance: "https://www.youtube.com/embed/1skBf6h2ksI",
    Flexibility: "https://www.youtube.com/embed/v7AYKMP6rOE"
  };

  function getSelection(degrees) {
    const normalized = degrees % 360;
    if (normalized < 0) return getSelection(normalized + 360);
    if (normalized < 90) return "Strength";
    if (normalized < 180) return "Balance";
    if (normalized < 270) return "Endurance";
    return "Flexibility";
  }

  function handleSpin() {
    const spins = Math.floor(Math.random() * 5) + 5;
    const deg = spins * 360 + Math.floor(Math.random() * 360);
    setLastSpinDegrees(deg);
    if (spinBoxRef.current) {
      spinBoxRef.current.style.transition =
        "transform 2s cubic-bezier(.17,.67,.83,.67)";
      spinBoxRef.current.style.transform = `rotate(${deg}deg)`;
    }
  }

  function handleTransitionEnd() {
    const section = getSelection(lastSpinDegrees);
    setSelectedSection(section);
    setModalVisible(true);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  return (
    <section className="spinwheel__section">
      <h2 className="spinwheel__title">
        Feeling overwhelmed? Spin the wheel for your next workout!
      </h2>
      <div id="spinwheel" className="spinwheel__container" onClick={handleSpin}>
        <div className="spinwheel__pin"></div>
        <div
          id="box"
          className="spinwheel__box"
          ref={spinBoxRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="spinwheel__box1">
            <span>Wedge 1</span>
            <p className="spinwheel__description">Strength</p>
            <span>Wedge 2</span>
            <p className="spinwheel__description">Balance</p>
            <span>Wedge 3</span>
            <p className="spinwheel__description">Endurance</p>
            <span>Wedge 4</span>
            <p className="spinwheel__description">Flexibility</p>
          </div>
        </div>
      </div>
      {modalVisible && (
        <div className="spinwheel-modal modal-visible">
          <div className="spinwheel-modal__content">
            <button
              type="button"
              className="spinwheel-modal__close-btn"
              onClick={handleCloseModal}
            >
              Close video
            </button>
            <div id="videoContainer">
              <iframe
                src={VIDEO_URLS[selectedSection]}
                title={selectedSection + " workout"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SpinWheel;
