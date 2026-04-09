// import { useEffect, useState } from "react";
// import RoomForm from "./components/RoomForm";
// import RoomList from "./components/RoomList";
// import SummaryCard from "./components/SummaryCard";
// import { calculateCable } from "./utils/calculateCable";
// import { loadRooms, saveRooms } from "./utils/storage";

// export default function App() {
//   const [rooms, setRooms] = useState([]);
//   const [editingRoom, setEditingRoom] = useState(null);

//   useEffect(() => {
//     const storedRooms = loadRooms();
//     setRooms(storedRooms);
//   }, []);

//   useEffect(() => {
//     saveRooms(rooms);
//   }, [rooms]);

//   function handleSaveRoom(roomData) {
//     const result = calculateCable(roomData);

//     if (roomData.id) {
//       const updatedRoom = {
//         ...roomData,
//         result,
//       };

//       setRooms((prev) =>
//         prev.map((room) => (room.id === roomData.id ? updatedRoom : room))
//       );

//       setEditingRoom(null);
//       return;
//     }

//     const newRoom = {
//       id: crypto.randomUUID(),
//       ...roomData,
//       result,
//     };

//     setRooms((prev) => [...prev, newRoom]);
//   }

//   function handleDeleteRoom(id) {
//     setRooms((prev) => prev.filter((room) => room.id !== id));

//     if (editingRoom?.id === id) {
//       setEditingRoom(null);
//     }
//   }

//   function handleEditRoom(room) {
//     setEditingRoom(room);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function handleCancelEdit() {
//     setEditingRoom(null);
//   }

//   function handleClearAll() {
//     const confirmed = window.confirm(
//       "Сигурен ли си, че искаш да изтриеш всички стаи?"
//     );
//     if (!confirmed) return;

//     setRooms([]);
//     setEditingRoom(null);
//   }

//   return (
//     <div className="min-h-screen bg-slate-100">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold">Калкулатор за кабел</h1>
//           <p className="text-slate-600 mt-2">
//             Версия 1.2: сечения на кабела и обобщение по вид кабел
//           </p>
//         </header>

//         <div className="grid lg:grid-cols-2 gap-6">
//           <RoomForm
//             onSaveRoom={handleSaveRoom}
//             editingRoom={editingRoom}
//             onCancelEdit={handleCancelEdit}
//           />

//           <div className="space-y-6">
//             <SummaryCard rooms={rooms} />

//             <RoomList
//               rooms={rooms}
//               onDeleteRoom={handleDeleteRoom}
//               onEditRoom={handleEditRoom}
//             />

//             {rooms.length > 0 && (
//               <button
//                 onClick={handleClearAll}
//                 className="w-full bg-white border border-slate-300 rounded-2xl py-3 font-medium hover:bg-slate-50"
//               >
//                 Изчисти всички стаи
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import RoomForm from "./components/RoomForm";
import RoomList from "./components/RoomList";
import SummaryCard from "./components/SummaryCard";
import { calculateCable } from "./utils/calculateCable";
import { loadRooms, saveRooms } from "./utils/storage";

export default function App() {
  const [rooms, setRooms] = useState(() => loadRooms());
  const [editingRoom, setEditingRoom] = useState(null);

  useEffect(() => {
    saveRooms(rooms);
  }, [rooms]);

  function handleSaveRoom(roomData) {
    const result = calculateCable(roomData);

    if (roomData.id) {
      const updatedRoom = {
        ...roomData,
        result,
      };

      setRooms((prev) =>
        prev.map((room) => (room.id === roomData.id ? updatedRoom : room))
      );

      setEditingRoom(null);
      return;
    }

    const newRoom = {
      id: crypto.randomUUID(),
      ...roomData,
      result,
    };

    setRooms((prev) => [...prev, newRoom]);
  }

  function handleDeleteRoom(id) {
    setRooms((prev) => prev.filter((room) => room.id !== id));

    if (editingRoom?.id === id) {
      setEditingRoom(null);
    }
  }

  function handleEditRoom(room) {
    setEditingRoom(room);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancelEdit() {
    setEditingRoom(null);
  }

  function handleClearAll() {
    const confirmed = window.confirm(
      "Сигурен ли си, че искаш да изтриеш всички стаи?"
    );

    if (!confirmed) return;

    setRooms([]);
    setEditingRoom(null);
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Калкулатор за кабел</h1>
          <p className="text-slate-600 mt-2">
            Версия 1.2: специализирани линии и обобщение по вид кабел
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          <RoomForm
            onSaveRoom={handleSaveRoom}
            editingRoom={editingRoom}
            onCancelEdit={handleCancelEdit}
          />

          <div className="space-y-6">
            <SummaryCard rooms={rooms} />

            <RoomList
              rooms={rooms}
              onDeleteRoom={handleDeleteRoom}
              onEditRoom={handleEditRoom}
            />

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