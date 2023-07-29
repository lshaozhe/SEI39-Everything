import React from 'react';

export default function App() {
  return (
    <div className="App">
      <section>
        <div id="control-panel">
          <h2 id="stop" className="button">
            Stop
          </h2>
          <h2 id="slow" className="button">
            Slow
          </h2>
          <h2 id="go" className="button">
            Go
          </h2>
        </div>
        <div id="traffic-lights">
          <div className="bulb"></div>
          <div className="bulb"></div>
          <div className="bulb"></div>
        </div>
      </section>
    </div>
  );
}
