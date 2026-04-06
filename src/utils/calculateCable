export function calculateCable(room) {
  const {
    length,
    width,
    height,
    sockets,
    switches,
    lights,
    appliances,
    socketHeight,
    switchHeight,
    routeType,
    reservePercent,
  } = room;

  const perimeter = 2 * (Number(length) + Number(width));

  // Базово хоризонтално трасе
  const baseRoute = perimeter * 0.6;

  // Вертикални трасета
  const socketVertical =
    routeType === "ceiling"
      ? (Number(height) - Number(socketHeight)) * Number(sockets)
      : Number(socketHeight) * Number(sockets);

  const switchVertical =
    routeType === "ceiling"
      ? (Number(height) - Number(switchHeight)) * Number(switches)
      : Number(switchHeight) * Number(switches);

  const lightVertical =
    routeType === "ceiling"
      ? 0.3 * Number(lights)
      : Number(height) * Number(lights);

  // Средни добавки на точка
  const socketExtra = Number(sockets) * 1.5;
  const switchExtra = Number(switches) * 1.2;
  const lightExtra = Number(lights) * 1.5;
  const applianceExtra = Number(appliances) * 3;

  const subtotal =
    baseRoute +
    socketVertical +
    switchVertical +
    lightVertical +
    socketExtra +
    switchExtra +
    lightExtra +
    applianceExtra;

  const reserve = subtotal * (Number(reservePercent) / 100);
  const total = subtotal + reserve;

  return Number(total.toFixed(2));
}