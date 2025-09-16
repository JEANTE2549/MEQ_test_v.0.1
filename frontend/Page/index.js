import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (role === "professor") {
      router.push("/professor");
    } else if (role === "student") {
      router.push("/student");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MEQ Mock Platform</h1>
      <label>Select Role: </label>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="">-- Choose --</option>
        <option value="student">Student</option>
        <option value="professor">Professor</option>
      </select>
      <button onClick={handleLogin} style={{ marginLeft: "1rem" }}>
        Enter
      </button>
    </div>
  );
}
