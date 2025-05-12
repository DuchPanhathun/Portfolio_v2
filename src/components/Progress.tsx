import React from "react";
import "../styles/progress.css"

const SkillsSection: React.FC = () => {
  const skills = [
    { name: "HTML5", level: 90, color: "#E44D26" },  // HTML5 color
    { name: "CSS3", level: 90, color: "#264DE4" },   // CSS3 color
    { name: "JS / jQuery", level: 80, color: "#F7DF1E" },  // JavaScript color
    { name: "Vue.js", level: 70, color: "#41B883" },  // Vue.js color
    { name: "PHP / MySQL", level: 75, color: "#777BB3" },  // PHP color
    { name: "Laravel", level: 60, color: "#FF2D20" },  // Laravel color
    { name: "Photoshop", level: 80, color: "#31A8FF" },  // Photoshop color
    { name: "Illustrator", level: 75, color: "#FF9A00" },  // Illustrator color
  ];

  return (
    <main className="progress-container">
      <div className="progress">
        <section id="skills">
          <article className="skills">
            {skills.map((skill, index) => (
              <div 
                className="t-6" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p data-value={`${skill.level}%`}>{skill.name}</p>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  />
                </div>
              </div>
            ))}
          </article>
        </section>
      </div>
    </main>
  );
};

export default SkillsSection;
  