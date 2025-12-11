import Quiz from "./components/Quiz";
import "./index.css";

export default function App() {
  return (
    <div className="outer-bg">
      <div className="outer-frame">
        
        {/* Main actual white card (ONLY this card exists) */}
        <div className="main-rect">

          {/* Paw + bubble ALWAYS inside this card */}
          <img 
            src="/assets/paw.gif" 
            alt="Paw" 
            className="paw-inside"
          />

                    {/* Best of Luck SVG bubble (pixel shape, not a plain rectangle) */}
          <div className="bubble-wrapper" aria-hidden>
            <svg
              className="bubble-svg"
              width="196.5"
              height="96.05"
              viewBox="0 0 196.5 96.05"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Best of Luck speech bubble"
            >
              <path
                d="M6 0.5H190.5C193.261 0.5 195.5 2.73858 195.5 5.5V65.5C195.5 68.2614 193.261 70.5 190.5 70.5H65L25 95.5L35 70.5H6C3.23858 70.5 1 68.2614 1 65.5V5.5C1 2.73858 3.23858 0.5 6 0.5Z"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="1"
              />
              <text
                x="50%"
                y="47%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontSize="16"
                fontWeight="700"
                fill="#0B3B4B"
              >
                Best of Luck!
              </text>
            </svg>
          </div>


          {/* Quiz UI */}
          <Quiz />
        </div>
      </div>
    </div>
  );
}
