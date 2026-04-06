// export default function RoomList({ rooms, onDeleteRoom }) {
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
//             className="border rounded-xl p-4 flex items-center justify-between"
//           >
//             <div>
//               <h3 className="font-semibold">{room.name}</h3>
//               <p className="text-sm text-slate-500">
//                 {room.type} • {room.length} x {room.width} x {room.height} м
//               </p>
//               <p className="text-sm text-slate-700 mt-1">
//                 Кабел: <strong>{room.result} м</strong>
//               </p>
//             </div>

//             <button
//               onClick={() => onDeleteRoom(room.id)}
//               className="bg-red-500 text-white px-4 py-2 rounded-xl hover:opacity-90"
//             >
//               Изтрий
//             </button>
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
                <p>Осветление: <strong>{room.result.lighting} м</strong></p>
                <p>Контакти: <strong>{room.result.sockets} м</strong></p>
                <p>Консуматори: <strong>{room.result.appliances} м</strong></p>
                <p>Резерв: <strong>{room.result.reserve} м</strong></p>
                <p className="text-base pt-1">
                  Общо: <strong>{room.result.total} м</strong>
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