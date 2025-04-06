import React, { useEffect, useState } from 'react';

const QuizReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const authToken = localStorage.getItem('token'); // Make sure to store user token in localStorage after login

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/report/myscores', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken
          }
        });
        const data = await res.json();
        setReports(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch reports", error);
        setLoading(false);
      }
    };

    fetchReports();
  }, [authToken]);

  if (loading) return <p>Loading quiz reports...</p>;

  return (
    <div>
      <h2>Your Quiz Reports</h2>
      {reports.length === 0 ? (
        <p>No reports available</p>
      ) : (
        <ul>
          {reports.map((report, idx) => (
            <li key={idx} style={{ marginBottom: '15px' }}>
              <strong>Category:</strong> {report.category}<br />
              <strong>Difficulty:</strong> {report.difficulty}<br />
              <strong>Score:</strong> {report.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizReportList;
