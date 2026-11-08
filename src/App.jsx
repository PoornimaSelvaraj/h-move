
import React, { useState } from "react";

export default function App() {
  const [active, setActive] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const panels = [
    {
      no: "01",
      title: "ELECTRIC GUITAR",
      name: "FENDER STRATOCASTER",
      color: "#171c1c",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1400",
      desc: "Discover powerful guitar sounds and timeless musical design.",
      song: "Electric Guitar Collection",
      specs: ["Body: Alder", "Neck: Maple", "Pickups: Single Coil", "Finish: Vintage"]
    },
    {
      no: "02",
      title: "ACOUSTIC GUITAR",
      name: "PURE ACOUSTIC",
      color: "#a52219",
      image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=1400",
      desc: "Experience the natural beauty of acoustic music.",
      song: "Acoustic Music Collection",
      specs: ["Body: Mahogany", "Neck: Rosewood", "Strings: Steel", "Finish: Natural"]
    },
    {
      no: "03",
      title: "VINTAGE GUITAR",
      name: "KRAMER PACER VINTAGE",
      color: "#54208e",
      image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=1400",
      desc: "Discover an iconic vintage guitar collection. Powerful sound, extraordinary craftsmanship and legendary musical style.",
      song: "Vintage Guitar Collection",
      specs: [
        "BODY MATERIAL: Alder",
        "NECK: Maple Neck",
        "FINGERBOARD: Ebony",
        "PICKUPS: EMG Active Pickups",
        "BRIDGE: Floyd Rose",
        "FINISH: Black Vintage",
        "SCALE: 25.5 Inches",
        "STRINGS: 6 String"
      ]
    },
    {
      no: "04",
      title: "GRAND PIANO",
      name: "YAMAHA GRAND PIANO",
      color: "#07529c",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1400",
      desc: "Explore beautiful piano melodies and premium craftsmanship.",
      song: "Grand Piano Collection",
      specs: ["Keys: 88", "Sound: Premium", "Finish: Black", "Type: Grand Piano"]
    },
    {
      no: "05",
      title: "DRUMS",
      name: "PROFESSIONAL DRUM KIT",
      color: "#08783a",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1400",
      desc: "Feel the rhythm with professional drum instruments.",
      song: "Drum Collection",
      specs: ["Type: Acoustic", "Shell: Wood", "Pieces: 5", "Finish: Studio"]
    },
    {
      no: "06",
      title: "SAXOPHONE",
      name: "THE JAZZ COLLECTION",
      color: "#292338",
      image: "https://images.unsplash.com/photo-1573871669414-010dbf73ca84?w=1400",
      desc: "Experience rich tones and beautiful jazz melodies.",
      song: "Jazz Music Collection",
      specs: ["Type: Alto", "Material: Brass", "Finish: Gold", "Keys: Professional"]
    },
    {
      no: "07",
      title: "STUDIO MUSIC",
      name: "CREATE YOUR SOUND",
      color: "#a51e20",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400",
      desc: "Discover professional studio equipment and recording.",
      song: "Studio Music Collection",
      specs: ["Studio: Professional", "Audio: High Quality", "Setup: Recording", "Type: Music Production"]
    }
  ];

  const selectPanel = (index) => {
    setActive(index);
    setPlaying(false);
  };

  const handlePlay = (e, index) => {
    e.stopPropagation();

    if (active === index) {
      setPlaying(!playing);
    } else {
      setActive(index);
      setPlaying(true);
    }
  };

  return (
    <div className="music-screen">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body, #root {
          width: 100%;
          min-height: 100%;
          background: #09090d;
          font-family: Arial, sans-serif;
        }

        body {
          overflow: hidden;
        }

        .music-screen {
          width: 100%;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
          background: #09090d;
        }

        .accordion {
          display: flex;
          width: 100%;
          height: 100%;
          gap: 3px;
          background: #09090d;
        }

        .music-panel {
          position: relative;
          flex: .58;
          min-width: 0;
          height: 100%;
          overflow: hidden;
          background: var(--panel-color);
          cursor: pointer;
          isolation: isolate;
          transition: flex .85s cubic-bezier(.22,.8,.25,1),
                      background .7s ease;
        }

        .music-panel.active {
          flex: 6.5;
        }

        .main-image {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: var(--panel-image);
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.02);
          transition: opacity .7s ease, transform 1s ease;
        }

        .music-panel.active .main-image {
          opacity: 1;
          transform: scale(1.05);
        }

        .music-panel.active:hover .main-image {
          transform: scale(1.09);
        }

        .color-tint {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: var(--panel-color);
          opacity: 0;
          mix-blend-mode: color;
          pointer-events: none;
          transition: opacity .7s ease;
        }

        .music-panel.active .color-tint {
          opacity: .65;
        }

        .image-shade {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(
              90deg,
              color-mix(in srgb, var(--panel-color), black 25%),
              transparent 85%
            ),
            linear-gradient(
              0deg,
              rgba(0,0,0,.65),
              transparent 60%
            );
          opacity: 0;
          transition: opacity .7s ease;
          pointer-events: none;
        }

        .music-panel.active .image-shade {
          opacity: 1;
        }

        .vertical-content {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 12px 3px;
          color: white;
          transition: opacity .3s;
          pointer-events: none;
        }

        .music-panel.active .vertical-content {
          opacity: 0;
        }

        .panel-number {
          font-size: 13px;
          font-weight: 900;
          color: white;
        }

        .vertical-title {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .mini-icon {
          font-size: 21px;
          opacity: .7;
        }

        .expanded-content {
          position: absolute;
          inset: 0;
          z-index: 4;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: clamp(22px, 3vw, 55px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: .5s ease;
          pointer-events: none;
        }

        .music-panel.active .expanded-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition-delay: .2s;
          pointer-events: auto;
        }

        .expanded-number {
          font-size: 13px;
          color: #ffe06b;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .expanded-content h1 {
          font-size: clamp(23px, 3vw, 43px);
          max-width: 430px;
          color: white;
          line-height: 1.08;
          font-weight: 900;
          text-shadow: 0 3px 15px rgba(0,0,0,.4);
        }

        .sub-title {
          font-size: 10px;
          letter-spacing: 3px;
          color: white;
          margin-top: 10px;
          font-weight: 700;
        }

        .description {
          font-size: 12px;
          line-height: 1.8;
          color: rgba(255,255,255,.95);
          max-width: 290px;
          margin-top: 25px;
        }

        .explore-btn {
          margin-top: 22px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.6);
          color: white;
          padding: 12px 20px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          cursor: pointer;
          transition: .3s;
          position: relative;
          z-index: 7;
          flex-shrink: 0;
        }

        .explore-btn:hover {
          background: white;
          color: #151515;
        }

        .music-player {
          position: absolute;
          left: clamp(22px, 3vw, 55px);
          bottom: 22px;
          z-index: 8;
          display: flex;
          align-items: center;
          gap: 12px;
          width: min(310px, 85%);
          padding: 8px 12px;
          background: rgba(12,10,20,.85);
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 5px;
          backdrop-filter: blur(12px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px);
          transition: .4s;
        }

        .music-panel.active .music-player {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition-delay: .4s;
        }

        .play-button {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 50%;
          background: #ffd21f;
          color: #17120a;
          font-size: 14px;
          cursor: pointer;
        }

        .player-details {
          flex: 1;
          min-width: 0;
        }

        .player-name {
          color: white;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .player-sub {
          font-size: 8px;
          color: #c1bacb;
          margin-top: 5px;
        }

        .player-track {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,.2);
          margin-top: 6px;
          overflow: hidden;
        }

        .player-progress {
          width: 35%;
          height: 100%;
          background: #ffd21f;
        }

        .player-time {
          color: white;
          font-size: 8px;
          flex-shrink: 0;
        }

        /* PRODUCT DETAILS */

        .details-page {
          position: fixed;
          inset: 0;
          z-index: 20;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          background: #101014;
          color: white;
          padding: 35px 5%;
          animation: detailsEnter .4s ease;
        }

        @keyframes detailsEnter {
          from {
            opacity: 0;
            transform: scale(.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .close-btn {
          position: absolute;
          top: 22px;
          right: 30px;
          width: 38px;
          height: 38px;
          background: #222229;
          color: white;
          border: 1px solid #555;
          font-size: 23px;
          cursor: pointer;
        }

        .close-btn:hover {
          background: #ffd21f;
          color: black;
        }

        .details-heading {
          padding-right: 50px;
          margin-bottom: 25px;
        }

        .details-heading small {
          color: #aaa;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .details-heading h1 {
          font-size: clamp(25px, 4vw, 43px);
          margin-top: 12px;
        }

        .details-heading p {
          color: #92929b;
          font-size: 12px;
          margin-top: 10px;
          max-width: 500px;
          line-height: 1.7;
        }

        .details-layout {
          display: grid;
          grid-template-columns: .8fr 1.5fr;
          align-items: center;
          gap: 35px;
          min-height: 60vh;
        }

        .product-image-box {
          width: 100%;
          height: 420px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .product-image {
          width: 100%;
          height: 100%;
          background-image: var(--detail-image);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          animation: imageEnter .7s ease;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .spec-card {
          min-height: 80px;
          padding: 17px;
          background: linear-gradient(145deg,#202027,#15151b);
          border-left: 3px solid #999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          transition: .3s;
        }

        .spec-card:hover {
          background: #292933;
          border-left-color: #ffd21f;
          transform: translateY(-3px);
        }

        .spec-label {
          color: #888;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .spec-value {
          color: white;
          font-size: 12px;
          font-weight: 700;
        }

        .details-footer {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #303038;
          padding-top: 20px;
          margin-top: 20px;
          color: #999;
          font-size: 10px;
          letter-spacing: 2px;
        }

        /* TABLET AND MOBILE */

        @media (max-width: 768px) {
          .music-panel {
            flex: .35;
          }

          .music-panel.active {
            flex: 5;
          }

          .accordion {
            gap: 2px;
          }

          .vertical-title {
            font-size: 7px;
            letter-spacing: 1px;
          }

          .vertical-content {
            padding: 12px 2px;
          }

          .expanded-content {
            inset: 0 0 66px 0;
            padding: 14px 13px 10px;
            overflow-y: auto;
            overflow-x: hidden;
            overscroll-behavior: contain;
            scrollbar-width: none;
            justify-content: flex-start;
          }

          .expanded-content::-webkit-scrollbar {
            display: none;
          }

          .expanded-number {
            font-size: 11px;
            margin-bottom: 7px;
          }

          .expanded-content h1 {
            font-size: clamp(17px, 5vw, 32px);
            line-height: 1.15;
            max-width: 100%;
          }

          .sub-title {
            font-size: 8px;
            letter-spacing: 1.5px;
            margin-top: 7px;
          }

          .description {
            max-width: 100%;
            font-size: 9px;
            line-height: 1.45;
            margin-top: 10px;
          }

          .explore-btn {
            display: block;
            position: relative;
            z-index: 10;
            width: fit-content;
            margin-top: 12px;
            margin-bottom: 8px;
            padding: 9px 13px;
            font-size: 8px;
            letter-spacing: 1px;
            flex-shrink: 0;
          }

          .music-player {
            left: 10px;
            bottom: 6px;
            width: calc(100% - 20px);
            min-height: 52px;
            padding: 7px 9px;
            gap: 9px;
            z-index: 8;
          }

          .play-button {
            width: 30px;
            height: 30px;
            font-size: 12px;
          }

          .player-name {
            font-size: 9px;
          }

          .player-sub {
            font-size: 7px;
          }

          .player-time {
            font-size: 7px;
          }

          .details-page {
            padding: 65px 18px 25px;
          }

          .details-layout {
            grid-template-columns: 1fr;
            gap: 12px;
            min-height: auto;
          }

          .product-image-box {
            height: 230px;
          }

          .spec-grid {
            gap: 8px;
          }

          .spec-card {
            min-height: 65px;
            padding: 12px;
          }

          .spec-value {
            font-size: 10px;
          }

          .close-btn {
            top: 15px;
            right: 18px;
          }
        }

        /* SHORT MOBILE HEIGHT - 303px */

        @media (max-width: 768px) and (max-height: 400px) {
          .expanded-content {
            inset: 0 0 62px 0;
            padding: 9px 13px 8px;
          }

          .expanded-number {
            font-size: 10px;
            margin-bottom: 5px;
          }

          .expanded-content h1 {
            font-size: 17px;
            line-height: 1.1;
          }

          .sub-title {
            font-size: 7px;
            margin-top: 5px;
          }

          .description {
            font-size: 8px;
            line-height: 1.35;
            margin-top: 7px;
          }

          .explore-btn {
            margin-top: 9px;
            margin-bottom: 6px;
            padding: 7px 11px;
            font-size: 8px;
          }

          .music-player {
            bottom: 5px;
            min-height: 48px;
          }
        }

        /* 350px MOBILE */

        @media (max-width: 350px) {
          .vertical-title {
            font-size: 6px;
            letter-spacing: .5px;
          }

          .panel-number {
            font-size: 10px;
          }

          .mini-icon {
            font-size: 17px;
          }

          .expanded-content {
            padding-left: 10px;
            padding-right: 10px;
          }

          .expanded-content h1 {
            font-size: 16px;
            line-height: 1.2;
            overflow-wrap: anywhere;
          }

          .description {
            font-size: 8px;
          }

          .explore-btn {
            padding: 7px 9px;
            font-size: 7px;
          }

          .music-player {
            width: calc(100% - 16px);
            left: 8px;
            gap: 7px;
            padding: 6px 7px;
          }

          .play-button {
            width: 28px;
            height: 28px;
          }

          .player-name {
            font-size: 8px;
          }
        }

        /* VERY SMALL MOBILE */

        @media (max-width: 320px) {
          .expanded-content {
            padding-left: 8px;
            padding-right: 8px;
          }

          .expanded-content h1 {
            font-size: 15px;
          }

          .description {
            font-size: 8px;
          }

          .explore-btn {
            font-size: 7px;
            padding: 7px 8px;
          }
        }

        /* DETAILS PAGE MOBILE */

        @media (max-width: 400px) {
          .details-page {
            padding: 60px 12px 20px;
          }

          .details-heading h1 {
            font-size: 22px;
          }

          .details-heading small {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .product-image-box {
            height: 190px;
          }

          .spec-grid {
            grid-template-columns: 1fr 1fr;
            gap: 7px;
          }

          .spec-card {
            min-height: 60px;
            padding: 9px;
          }

          .spec-label {
            font-size: 7px;
            letter-spacing: 1px;
          }

          .spec-value {
            font-size: 9px;
          }

          .details-footer {
            font-size: 7px;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <main className="accordion">
        {panels.map((panel, index) => (
          <section
            key={panel.no}
            className={`music-panel ${active === index ? "active" : ""}`}
            style={{
              "--panel-color": panel.color,
              "--panel-image": `url("${panel.image}")`
            }}
            onMouseEnter={() => {
              if (
                window.matchMedia(
                  "(hover: hover) and (pointer: fine)"
                ).matches
              ) {
                selectPanel(index);
              }
            }}
            onClick={() => selectPanel(index)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectPanel(index);
              }
            }}
          >
            <div className="main-image" />
            <div className="color-tint" />
            <div className="image-shade" />

            <div className="vertical-content">
              <span className="panel-number">{panel.no}</span>
              <span className="vertical-title">{panel.title}</span>
              <span className="mini-icon">♫</span>
            </div>

            <div className="expanded-content">
              <span className="expanded-number">{panel.no}</span>

              <h1>{panel.name}</h1>

              <span className="sub-title">{panel.title}</span>

              <p className="description">{panel.desc}</p>

              <button
                className="explore-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(panel);
                }}
              >
                EXPLORE NOW →
              </button>
            </div>

            <div className="music-player">
              <button
                className="play-button"
                onClick={(e) => handlePlay(e, index)}
                aria-label="Play or pause"
              >
                {playing && active === index ? "Ⅱ" : "▶"}
              </button>

              <div className="player-details">
                <div className="player-name">{panel.song}</div>

                <div className="player-sub">
                  MUSIC COLLECTION • 2026
                </div>

                <div className="player-track">
                  <div className="player-progress" />
                </div>
              </div>

              <span className="player-time">0:00</span>
            </div>
          </section>
        ))}
      </main>

      {selectedProduct && (
        <section className="details-page">
          <button
            className="close-btn"
            onClick={() => setSelectedProduct(null)}
            aria-label="Close details"
          >
            ×
          </button>

          <header className="details-heading">
            <small>{selectedProduct.no} / PRODUCT DETAILS</small>
            <h1>{selectedProduct.name}</h1>
            <p>{selectedProduct.desc}</p>
          </header>

          <div className="details-layout">
            <div
              className="product-image-box"
              style={{ background: selectedProduct.color }}
            >
              <div
                className="product-image"
                key={selectedProduct.no}
                style={{
                  "--detail-image": `url("${selectedProduct.image}")`
                }}
              />
            </div>

            <div className="spec-grid">
              {selectedProduct.specs.map((spec, index) => {
                const parts = spec.split(":");

                return (
                  <div className="spec-card" key={index}>
                    <span className="spec-label">
                      {parts[0].trim()}
                    </span>

                    <span className="spec-value">
                      {parts.slice(1).join(":").trim()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="details-footer">
            <span>PREMIUM INSTRUMENT COLLECTION</span>
            <span>{selectedProduct.no} / 07</span>
          </footer>
        </section>
      )}
    </div>
  );
}
