const STORAGE_KEY = "cable_rooms_v1";

function normalizeRoom(room) {
  const safeResult =
    typeof room.result === "object" && room.result !== null
      ? {
          lighting: Number(room.result.lighting) || 0,
          sockets: Number(room.result.sockets) || 0,
          appliances: Number(room.result.appliances) || 0,
          reserve: Number(room.result.reserve) || 0,
          total: Number(room.result.total) || 0,
        }
      : {
          lighting: 0,
          sockets: 0,
          appliances: 0,
          reserve: 0,
          total: Number(room.result) || 0,
        };

  return {
    ...room,
    result: safeResult,
  };
}

export function loadRooms() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const parsed = data ? JSON.parse(data) : [];

    if (!Array.isArray(parsed)) return [];

    return parsed.map(normalizeRoom);
  } catch (error) {
    console.error("Грешка при зареждане:", error);
    return [];
  }
}

export function saveRooms(rooms) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
  } catch (error) {
    console.error("Грешка при запис:", error);
  }
}