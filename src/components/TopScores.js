import React, { useEffect, useState } from 'react';
import './TopScores.css'; // Create and import this CSS for styles

const TopScores = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/report/all');
        const data = await res.json();

        // Sort scores from highest to lowest
        const sorted = data.sort((a, b) => b.score - a.score);
        setScores(sorted);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top scores:", error);
        setLoading(false);
      }
    };

    fetchScores();
  }, []);

  if (loading) return <p>Loading top scores...</p>;

  return (
    <div className="top-scores-container">
      <h2>🏆 Top Quiz Scores</h2>
      {scores.length === 0 ? (
        <p>No scores available</p>
      ) : (
        <div className="score-list">
          {scores.map((item, idx) => (
            <div className="score-card" key={idx}>
              <h5><strong>Name:</strong> {item.name}</h5>
              <p><strong>Score:</strong> {item.score}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Difficulty:</strong> {item.difficulty}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopScores;
