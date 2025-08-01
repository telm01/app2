import { Clock, Heart, Shield, Users, Stethoscope, Activity } from "lucide-react"


export default function DailyLifeSection() {
  const dailyLifeItems = [
    {
      icon: Clock,
      title: "Morning Diagnostics",
      description: "Start each day with precise, reliable measurements that healthcare professionals trust.",
      image: "with-czech.jpg",
      time: "6:00 AM",
    },
    {
      icon: Heart,
      title: "Patient Care Excellence",
      description: "Deliver exceptional patient care with instruments designed for accuracy and comfort.",
      image: "with-diasys.jpg",
      time: "10:00 AM",
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Monitor vital signs and patient progress with advanced technology throughout the day.",
      image: "award.jpg",
      time: "2:00 PM",
    },
    {
      icon: Shield,
      title: "Safety & Precision",
      description: "End each day knowing you've provided the safest, most precise care possible.",
      image: "ech-urs.jpg",
      time: "6:00 PM",
    },
  ];

 

  return (
    <section className="section-container">
      <div className="content-container">
        {/* Header */}
        <div className="header-container">
          <h2 className="header-title">Transforming Healthcare Daily</h2>
          <p className="header-subtitle">
            Discover how our precision medical instruments seamlessly integrate into healthcare routines, enhancing
            patient care from morning diagnostics to evening monitoring.
          </p>
        </div>

        {/* Daily Timeline */}
        <div className="timeline-grid">
          {dailyLifeItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="timeline-item">
                <div className="image-container">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="timeline-image"
                  />
                  <div className="time-badge">{item.time}</div>
                </div>
                <div className="item-content">
                  <div className="item-header">
                    <div className="icon-container">
                      <IconComponent className="icon" />
                    </div>
                    <h3 className="item-title">{item.title}</h3>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

       
        
        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Daily Practice?</h3>
            <p className="cta-description">
              Join thousands of healthcare professionals who trust our instruments every day.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Request Demo</button>
              <button className="cta-button secondary">View Products</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

