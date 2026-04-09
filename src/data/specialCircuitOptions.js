export const SPECIAL_CIRCUIT_OPTIONS = [
  {
    value: "boiler",
    label: "Бойлер",
    defaultCableType: "3x4",
  },
  {
    value: "oven",
    label: "Фурна",
    defaultCableType: "3x4",
  },
  {
    value: "cooktop",
    label: "Котлони",
    defaultCableType: "3x6",
  },
  {
    value: "air_conditioner",
    label: "Климатик",
    defaultCableType: "3x4",
  },
  {
    value: "instant_water_heater",
    label: "Проточен бойлер",
    defaultCableType: "3x6",
  },
  {
    value: "ev_charger",
    label: "EV зарядно",
    defaultCableType: "3x6",
  },
  {
    value: "other",
    label: "Друга специализирана линия",
    defaultCableType: "3x4",
  },
];

export function getSpecialCircuitOption(value) {
  return SPECIAL_CIRCUIT_OPTIONS.find((item) => item.value === value);
}