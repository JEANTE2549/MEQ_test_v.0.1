import { useState } from "react";

export default function Professor() {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState([{ question: "", model: "" }]);

  const addStep = () => {
    setSteps([...steps, { question: "", model: "" }]);
  };

  const saveCase = () => {
    localStorage.setItem("meqCase", JSON.stringify({ title, steps }));
    alert("Case saved!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Professor Dashboard</h1>
      <h2>Create MEQ Case</h2>
      <input
        placeholder="Case Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {steps.map((s, i) => (
        <div key={i} style={{ margin: "1rem 0" }}>
          <input
            placeholder={`Step ${i + 1} Question`}
            value={s.question}
            onChange={(e) => {
              const newSteps = [...steps];
              newSteps[i].question = e.target.value;
              setSteps(newSteps);
            }}
          />
          <input
            placeholder="Model Answer"
            value={s.model}
            onChange={(e) => {
              const newSteps = [...steps];
              newSteps[i].model = e.target.value;
              setSteps(newSteps);
            }}
          />
        </div>
      ))}
      <button onClick={addStep}>+ Add Step</button>
      <br />
      <button onClick={saveCase} style={{ marginTop: "1rem" }}>
        Save Case
      </button>
    </div>
  );
}
