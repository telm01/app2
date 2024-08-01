import React from 'react';
import './csss/HistoryPanel.css';

interface HistoryPanelProps {
  title: string;
  events: { year: string; description: string, image: string }[];
  
}

const HistoryPanel: React.FC<HistoryPanelProps> = ({ title, events,}) => {
  return (
    <div className="history-panel">
      
      <h2>{title}</h2>
      
      <div className="events-container">
        {events.map((event, index, ) => (
          <div key={index} className="event">
          <img className="image"src={event.image}></img>
            <div className="year">{event.year}</div>
            <div className="description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;