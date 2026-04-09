const CABLE_ORDER = ["3x1.5", "3x2.5", "3x4", "3x6"];

function addCableTotal(totals, type, value) {
  const cableType = type || "Непосочен";
  const meters = Number(value) || 0;

  if (!totals[cableType]) {
    totals[cableType] = 0;
  }

  totals[cableType] += meters;
}

export function getCableTypeTotals(rooms) {
  const totals = {};

  rooms.forEach((room) => {
    addCableTotal(
      totals,
      room.lightingCableType || "3x1.5",
      room.result?.lighting
    );

    addCableTotal(
      totals,
      room.socketCableType || "3x2.5",
      room.result?.sockets
    );

    addCableTotal(
      totals,
      room.applianceCableType || "3x4",
      room.result?.appliances
    );
  });

  return Object.entries(totals)
    .map(([type, meters]) => ({
      type,
      meters: Number(meters.toFixed(2)),
    }))
    .sort((a, b) => {
      const aIndex = CABLE_ORDER.indexOf(a.type);
      const bIndex = CABLE_ORDER.indexOf(b.type);

      if (aIndex === -1 && bIndex === -1) return a.type.localeCompare(b.type);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;

      return aIndex - bIndex;
    });
}