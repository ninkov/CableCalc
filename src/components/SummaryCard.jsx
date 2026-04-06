export default function SummaryCard({ rooms }) {
  const totalRooms = rooms.length;

  const totals = rooms.reduce(
    (acc, room) => {
      acc.lighting += Number(room.result?.lighting) || 0;
      acc.sockets += Number(room.result?.sockets) || 0;
      acc.appliances += Number(room.result?.appliances) || 0;
      acc.reserve += Number(room.result?.reserve) || 0;
      acc.total += Number(room.result?.total) || 0;
      return acc;
    },
    {
      lighting: 0,
      sockets: 0,
      appliances: 0,
      reserve: 0,
      total: 0,
    }
  );

  return (
    <div className="bg-slate-900 text-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-3">Общо</h2>

      <p>Брой стаи: {totalRooms}</p>

      <div className="mt-4 space-y-1 text-sm">
        <p>
          Осветление: <strong>{totals.lighting.toFixed(2)} м</strong>
        </p>
        <p>
          Контакти: <strong>{totals.sockets.toFixed(2)} м</strong>
        </p>
        <p>
          Консуматори: <strong>{totals.appliances.toFixed(2)} м</strong>
        </p>
        <p>
          Резерв: <strong>{totals.reserve.toFixed(2)} м</strong>
        </p>
      </div>

      <p className="mt-4 text-lg">
        Общ кабел: <strong>{totals.total.toFixed(2)} м</strong>
      </p>
    </div>
  );
}