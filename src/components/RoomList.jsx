export default function RoomList({ rooms, onDeleteRoom }) {
  if (rooms.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-2">Запазени стаи</h2>
        <p className="text-slate-500">Все още няма добавени стаи.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Запазени стаи</h2>

      <div className="space-y-3">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold">{room.name}</h3>
              <p className="text-sm text-slate-500">
                {room.type} • {room.length} x {room.width} x {room.height} м
              </p>
              <p className="text-sm text-slate-700 mt-1">
                Кабел: <strong>{room.result} м</strong>
              </p>
            </div>

            <button
              onClick={() => onDeleteRoom(room.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
            >
              Изтрий
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}