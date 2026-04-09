
// export default function RoomList({ rooms, onDeleteRoom, onEditRoom }) {
//   if (rooms.length === 0) {
//     return (
//       <div className="bg-white rounded-2xl shadow-md p-6">
//         <h2 className="text-xl font-bold mb-2">Запазени стаи</h2>
//         <p className="text-slate-500">Все още няма добавени стаи.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6">
//       <h2 className="text-xl font-bold mb-4">Запазени стаи</h2>

//       <div className="space-y-3">
//         {rooms.map((room) => (
//           <div
//             key={room.id}
//             className="border rounded-xl p-4 flex flex-col gap-4"
//           >
//             <div>
//               <h3 className="font-semibold">{room.name}</h3>
//               <p className="text-sm text-slate-500">
//                 {room.type} • {room.length} x {room.width} x {room.height} м
//               </p>

//               <div className="mt-3 text-sm space-y-1 text-slate-700">
//                 <p>
//                   Осветление ({room.lightingCableType || "3x1.5"}):{" "}
//                   <strong>
//                     {Number(room.result?.lighting || 0).toFixed(2)} м
//                   </strong>
//                 </p>
//                 <p>
//                   Контакти ({room.socketCableType || "3x2.5"}):{" "}
//                   <strong>
//                     {Number(room.result?.sockets || 0).toFixed(2)} м
//                   </strong>
//                 </p>
//                 <p>
//                   Специализирани линии ({room.applianceCableType || "3x4"}):{" "}
//                   <strong>
//                     {Number(room.result?.appliances || 0).toFixed(2)} м
//                   </strong>
//                 </p>
//                 <p>
//                   Резерв:{" "}
//                   <strong>
//                     {Number(room.result?.reserve || 0).toFixed(2)} м
//                   </strong>
//                 </p>
//                 <p className="text-base pt-1">
//                   Общо:{" "}
//                   <strong>
//                     {Number(room.result?.total || 0).toFixed(2)} м
//                   </strong>
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() => onEditRoom(room)}
//                 className="bg-amber-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
//               >
//                 Редакция
//               </button>

//               <button
//                 onClick={() => onDeleteRoom(room.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
//               >
//                 Изтрий
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function RoomList({ rooms, onDeleteRoom, onEditRoom }) {
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
            className="border rounded-xl p-4 flex flex-col gap-4"
          >
            <div>
              <h3 className="font-semibold">{room.name}</h3>
              <p className="text-sm text-slate-500">
                {room.type} • {room.length} x {room.width} x {room.height} м
              </p>

              <div className="mt-3 text-sm space-y-1 text-slate-700">
                <p>
                  Осветление ({room.lightingCableType || "3x1.5"}):{" "}
                  <strong>
                    {Number(room.result?.lighting || 0).toFixed(2)} м
                  </strong>
                </p>
                <p>
                  Контакти ({room.socketCableType || "3x2.5"}):{" "}
                  <strong>
                    {Number(room.result?.sockets || 0).toFixed(2)} м
                  </strong>
                </p>
                <p>
                  Специализирани линии:{" "}
                  <strong>
                    {Number(room.result?.appliances || 0).toFixed(2)} м
                  </strong>
                </p>

                {Array.isArray(room.result?.specialCircuits) &&
                  room.result.specialCircuits.length > 0 && (
                    <div className="pl-3 pt-1 space-y-1 text-slate-600">
                      {room.result.specialCircuits.map((item) => (
                        <p key={item.id}>
                          - {item.label} ({item.cableType}):{" "}
                          <strong>{Number(item.meters || 0).toFixed(2)} м</strong>
                        </p>
                      ))}
                    </div>
                  )}

                <p>
                  Резерв:{" "}
                  <strong>
                    {Number(room.result?.reserve || 0).toFixed(2)} м
                  </strong>
                </p>
                <p className="text-base pt-1">
                  Общо:{" "}
                  <strong>
                    {Number(room.result?.total || 0).toFixed(2)} м
                  </strong>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => onEditRoom(room)}
                className="bg-amber-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
              >
                Редакция
              </button>

              <button
                onClick={() => onDeleteRoom(room.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
              >
                Изтрий
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}