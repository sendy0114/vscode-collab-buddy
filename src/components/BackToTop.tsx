import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BUTTON_SIZE = 48;
const WAVE_AMPLITUDE = 2;
const WAVE_FREQUENCY = 0.5;

function getCurvedWavePath(fillPercent, phase = 0) {
  const width = BUTTON_SIZE;
  const height = BUTTON_SIZE;
  const y = height - fillPercent * height;
  let path = `M 0 ${y}`;
  for (let i = 0; i <= width; i += 2) {
    const x = i;
    const angle = (x / width) * Math.PI * 2 * WAVE_FREQUENCY + phase;
    const waveY = y + Math.sin(angle) * WAVE_AMPLITUDE;
    path += ` L${x} ${waveY}`;
  }
  path += ` L${width} ${height} L0 ${height} Z`;
  return path;
}

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fillPercent, setFillPercent] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const footer = document.querySelector('footer');
      const footerTop = footer ? footer.getBoundingClientRect().top + scrollTop : docHeight;
      const footerDistance = footerTop - window.innerHeight;
      const percent = Math.min(1, Math.max(0, scrollTop / footerDistance));
      setFillPercent(percent);
      setIsVisible(scrollTop > 300);
      setPhase(scrollTop / 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wavePath = getCurvedWavePath(fillPercent, phase);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg overflow-hidden hover:scale-110 transition-all duration-300 bg-primary"
          aria-label="Back to top"
          style={{ width: BUTTON_SIZE, height: BUTTON_SIZE, minWidth: BUTTON_SIZE, position: "fixed" }}
        >
          {/* Water wave/background */}
          <svg
            width={BUTTON_SIZE}
            height={BUTTON_SIZE}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          >
            <path d={wavePath} fill="#f9fafcff" />
          </svg>
          {/* Arrow: dry part white, submerged part black using masks */}
          <svg
            width={BUTTON_SIZE / 2}
            height={BUTTON_SIZE / 2}
            viewBox="0 0 24 24"
            style={{ zIndex: 10, position: 'relative' }}
          >
            <defs>
              {/* Mask for submerged (black!) part: only below the wave */}
              <mask id="submerged">
                <rect x="0" y="0" width="24" height="24" fill="black" />
                <path
                  d={getCurvedWavePath(fillPercent, phase)}
                  fill="white"
                  transform="scale(0.5 0.5)" // fit mask to arrow size
                />
              </mask>
              {/* Mask for dry (white) part: only above the wave */}
              <mask id="dry">
                <rect x="0" y="0" width="24" height="24" fill="white" />
                <path
                  d={getCurvedWavePath(fillPercent, phase)}
                  fill="black"
                  transform="scale(0.5 0.5)"
                />
              </mask>
            </defs>
            {/* Arrow part submerged (under the wave) is black */}
            <g mask="url(#submerged)">
              <ArrowUp width={24} height={24} color="black" />
            </g>
            {/* Arrow part above the wave is white */}
            <g mask="url(#dry)">
              <ArrowUp width={24} height={24} color="white" />
            </g>
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
