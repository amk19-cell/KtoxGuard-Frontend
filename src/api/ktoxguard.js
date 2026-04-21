const API_BASE = "https://ktoxguard-api.onrender.com";

export async function analyzeText(text, platform = null, author = null) {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, platform, author }),
  });
  return response.json();
}

export async function getStats() {
  const response = await fetch(`${API_BASE}/stats`);
  return response.json();
}

// Pour les mockés en attendant l'authentification
export async function login(email, password) {
  // À remplacer par votre vrai endpoint d'auth
  // Pour l'instant, simulation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        role: "agency",
        sub_role: "admin", // ou "manager", "artist"
        agencyName: "SM Entertainment",
        managerName: "Kim SooYoung",
        artistId: 1,
      });
    }, 500);
  });
}
