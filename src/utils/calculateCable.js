
// export function calculateCable(room) {
//   const length = Number(room.length) || 0;
//   const width = Number(room.width) || 0;
//   const height = Number(room.height) || 0;

//   const sockets = Number(room.sockets) || 0;
//   const switches = Number(room.switches) || 0;
//   const lights = Number(room.lights) || 0;
//   const appliances = Number(room.appliances) || 0;

//   const socketHeight = Number(room.socketHeight) || 0.3;
//   const switchHeight = Number(room.switchHeight) || 1.2;
//   const reservePercent = Number(room.reservePercent) || 10;

//   const routeType = room.routeType || "ceiling";
//   const routeSource = room.routeSource || "junction_box";

//   const perimeter = 2 * (length + width);
//   const avgSpan = (length + width) / 2;

//   const sourceExtraMap = {
//     panel: 3.5,
//     junction_box: 1.5,
//     neighbor_point: 0.8,
//   };

//   const sourceFactorMap = {
//     panel: 1.15,
//     junction_box: 1,
//     neighbor_point: 0.85,
//   };

//   const sourceExtra = sourceExtraMap[routeSource] ?? 1.5;
//   const sourceFactor = sourceFactorMap[routeSource] ?? 1;

//   const isCeiling = routeType === "ceiling";

//   let lighting = 0;

//   if (switches > 0 || lights > 0) {
//     const switchVertical = isCeiling
//       ? (height - switchHeight) * switches
//       : switchHeight * switches;

//     const lightVertical = isCeiling ? lights * 0.35 : lights * height;

//     const lightingHorizontal =
//       (Math.max(switches, 1) * avgSpan * 0.45 +
//         Math.max(lights, 1) * avgSpan * 0.55) *
//       sourceFactor;

//     lighting =
//       sourceExtra +
//       switchVertical +
//       lightVertical +
//       lightingHorizontal +
//       lights * 0.4;
//   }

//   let socketCable = 0;

//   if (sockets > 0) {
//     const socketVertical = isCeiling
//       ? (height - socketHeight) * sockets
//       : socketHeight * sockets;

//     const socketHorizontalFactor = Math.min(0.8, 0.25 + sockets * 0.08);
//     const socketHorizontal = perimeter * socketHorizontalFactor * sourceFactor;

//     socketCable =
//       sourceExtra +
//       socketHorizontal +
//       socketVertical +
//       sockets * 0.35;
//   }

//   const normalizedSpecialCircuits =
//     Array.isArray(room.specialCircuits) && room.specialCircuits.length > 0
//       ? room.specialCircuits.map((item, index) => ({
//           id: item.id || `special-${index + 1}`,
//           type: item.type || "other",
//           label: item.label || `Специализирана линия ${index + 1}`,
//           cableType: item.cableType || room.applianceCableType || "3x4",
//         }))
//       : Array.from({ length: appliances }, (_, index) => ({
//           id: `special-${index + 1}`,
//           type: "other",
//           label: `Специализирана линия ${index + 1}`,
//           cableType: room.applianceCableType || "3x4",
//         }));

//   const perSpecialCircuitVertical = isCeiling
//     ? height - socketHeight
//     : socketHeight;

//   const perSpecialCircuitHorizontal =
//     (avgSpan * 0.9 + sourceExtra) * sourceFactor;

//   const specialCircuitsResult = normalizedSpecialCircuits.map((item) => {
//     const meters =
//       perSpecialCircuitHorizontal + perSpecialCircuitVertical + 0.5;

//     return {
//       ...item,
//       meters: Number(meters.toFixed(2)),
//     };
//   });

//   const applianceCable = specialCircuitsResult.reduce(
//     (sum, item) => sum + item.meters,
//     0
//   );

//   const subtotal = lighting + socketCable + applianceCable;
//   const reserve = subtotal * (reservePercent / 100);
//   const total = subtotal + reserve;

//   return {
//     lighting: Number(lighting.toFixed(2)),
//     sockets: Number(socketCable.toFixed(2)),
//     appliances: Number(applianceCable.toFixed(2)),
//     reserve: Number(reserve.toFixed(2)),
//     total: Number(total.toFixed(2)),
//     specialCircuits: specialCircuitsResult,
//   };
// }
export function calculateCable(room) {
  const length = Number(room.length) || 0;
  const width = Number(room.width) || 0;
  const height = Number(room.height) || 0;

  const sockets = Number(room.sockets) || 0;
  const switches = Number(room.switches) || 0;
  const lights = Number(room.lights) || 0;
  const lightingCircuits = Math.max(Number(room.lightingCircuits) || 1, 1);
  const appliances = Number(room.appliances) || 0;

  const socketHeight = Number(room.socketHeight) || 0.3;
  const switchHeight = Number(room.switchHeight) || 1.2;
  const reservePercent = Number(room.reservePercent) || 10;

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

  let lighting = 0;

  if (switches > 0 || lights > 0) {
    const switchVertical = isCeiling
      ? (height - switchHeight) * switches
      : switchHeight * switches;

    const lightVertical = isCeiling ? lights * 0.35 : lights * height;

    const circuitBaseHorizontal =
      lightingCircuits * avgSpan * 0.75 * sourceFactor;

    const switchHorizontal =
      Math.max(switches, lightingCircuits) * avgSpan * 0.35 * sourceFactor;

    const lightsHorizontal =
      Math.max(lights, 1) * (avgSpan / Math.max(lightingCircuits, 1)) * 0.45;

    lighting =
      sourceExtra +
      circuitBaseHorizontal +
      switchHorizontal +
      lightVertical +
      switchVertical +
      lightsHorizontal +
      lights * 0.4;
  }

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

  const normalizedSpecialCircuits =
    Array.isArray(room.specialCircuits) && room.specialCircuits.length > 0
      ? room.specialCircuits.map((item, index) => ({
          id: item.id || `special-${index + 1}`,
          type: item.type || "other",
          label: item.label || `Специализирана линия ${index + 1}`,
          cableType: item.cableType || room.applianceCableType || "3x4",
        }))
      : Array.from({ length: appliances }, (_, index) => ({
          id: `special-${index + 1}`,
          type: "other",
          label: `Специализирана линия ${index + 1}`,
          cableType: room.applianceCableType || "3x4",
        }));

  const perSpecialCircuitVertical = isCeiling
    ? height - socketHeight
    : socketHeight;

  const perSpecialCircuitHorizontal =
    (avgSpan * 0.9 + sourceExtra) * sourceFactor;

  const specialCircuitsResult = normalizedSpecialCircuits.map((item) => {
    const meters =
      perSpecialCircuitHorizontal + perSpecialCircuitVertical + 0.5;

    return {
      ...item,
      meters: Number(meters.toFixed(2)),
    };
  });

  const applianceCable = specialCircuitsResult.reduce(
    (sum, item) => sum + item.meters,
    0
  );

  const subtotal = lighting + socketCable + applianceCable;
  const reserve = subtotal * (reservePercent / 100);
  const total = subtotal + reserve;

  return {
    lighting: Number(lighting.toFixed(2)),
    sockets: Number(socketCable.toFixed(2)),
    appliances: Number(applianceCable.toFixed(2)),
    reserve: Number(reserve.toFixed(2)),
    total: Number(total.toFixed(2)),
    specialCircuits: specialCircuitsResult,
  };
}