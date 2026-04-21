export const mockArtists = [
  {
    id: 1,
    name: "Kim Jisoo",
    group: "BLACKPINK",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    threatLevel: "low", // low, medium, high, critical
    threatCount24h: 3,
    dominantThreat: "hate_speech",
    threats: [
      { type: "hate_speech", date: "2025-04-21T10:00:00", platform: "Twitter" },
      { type: "death_threat", date: "2025-04-21T09:30:00", platform: "Instagram" },
    ],
  },
  {
    id: 2,
    name: "Park Jimin",
    group: "BTS",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    threatLevel: "critical",
    threatCount24h: 27,
    dominantThreat: "death_threat",
  },
];

export const mockAlerts = [
  { id: 1, artistId: 2, artistName: "Park Jimin", type: "death_threat", platform: "Twitter", timestamp: "2025-04-21T10:30:00", handled: false },
  { id: 2, artistId: 2, artistName: "Park Jimin", type: "death_threat", platform: "Instagram", timestamp: "2025-04-21T09:45:00", handled: false },
];

export const mockGlobalStats = {
  totalToday: 1247,
  totalThreatsToday: 342,
  artistsUnderAlert: 3,
  raidsThisMonth: 2,
  toxicityTrend: [12, 19, 15, 22, 28, 24, 30, 35, 32, 28, 33, 38, 42, 45, 40, 38, 44, 50, 48, 52, 55, 58, 60, 55, 50, 48, 52, 56, 60, 65],
};

export const mockSecurityLevel = "critical"; // calm, vigilance, critical
