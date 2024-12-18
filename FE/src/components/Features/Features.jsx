import "./Features.css";
import Title from "../Title/Title.jsx";
import FeatureCard from "../FeatureCard/FeatureCard.jsx";

const Features = () => {
  const features = [
    {
      icon: "utensil",
      title: "Mindful Recipes",
      description:
        "Explore a collection of nourishing recipes designed to enhance your relationship with food. Each recipe focuses on balanced nutrition and mindful eating practices.",
    },
    {
      icon: "thinking",
      title: "Mindfulness Activities",
      description:
        "Engage in food-related mindfulness exercises to develop a deeper connection with your eating habits. Practice gratitude, sensory exploration, and mindful eating techniques.",
    },
    {
      icon: "heart",
      title: "Emotional Eating Support",
      description:
        "Learn strategies to recognize and manage emotional eating patterns. Develop a healthier relationship with food by understanding your emotions and triggers.",
    },
  ];
  return (
    <div className="features-container">
      <div className="features-title">
        <Title
          text="Transform Your Food Journey"
          level={1}
          style={{
            color: "var(--color-accent-a40)",
          }}
        />
        <Title
          text="Our comprehensive tools and features are designed to help you develop a more conscious and positive relationship with food, combining mindfulness practices with practical approaches."
          level={4}
        />
        <div className="features">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
