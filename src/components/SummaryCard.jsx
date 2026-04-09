// import { getCableTypeTotals } from "../utils/cableTotals";

// export default function SummaryCard({ rooms }) {
//   const totalRooms = rooms.length;

//   const totals = rooms.reduce(
//     (acc, room) => {
//       acc.lighting += Number(room.result?.lighting) || 0;
//       acc.sockets += Number(room.result?.sockets) || 0;
//       acc.appliances += Number(room.result?.appliances) || 0;
//       acc.reserve += Number(room.result?.reserve) || 0;
//       acc.total += Number(room.result?.total) || 0;
//       return acc;
//     },
//     {
//       lighting: 0,
//       sockets: 0,
//       appliances: 0,
//       reserve: 0,
//       total: 0,
//     }
//   );

//   const cableTypeTotals = getCableTypeTotals(rooms);

//   return (
//     <div className="bg-slate-900 text-white rounded-2xl shadow-md p-6">
//       <h2 className="text-xl font-bold mb-3">Общо</h2>

//       <p>Брой стаи: {totalRooms}</p>

//       <div className="mt-4 space-y-1 text-sm">
//         <p>
//           Осветление: <strong>{totals.lighting.toFixed(2)} м</strong>
//         </p>
//         <p>
//           Контакти: <strong>{totals.sockets.toFixed(2)} м</strong>
//         </p>
//         <p>
//           Консуматори: <strong>{totals.appliances.toFixed(2)} м</strong>
//         </p>
//         <p>
//           Резерв: <strong>{totals.reserve.toFixed(2)} м</strong>
//         </p>
//       </div>

//       <div className="mt-5 border-t border-slate-700 pt-4">
//         <h3 className="font-semibold mb-2">По вид кабел</h3>

//         {cableTypeTotals.length === 0 ? (
//           <p className="text-sm text-slate-300">Няма данни.</p>
//         ) : (
//           <div className="space-y-1 text-sm">
//             {cableTypeTotals.map((item) => (
//               <p key={item.type}>
//                 {item.type}: <strong>{item.meters.toFixed(2)} м</strong>
//               </p>
//             ))}
//           </div>
//         )}
//       </div>

//       <p className="mt-4 text-lg">
//         Общ кабел: <strong>{totals.total.toFixed(2)} м</strong>
//       </p>
//     </div>
//   );
// }
import { getCableTypeTotals } from "../utils/cableTotals";

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

  const cableTypeTotals = getCableTypeTotals(rooms);

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
          Специализирани линии:{" "}
          <strong>{totals.appliances.toFixed(2)} м</strong>
        </p>
        <p>
          Резерв: <strong>{totals.reserve.toFixed(2)} м</strong>
        </p>
      </div>

      <div className="mt-5 border-t border-slate-700 pt-4">
        <h3 className="font-semibold mb-2">По вид кабел</h3>

        {cableTypeTotals.length === 0 ? (
          <p className="text-sm text-slate-300">Няма данни.</p>
        ) : (
          <div className="space-y-1 text-sm">
            {cableTypeTotals.map((item) => (
              <p key={item.type}>
                {item.type}: <strong>{item.meters.toFixed(2)} м</strong>
              </p>
            ))}
          </div>
        )}
      </div>

      <p className="mt-4 text-lg">
        Общ кабел: <strong>{totals.total.toFixed(2)} м</strong>
      </p>
    </div>
  );
}