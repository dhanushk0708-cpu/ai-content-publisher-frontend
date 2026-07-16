import {
  FiActivity,
  FiYoutube,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

function StatsCards() {

  const cards = [

    {
      title: "SEO Generated",
      value: "Unlimited",
      subtitle: "Gemini AI",
      icon: <FiCpu />,
      color: "purple",
    },

    {
      title: "Videos Uploaded",
      value: "0",
      subtitle: "YouTube",
      icon: <FiYoutube />,
      color: "red",
    },

    {
      title: "System Status",
      value: "Online",
      subtitle: "All Services",
      icon: <FiCheckCircle />,
      color: "green",
    },

    {
      title: "Performance",
      value: "99.9%",
      subtitle: "API Success",
      icon: <FiActivity />,
      color: "blue",
    },

  ];

  return (

    <section className="stats-grid">

      {cards.map((card) => (

        <div
          className={`stats-card ${card.color}`}
          key={card.title}
        >

          <div className="stats-top">

            <div className="stats-icon">

              {card.icon}

            </div>

          </div>

          <h2>

            {card.value}

          </h2>

          <h4>

            {card.title}

          </h4>

          <p>

            {card.subtitle}

          </p>

        </div>

      ))}

    </section>

  );

}

export default StatsCards;