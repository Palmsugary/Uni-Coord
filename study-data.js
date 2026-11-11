/* Reference data for the Study tab: the built-in SI units table.
   Loaded before the app. Nothing here is saved or synced. */
window.SD_STUDY_DATA = (() => {
/* ---------- SI units ---------- */
const base = [
  ['Length', 'metre', 'm', '', 'Distance light travels in 1/299 792 458 s.'],
  ['Mass', 'kilogram', 'kg', '', ''],
  ['Time', 'second', 's', '', ''],
  ['Electric current', 'ampere', 'A', '', ''],
  ['Temperature', 'kelvin', 'K', '', 'T(K) = T(°C) + 273.15. A change of 1 K equals a change of 1 °C.'],
  ['Amount of substance', 'mole', 'mol', '', '6.022 × 10²³ particles.'],
  ['Luminous intensity', 'candela', 'cd', '', ''],
].map(([quantity, name, sym, baseUnits, note]) => ({ group: 'Base units', quantity, name, sym, base: baseUnits || sym, note }));

const derived = [
  ['Frequency', 'hertz', 'Hz', 's⁻¹', 'Cycles per second. f = 1/T.'],
  ['Force', 'newton', 'N', 'kg·m·s⁻²', 'F = ma.'],
  ['Pressure, stress', 'pascal', 'Pa', 'N/m² = kg·m⁻¹·s⁻²', '1 kPa = 1000 Pa; 1 MPa = 1 N/mm².'],
  ['Energy, work, heat', 'joule', 'J', 'N·m = kg·m²·s⁻²', 'W = Fd.'],
  ['Power', 'watt', 'W', 'J/s = kg·m²·s⁻³', 'P = W/t.'],
  ['Electric charge', 'coulomb', 'C', 'A·s', ''],
  ['Voltage', 'volt', 'V', 'W/A = kg·m²·s⁻³·A⁻¹', ''],
  ['Resistance', 'ohm', 'Ω', 'V/A', 'V = IR.'],
  ['Plane angle', 'radian', 'rad', 'm/m (dimensionless)', 'π rad = 180°.'],
  ['Celsius temperature', 'degree Celsius', '°C', 'K', 'Same size step as the kelvin.'],
].map(([quantity, name, sym, b, note]) => ({ group: 'Named derived units', quantity, name, sym, base: b, note }));

const compound = [
  ['Area', 'm²', ''], ['Volume', 'm³', '1 L = 10⁻³ m³ = 1000 cm³.'],
  ['Velocity, speed', 'm/s', '1 km/h = 1/3.6 m/s.'], ['Acceleration', 'm/s²', ''],
  ['Angular velocity', 'rad/s', 'ω = 2πf.'], ['Momentum', 'kg·m/s', 'Same as N·s.'],
  ['Impulse', 'N·s', ''], ['Torque, moment', 'N·m', 'Written N·m, not J, even though the base units match.'],
  ['Density', 'kg/m³', 'Water ≈ 1000 kg/m³.'], ['Specific weight', 'N/m³', 'γ = ρg.'],
  ['Spring constant, stiffness', 'N/m', ''], ['Dynamic viscosity', 'Pa·s', ''],
  ['Volume flow rate', 'm³/s', ''], ['Strain', '(none)', 'A ratio of lengths, often given as % or µε.'],
].map(([quantity, sym, note]) => ({ group: 'Other common units', quantity, name: '', sym, base: sym, note }));

const prefixes = [
  ['tera', 'T', '10¹²'], ['giga', 'G', '10⁹'], ['mega', 'M', '10⁶'], ['kilo', 'k', '10³'],
  ['centi', 'c', '10⁻²'], ['milli', 'm', '10⁻³'], ['micro', 'µ', '10⁻⁶'], ['nano', 'n', '10⁻⁹'], ['pico', 'p', '10⁻¹²'],
].map(([name, sym, factor]) => ({ group: 'Prefixes', quantity: factor, name, sym, base: '', note: '' }));

const constants = [
  ['Gravitational acceleration', 'g', '9.81 m/s²', 'Check whether your unit uses 9.8 or 9.81.'],
  ['Density of water', 'ρ_w', '1000 kg/m³', 'At about 4 °C; 998 kg/m³ at 20 °C.'],
  ['Atmospheric pressure', 'p_atm', '101.325 kPa', ''],
  ['Gravitational constant', 'G', '6.674 × 10⁻¹¹ N·m²/kg²', ''],
  ['Speed of light', 'c', '2.998 × 10⁸ m/s', ''],
].map(([quantity, sym, base, note]) => ({ group: 'Constants', quantity, name: '', sym, base, note }));

const units = [...base, ...derived, ...compound, ...prefixes, ...constants];

return { units };
})();
