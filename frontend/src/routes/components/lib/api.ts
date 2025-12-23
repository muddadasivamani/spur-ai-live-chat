const API = "http://localhost:4000/chat";

export async function sendMessage(message, sessionId) {
  const res = await fetch(`${API}/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, sessionId })
  });
  return res.json();
}

export async function getHistory(sessionId) {
  const res = await fetch(`${API}/history/${sessionId}`);
  return res.json();
}
