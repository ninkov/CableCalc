import { useEffect, useState } from "react";
import RoomForm from "./components/RoomForm";
import RoomList from "./components/RoomList";
import SummaryCard from "./components/SummaryCard";
import { calculateCable } from "./utils/calculateCable.js";
import { loadRooms, saveRooms } from "./utils/storage";

export default function App() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const storedRooms = loadRooms();
    setRooms(storedRooms);
  }, []);

  useEffect(() => {
    saveRooms(rooms);
  }, [rooms]);

  function handleAddRoom(roomData) {
    const result = calculateCable(roomData);

    const newRoom = {
      id: crypto.randomUUID(),
      ...roomData,
      result,
    };

    setRooms((prev) => [...prev, newRoom]);
  }

  function handleDeleteRoom(id) {
    setRooms((prev) => prev.filter((room) => room.id !== id));
  }

  function handleClearAll() {
    const confirmed = window.confirm("Сигурен ли си, че искаш да изтриеш всички стаи?");
    if (!confirmed) return;
    setRooms([]);
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Калкулатор за кабел</h1>
          <p className="text-slate-600 mt-2">
            Версия 1: стаи, метраж и общ резултат
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          <RoomForm onAddRoom={handleAddRoom} />

          <div className="space-y-6">
            <SummaryCard rooms={rooms} />
            <RoomList rooms={rooms} onDeleteRoom={handleDeleteRoom} />

            {rooms.length > 0 && (
              <button
                onClick={handleClearAll}
                className="w-full bg-white border border-slate-300 rounded-2xl py-3 font-medium hover:bg-slate-50"
              >
                Изчисти всички стаи
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}