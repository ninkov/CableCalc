import { useState } from "react";

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
};

export default function RoomForm({ onAddRoom }) {
  const [form, setForm] = useState(initialForm);

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

    onAddRoom(preparedRoom);
    setForm(initialForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-6 space-y-4"
    >
      <h2 className="text-xl font-bold">Добави стая</h2>

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
          placeholder="Брой консуматори"
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
      </div>

      <button
        type="submit"
        className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:opacity-90"
      >
        Запази стая
      </button>
    </form>
  );
}