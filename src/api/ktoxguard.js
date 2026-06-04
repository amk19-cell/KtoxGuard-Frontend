const API_BASE = "https://ktoxguard-api-production.up.railway.app";

export async function analyzeText(text, platform = null, author = null, lang = "en") {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, platform, author, lang }),
  });
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

export async function getStats() {
  const response = await fetch(`${API_BASE}/stats`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

export async function getMessages(limit = 50, skip = 0) {
  const response = await fetch(`${API_BASE}/messages?limit=${limit}&skip=${skip}`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

export async function login(email, password) {
  // Simulation existante
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        role: "agency",
        sub_role: "admin",
        agencyName: "SM Entertainment",
        managerName: "Kim SooYoung",
        artistId: 1,
      });
    }, 500);
  });
}
