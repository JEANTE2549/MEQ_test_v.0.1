import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Student() {
  const [caseData, setCaseData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [step, setStep] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("meqCase");
    if (stored) {
      const parsed = JSON.parse(stored);
      setCaseData(parsed);
      setAnswers(new Array(parsed.steps.length).fill(""));
    }
  }, []);

  const handleNext = () => {
    if (step < caseData.steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("meqAnswers", JSON.stringify(answers));
      router.push("/result");
    }
  };

  if (!caseData) return <p>No MEQ case found. Professor must create one first.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Practice</h1>
      <h2>{caseData.title}</h2>
      <p><b>Step {step + 1}:</b> {caseData.steps[step].question}</p>
      <textarea
        rows={4}
        style={{ width: "100%" }}
        value={answers[step]}
        onChange={(e) => {
          const newAns = [...answers];
          newAns[step] = e.target.value;
          setAnswers(newAns);
        }}
      />
      <br />
      <button onClick={handleNext} style={{ marginTop: "1rem" }}>
        {step === caseData.steps.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
