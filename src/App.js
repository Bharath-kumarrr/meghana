import React from 'react';
import './App.css';
import SocialLinks from './SocialLinks';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Pallavi Yellisetty! <span role="img" aria-label="wave">👋</span></h2>
        <div className="profile-picture">
          <img src="/images/my-picture.jpg" alt="Meghana Katraju" />
        </div>
        <div className="intro">
          <h3>About Me</h3>
          <p>
          Data Engineer with 3 years of experience in building and optimizing data pipelines, ETL processes, and scalable architectures for big data platforms. Proficient in Apache Spark, Python, Scala, and AWS, with a strong focus on improving data quality, system efficiency, and delivering actionable insights. Adept at collaborating with cross-functional teams to implement solutions that meet business goals and technical requirements.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>
            <strong>University of Texas at Arlington</strong><br />
            Master of Science in Computer Science<br />
            [2024]
          </p>
          <p>
            <strong>Jawaharlal Nehru Technological University</strong><br />
            Bachelor of Computer Science<br />
            [2022]
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">Java</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">SQL</li>
            <li className="skill-item">Apache Spark</li>
            <li className="skill-item">Hadoop</li>
            <li className="skill-item">Hive</li>
            <li className="skill-item">Kafka</li>
            <li className="skill-item">AWS</li>
            <li className="skill-item">Git</li>
            <li className="skill-item">HDFS</li>
            <li className="skill-item">Apache Nifi</li>
            <li className="skill-item">Tableau</li>
            <li className="skill-item">Airflow</li>
            <li className="skill-item">Power BI</li>
            <li className="skill-item">PySpark</li>
            <li className="skill-item">NumPy</li>
            <li className="skill-item">C++</li>
          </ul>
        </div>
        <SocialLinks />
      </header>
    </div>
  );
}

export default App;






