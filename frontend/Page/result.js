import { useEffect, useState } from "react";

export default function Result() {
  const [caseData, setCaseData] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedCase = localStorage.getItem("meqCase");
    const storedAns = localStorage.getItem("meqAnswers");
    if (storedCase && storedAns) {
      setCaseData(JSON.parse(storedCase));
      setAnswers(JSON.parse(storedAns));
    }
  }, []);

  if (!caseData) return <p>No results found.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Results</h1>
      <h2>{caseData.title}</h2>
      {caseData.steps.map((s, i) => (
        <div key={i} style={{ margin: "1rem 0", borderBottom: "1px solid gray" }}>
          <p><b>Q{i + 1}:</b> {s.question}</p>
          <p><b>Your Answer:</b> {answers[i]}</p>
          <p><b>Model Answer:</b> {s.model}</p>
        </div>
      ))}
    </div>
  );
}
