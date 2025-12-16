export default function handler(req, res) {
  // Example API that returns the summary used by frontend
  const tiles = [
    { name: "Sample Tile", percentageValue: 75 },
    { name: "Another Tile", percentageValue: 45 },
    { name: "Third Tile", percentageValue: 60 },
    { name: "Fourth Tile", percentageValue: 30 },
  ];

  const total = tiles.reduce((s, t) => s + Number(t.percentageValue || 0), 0);
  const average = tiles.length ? total / tiles.length : 0;

  res.status(200).json({ tiles, total, average });
}
