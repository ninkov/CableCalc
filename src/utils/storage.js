const STORAGE_KEY = "cable_rooms_v1";

export function loadRooms() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
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