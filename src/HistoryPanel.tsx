import React from 'react';
import './csss/HistoryPanel.css';

interface HistoryPanelProps {
  title: string;
  events: { year: string; description: string }[];
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ title, events }) => {
  return (
    <div className="history-panel">
      <h2>{title}</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event">
            <div className="year">{event.year}</div>
            <div className="description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;