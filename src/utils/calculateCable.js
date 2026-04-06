// export function calculateCable(room) {
//   const {
//     length,
//     width,
//     height,
//     sockets,
//     switches,
//     lights,
//     appliances,
//     socketHeight,
//     switchHeight,
//     routeType,
//     reservePercent,
//   } = room;

//   const perimeter = 2 * (Number(length) + Number(width));

//   // Базово хоризонтално трасе
//   const baseRoute = perimeter * 0.6;

//   // Вертикални трасета
//   const socketVertical =
//     routeType === "ceiling"
//       ? (Number(height) - Number(socketHeight)) * Number(sockets)
//       : Number(socketHeight) * Number(sockets);

//   const switchVertical =
//     routeType === "ceiling"
//       ? (Number(height) - Number(switchHeight)) * Number(switches)
//       : Number(switchHeight) * Number(switches);

//   const lightVertical =
//     routeType === "ceiling"
//       ? 0.3 * Number(lights)
//       : Number(height) * Number(lights);

//   // Средни добавки на точка
//   const socketExtra = Number(sockets) * 1.5;
//   const switchExtra = Number(switches) * 1.2;
//   const lightExtra = Number(lights) * 1.5;
//   const applianceExtra = Number(appliances) * 3;

//   const subtotal =
//     baseRoute +
//     socketVertical +
//     switchVertical +
//     lightVertical +
//     socketExtra +
//     switchExtra +
//     lightExtra +
//     applianceExtra;

//   const reserve = subtotal * (Number(reservePercent) / 100);
//   const total = subtotal + reserve;

//   return Number(total.toFixed(2));
// }

export function calculateCable(room) {
  const length = Number(room.length) || 0;
  const width = Number(room.width) || 0;
  const height = Number(room.height) || 0;

  const sockets = Number(room.sockets) || 0;
  const switches = Number(room.switches) || 0;
  const lights = Number(room.lights) || 0;
  const appliances = Number(room.appliances) || 0;

  const socketHeight = Number(room.socketHeight) || 0;
  const switchHeight = Number(room.switchHeight) || 0;
  const reservePercent = Number(room.reservePercent) || 0;

  const routeType = room.routeType || "ceiling";
  const routeSource = room.routeSource || "junction_box";

  const perimeter = 2 * (length + width);
  const avgSpan = (length + width) / 2;

  const sourceExtraMap = {
    panel: 3.5,
    junction_box: 1.5,
    neighbor_point: 0.8,
  };

  const sourceFactorMap = {
    panel: 1.15,
    junction_box: 1,
    neighbor_point: 0.85,
  };

  const sourceExtra = sourceExtraMap[routeSource] ?? 1.5;
  const sourceFactor = sourceFactorMap[routeSource] ?? 1;

  const isCeiling = routeType === "ceiling";

  // 1) Осветление
  let lighting = 0;

  if (switches > 0 || lights > 0) {
    const switchVertical = isCeiling
      ? (height - switchHeight) * switches
      : switchHeight * switches;

    const lightVertical = isCeiling
      ? lights * 0.35
      : lights * height;

    const lightingHorizontal =
      (Math.max(switches, 1) * avgSpan * 0.45 +
        Math.max(lights, 1) * avgSpan * 0.55) *
      sourceFactor;

    lighting =
      sourceExtra +
      switchVertical +
      lightVertical +
      lightingHorizontal +
      lights * 0.4;
  }

  // 2) Контакти
  let socketCable = 0;

  if (sockets > 0) {
    const socketVertical = isCeiling
      ? (height - socketHeight) * sockets
      : socketHeight * sockets;

    const socketHorizontalFactor = Math.min(0.8, 0.25 + sockets * 0.08);
    const socketHorizontal = perimeter * socketHorizontalFactor * sourceFactor;

    socketCable =
      sourceExtra +
      socketHorizontal +
      socketVertical +
      sockets * 0.35;
  }

  // 3) Консуматори
  let applianceCable = 0;

  if (appliances > 0) {
    const applianceVertical = isCeiling
      ? (height - socketHeight) * appliances
      : socketHeight * appliances;

    const applianceHorizontal =
      appliances * (avgSpan * 0.9 + sourceExtra) * sourceFactor;

    applianceCable =
      applianceHorizontal +
      applianceVertical +
      appliances * 0.5;
  }

  const subtotal = lighting + socketCable + applianceCable;
  const reserve = subtotal * (reservePercent / 100);
  const total = subtotal + reserve;

  return {
    lighting: Number(lighting.toFixed(2)),
    sockets: Number(socketCable.toFixed(2)),
    appliances: Number(applianceCable.toFixed(2)),
    reserve: Number(reserve.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}