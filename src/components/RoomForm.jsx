// import { useEffect, useState } from "react";

// const initialForm = {
//   name: "",
//   type: "Стандартна стая",
//   length: "",
//   width: "",
//   height: "",
//   sockets: "",
//   switches: "",
//   lights: "",
//   appliances: "",
//   socketHeight: "0.30",
//   switchHeight: "1.20",
//   routeSource: "junction_box",
//   routeType: "ceiling",
//   reservePercent: "10",
//   lightingCableType: "3x1.5",
//   socketCableType: "3x2.5",
//   applianceCableType: "3x4",
// };

// export default function RoomForm({ onSaveRoom, editingRoom, onCancelEdit }) {
//   const [form, setForm] = useState(initialForm);

//   useEffect(() => {
//     if (editingRoom) {
//       setForm({
//         name: editingRoom.name ?? "",
//         type: editingRoom.type ?? "Стандартна стая",
//         length: editingRoom.length ?? "",
//         width: editingRoom.width ?? "",
//         height: editingRoom.height ?? "",
//         sockets: editingRoom.sockets ?? "",
//         switches: editingRoom.switches ?? "",
//         lights: editingRoom.lights ?? "",
//         appliances: editingRoom.appliances ?? "",
//         socketHeight: editingRoom.socketHeight ?? "0.30",
//         switchHeight: editingRoom.switchHeight ?? "1.20",
//         routeSource: editingRoom.routeSource ?? "junction_box",
//         routeType: editingRoom.routeType ?? "ceiling",
//         reservePercent: editingRoom.reservePercent ?? "10",
//         lightingCableType: editingRoom.lightingCableType ?? "3x1.5",
//         socketCableType: editingRoom.socketCableType ?? "3x2.5",
//         applianceCableType: editingRoom.applianceCableType ?? "3x4",
//       });
//     } else {
//       setForm(initialForm);
//     }
//   }, [editingRoom]);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!form.name || !form.length || !form.width || !form.height) {
//       alert("Моля попълни име и размери на стаята.");
//       return;
//     }

//     const preparedRoom = {
//       ...(editingRoom ? { id: editingRoom.id } : {}),
//       ...form,
//       length: Number(form.length),
//       width: Number(form.width),
//       height: Number(form.height),
//       sockets: Number(form.sockets || 0),
//       switches: Number(form.switches || 0),
//       lights: Number(form.lights || 0),
//       appliances: Number(form.appliances || 0),
//       socketHeight: Number(form.socketHeight),
//       switchHeight: Number(form.switchHeight),
//       reservePercent: Number(form.reservePercent),
//     };

//     onSaveRoom(preparedRoom);
//     setForm(initialForm);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white rounded-2xl shadow-md p-6 space-y-4"
//     >
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-bold">
//           {editingRoom ? "Редакция на стая" : "Добави стая"}
//         </h2>

//         {editingRoom && (
//           <button
//             type="button"
//             onClick={onCancelEdit}
//             className="text-sm px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50"
//           >
//             Отказ
//           </button>
//         )}
//       </div>

//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Име на стая"
//           value={form.name}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <select
//           name="type"
//           value={form.type}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option>Стандартна стая</option>
//           <option>Хол</option>
//           <option>Кухня</option>
//           <option>Спалня</option>
//           <option>Баня</option>
//           <option>Коридор</option>
//         </select>

//         <input
//           type="number"
//           step="0.01"
//           name="length"
//           placeholder="Дължина (м)"
//           value={form.length}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           step="0.01"
//           name="width"
//           placeholder="Ширина (м)"
//           value={form.width}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           step="0.01"
//           name="height"
//           placeholder="Височина (м)"
//           value={form.height}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           name="sockets"
//           placeholder="Брой контакти"
//           value={form.sockets}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           name="switches"
//           placeholder="Брой ключове"
//           value={form.switches}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           name="lights"
//           placeholder="Брой осветителни тела"
//           value={form.lights}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           name="appliances"
//           placeholder="Брой консуматори"
//           value={form.appliances}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           step="0.01"
//           name="socketHeight"
//           placeholder="Височина на контактите"
//           value={form.socketHeight}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <input
//           type="number"
//           step="0.01"
//           name="switchHeight"
//           placeholder="Височина на ключовете"
//           value={form.switchHeight}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <select
//           name="routeSource"
//           value={form.routeSource}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="panel">От табло</option>
//           <option value="junction_box">От разклонителна кутия</option>
//           <option value="neighbor_point">От съседна точка</option>
//         </select>

//         <select
//           name="routeType"
//           value={form.routeType}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="ceiling">По таван</option>
//           <option value="floor">По под</option>
//         </select>

//         <input
//           type="number"
//           step="0.01"
//           name="reservePercent"
//           placeholder="Резерв %"
//           value={form.reservePercent}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         />

//         <select
//           name="lightingCableType"
//           value={form.lightingCableType}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="3x1.5">Осветление - 3x1.5</option>
//           <option value="3x2.5">Осветление - 3x2.5</option>
//         </select>

//         <select
//           name="socketCableType"
//           value={form.socketCableType}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="3x2.5">Контакти - 3x2.5</option>
//           <option value="3x4">Контакти - 3x4</option>
//           <option value="3x6">Контакти - 3x6</option>
//         </select>

//         <select
//           name="applianceCableType"
//           value={form.applianceCableType}
//           onChange={handleChange}
//           className="border rounded-xl px-4 py-2"
//         >
//           <option value="3x2.5">Консуматори - 3x2.5</option>
//           <option value="3x4">Консуматори - 3x4</option>
//           <option value="3x6">Консуматори - 3x6</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:opacity-90"
//       >
//         {editingRoom ? "Запази промените" : "Запази стая"}
//       </button>
//     </form>
//   );
// }
import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  type: "Стандартна стая",
  length: "",
  width: "",
  height: "",
  sockets: "",
  switches: "",
  lights: "",
  appliances: "",
  socketHeight: "0.30",
  switchHeight: "1.20",
  routeSource: "junction_box",
  routeType: "ceiling",
  reservePercent: "10",
  lightingCableType: "3x1.5",
  socketCableType: "3x2.5",
  applianceCableType: "3x4",
};

export default function RoomForm({ onSaveRoom, editingRoom, onCancelEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editingRoom) {
      setForm({
        name: editingRoom.name ?? "",
        type: editingRoom.type ?? "Стандартна стая",
        length: editingRoom.length ?? "",
        width: editingRoom.width ?? "",
        height: editingRoom.height ?? "",
        sockets: editingRoom.sockets ?? "",
        switches: editingRoom.switches ?? "",
        lights: editingRoom.lights ?? "",
        appliances: editingRoom.appliances ?? "",
        socketHeight: editingRoom.socketHeight ?? "0.30",
        switchHeight: editingRoom.switchHeight ?? "1.20",
        routeSource: editingRoom.routeSource ?? "junction_box",
        routeType: editingRoom.routeType ?? "ceiling",
        reservePercent: editingRoom.reservePercent ?? "10",
        lightingCableType: editingRoom.lightingCableType ?? "3x1.5",
        socketCableType: editingRoom.socketCableType ?? "3x2.5",
        applianceCableType: editingRoom.applianceCableType ?? "3x4",
      });
    } else {
      setForm(initialForm);
    }
  }, [editingRoom]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.length || !form.width || !form.height) {
      alert("Моля попълни име и размери на стаята.");
      return;
    }

    const preparedRoom = {
      ...(editingRoom ? { id: editingRoom.id } : {}),
      ...form,
      length: Number(form.length),
      width: Number(form.width),
      height: Number(form.height),
      sockets: Number(form.sockets || 0),
      switches: Number(form.switches || 0),
      lights: Number(form.lights || 0),
      appliances: Number(form.appliances || 0),
      socketHeight: Number(form.socketHeight),
      switchHeight: Number(form.switchHeight),
      reservePercent: Number(form.reservePercent),
    };

    onSaveRoom(preparedRoom);
    setForm(initialForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {editingRoom ? "Редакция на стая" : "Добави стая"}
        </h2>

        {editingRoom && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="text-sm px-3 py-2 rounded-xl border border-slate-300 hover:bg-slate-50"
          >
            Отказ
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Име на стая"
          value={form.name}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        >
          <option>Стандартна стая</option>
          <option>Хол</option>
          <option>Кухня</option>
          <option>Спалня</option>
          <option>Баня</option>
          <option>Коридор</option>
        </select>

        <input
          type="number"
          step="0.01"
          name="length"
          placeholder="Дължина (м)"
          value={form.length}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          step="0.01"
          name="width"
          placeholder="Ширина (м)"
          value={form.width}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          step="0.01"
          name="height"
          placeholder="Височина (м)"
          value={form.height}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          name="sockets"
          placeholder="Брой контакти"
          value={form.sockets}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          name="switches"
          placeholder="Брой ключове"
          value={form.switches}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          name="lights"
          placeholder="Брой осветителни тела"
          value={form.lights}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          name="appliances"
          placeholder="Брой специализирани линии"
          value={form.appliances}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          step="0.01"
          name="socketHeight"
          placeholder="Височина на контактите"
          value={form.socketHeight}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <input
          type="number"
          step="0.01"
          name="switchHeight"
          placeholder="Височина на ключовете"
          value={form.switchHeight}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <select
          name="routeSource"
          value={form.routeSource}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        >
          <option value="panel">От табло</option>
          <option value="junction_box">От разклонителна кутия</option>
          <option value="neighbor_point">От съседна точка</option>
        </select>

        <select
          name="routeType"
          value={form.routeType}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        >
          <option value="ceiling">По таван</option>
          <option value="floor">По под</option>
        </select>

        <input
          type="number"
          step="0.01"
          name="reservePercent"
          placeholder="Резерв %"
          value={form.reservePercent}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        />

        <select
          name="lightingCableType"
          value={form.lightingCableType}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        >
          <option value="3x1.5">Осветление - 3x1.5</option>
          <option value="3x2.5">Осветление - 3x2.5</option>
        </select>

        <select
          name="socketCableType"
          value={form.socketCableType}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        >
          <option value="3x2.5">Контакти - 3x2.5</option>
          <option value="3x4">Контакти - 3x4</option>
          <option value="3x6">Контакти - 3x6</option>
        </select>

        <select
          name="applianceCableType"
          value={form.applianceCableType}
          onChange={handleChange}
          className="border rounded-xl px-4 py-2"
        >
          <option value="3x4">Специализирани линии - 3x4</option>
          <option value="3x6">Специализирани линии - 3x6</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:opacity-90"
      >
        {editingRoom ? "Запази промените" : "Запази стая"}
      </button>
    </form>
  );
}