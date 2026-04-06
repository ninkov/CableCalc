export default function SummaryCard({ rooms }) {
  const totalRooms = rooms.length;
  const totalCable = rooms.reduce((sum, room) => sum + room.result, 0);

  return (
    <div className="bg-slate-900 text-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-3">Общо</h2>
      <p>Брой стаи: {totalRooms}</p>
      <p className="mt-2 text-lg">
        Общ кабел: <strong>{totalCable.toFixed(2)} м</strong>
      </p>
    </div>
  );
}