import React from 'react';
import './csss/HistoryPanel.css';

interface HistoryPanelProps {
  title: string;
  events: { year: string; description: string; image: string; Title: string }[];
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ title, events }) => {
  return (
    <div className="history-section">
      <div className="container">
        <div className="history-header">
          <h2>{title}</h2>
          <p>
            Our history shows our determination to reach our goal.
            Obstacles that we had overcome had made us stronger and more experienced than past
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>

            <div className="timeline-items">
              {events.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className={`timeline-content ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
                    <div className="timeline-event-container">
                      <div className="timeline-card">
                        <div className="card-content">
                          <div className="timeline-card-header">
                            <span className="timeline-year">{event.year}</span>
                            <div className="timeline-card-title">{event.Title}</div>
                          </div>
                          
                          {event.image && (
                            <img 
                              src={event.image} 
                              alt={`Event from ${event.year}`} 
                              className="timeline-image"
                            />
                          )}
                        </div>
                      </div>
                      <div className="timeline-description">
                        {event.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPanel;