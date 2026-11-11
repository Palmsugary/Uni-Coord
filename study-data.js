/* Reference data for the Study tab: the built-in SI units table and the starter formula packs.
   Loaded before the app. Nothing here is saved or synced; formulas from a pack are copied into
   your planner when you press "Add starter formulas", and from then on they're yours to edit. */
window.SD_STUDY_DATA = (() => {
const R = String.raw;

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

/* ---------- starter formula packs ---------- */
// topic: the start of the unit content topic it belongs to (matched loosely against your unit's topic list).
const f = (topic, name, tex, where, when) => ({ topic, name, tex, where: where || '', when: when || '' });

const EGD105_T = {
  num: 'Properties of number systems',
  alg: 'Basic algebra',
  coord: 'Coordinate geometry',
  graph: 'Graphs and equations of linear, quadratic and cubic',
  nonlin: 'Other non-linear functions',
  calc: 'Foundations of calculus',
};
const EGD105 = [
  f(EGD105_T.num, 'Index laws', R`a^m a^n = a^{m+n},\quad \frac{a^m}{a^n} = a^{m-n},\quad (a^m)^n = a^{mn}`, '', 'Simplifying powers with the same base.'),
  f(EGD105_T.num, 'Negative and fractional indices', R`a^{-n} = \frac{1}{a^n},\quad a^{1/n} = \sqrt[n]{a},\quad a^{m/n} = \left(\sqrt[n]{a}\right)^m`),
  f(EGD105_T.alg, 'Difference of two squares', R`a^2 - b^2 = (a-b)(a+b)`, '', 'Factorising.'),
  f(EGD105_T.alg, 'Perfect squares', R`(a \pm b)^2 = a^2 \pm 2ab + b^2`, '', 'Expanding, completing the square.'),
  f(EGD105_T.alg, 'Quadratic formula', R`x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`, R`For $ax^2 + bx + c = 0$.`, 'When a quadratic won’t factorise easily.'),
  f(EGD105_T.alg, 'Completing the square', R`ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a}`, '', 'Finding the turning point form.'),
  f(EGD105_T.coord, 'Gradient', R`m = \frac{y_2 - y_1}{x_2 - x_1}`, R`$(x_1, y_1)$ and $(x_2, y_2)$ are two points on the line.`),
  f(EGD105_T.coord, 'Point–gradient form of a line', R`y - y_1 = m(x - x_1)`, '', 'Line through a known point with a known gradient.'),
  f(EGD105_T.coord, 'Distance between two points', R`d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`),
  f(EGD105_T.coord, 'Midpoint', R`M = \left(\frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2}\right)`),
  f(EGD105_T.coord, 'Perpendicular lines', R`m_1 m_2 = -1`, '', 'Parallel lines have equal gradients.'),
  f(EGD105_T.graph, 'Turning point of a parabola', R`x = -\frac{b}{2a}`, R`For $y = ax^2 + bx + c$; substitute back in for the $y$ value.`),
  f(EGD105_T.graph, 'Discriminant', R`\Delta = b^2 - 4ac`, '', 'Δ > 0: two real roots; Δ = 0: one; Δ < 0: none.'),
  f(EGD105_T.nonlin, 'Logarithm definition', R`y = a^x \iff x = \log_a y`, '', 'Moving between exponential and log form.'),
  f(EGD105_T.nonlin, 'Log laws', R`\log(xy) = \log x + \log y,\quad \log\frac{x}{y} = \log x - \log y,\quad \log x^n = n \log x`),
  f(EGD105_T.nonlin, 'Change of base', R`\log_a x = \frac{\ln x}{\ln a}`),
  f(EGD105_T.nonlin, 'Pythagorean identity', R`\sin^2\theta + \cos^2\theta = 1,\quad \tan\theta = \frac{\sin\theta}{\cos\theta}`),
  f(EGD105_T.nonlin, 'Degrees and radians', R`\pi \text{ rad} = 180^\circ`, '', 'Calculus with trig functions needs radians.'),
  f(EGD105_T.nonlin, 'Sine and cosine rules', R`\frac{a}{\sin A} = \frac{b}{\sin B},\qquad c^2 = a^2 + b^2 - 2ab\cos C`, '', 'Non-right-angled triangles.'),
  f(EGD105_T.nonlin, 'Period and amplitude', R`y = A\sin(bx + c) + d:\quad \text{amplitude } |A|,\ \text{period } \frac{2\pi}{b}`),
  f(EGD105_T.calc, 'Derivative from first principles', R`f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}`),
  f(EGD105_T.calc, 'Power rule', R`\frac{d}{dx} x^n = n x^{n-1}`),
  f(EGD105_T.calc, 'Exponential and log derivatives', R`\frac{d}{dx} e^{kx} = k e^{kx},\qquad \frac{d}{dx} \ln x = \frac{1}{x}`),
  f(EGD105_T.calc, 'Trig derivatives', R`\frac{d}{dx}\sin x = \cos x,\quad \frac{d}{dx}\cos x = -\sin x,\quad \frac{d}{dx}\tan x = \sec^2 x`, '', 'x in radians.'),
  f(EGD105_T.calc, 'Product rule', R`(uv)' = u'v + uv'`),
  f(EGD105_T.calc, 'Quotient rule', R`\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}`),
  f(EGD105_T.calc, 'Chain rule', R`\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}`, '', 'A function inside a function.'),
  f(EGD105_T.calc, 'Tangent line', R`y - f(a) = f'(a)(x - a)`),
  f(EGD105_T.calc, 'Stationary points', R`f'(x) = 0`, '', 'Then check the sign of f′ either side, or f″, to classify.'),
  f(EGD105_T.calc, 'Basic integrals', R`\int x^n\,dx = \frac{x^{n+1}}{n+1} + C\ (n \ne -1),\quad \int \frac{1}{x}\,dx = \ln|x| + C,\quad \int e^{kx}\,dx = \frac{e^{kx}}{k} + C`),
  f(EGD105_T.calc, 'Trig integrals', R`\int \sin x\,dx = -\cos x + C,\qquad \int \cos x\,dx = \sin x + C`),
  f(EGD105_T.calc, 'Definite integral', R`\int_a^b f(x)\,dx = F(b) - F(a)`, R`$F$ is any antiderivative of $f$.`, 'Area under a curve (take care where f is negative).'),
];

// EGD102's Canvas content isn't downloaded yet, so its topics come from the weekly lecture schedule.
const EGD102_TOPICS = [
  'Significant figures, scientific notation, vectors and motion in 1-D, graphical representations of motion',
  'Motion in 2-D and relative motion in 2-D',
  "Forces and Newton's laws, dynamic systems",
  'Uniform circular motion, work, energy (gravitational, potential, kinetic), conservation of energy',
  'Momentum, conservation of momentum, collisions',
  'Fluid properties, pressure, buoyancy',
  'Pressure measurement and forces on submerged bodies, centre of pressure',
  'Normal stress and strain, mechanical properties (normal)',
  'Shear stress and strain, mechanical properties (shear)',
];
const [W1, W2, W3, W4, W5, W6, W7, W8, W9] = EGD102_TOPICS;
const EGD102 = [
  f(W1, 'Vector magnitude and direction', R`|\vec A| = \sqrt{A_x^2 + A_y^2},\qquad \theta = \tan^{-1}\frac{A_y}{A_x}`, '', 'Check the quadrant for θ.'),
  f(W1, 'Vector components', R`A_x = A\cos\theta,\qquad A_y = A\sin\theta`, R`θ measured from the $+x$ axis.`),
  f(W1, 'Average velocity and acceleration', R`\bar v = \frac{\Delta x}{\Delta t},\qquad \bar a = \frac{\Delta v}{\Delta t}`, R`$x$ in m, $t$ in s, $v$ in m/s, $a$ in m/s².`, 'Slope of an x–t graph is velocity; slope of v–t is acceleration; area under v–t is displacement.'),
  f(W1, 'Constant acceleration (suvat)', R`v = u + at,\quad s = ut + \tfrac12 at^2,\quad v^2 = u^2 + 2as,\quad s = \tfrac12(u+v)t`, R`$u$ initial velocity (m/s), $v$ final velocity (m/s), $a$ acceleration (m/s²), $s$ displacement (m), $t$ time (s).`, 'Only when acceleration is constant. Pick the equation missing the quantity you don’t know.'),
  f(W2, 'Projectile motion', R`x = (v_0\cos\theta)\,t,\qquad y = (v_0\sin\theta)\,t - \tfrac12 g t^2`, R`$g = 9.81$ m/s², $v_0$ launch speed (m/s), θ launch angle.`, 'Treat horizontal (no acceleration) and vertical (−g) separately; time links them.'),
  f(W2, 'Relative velocity', R`\vec v_{A/C} = \vec v_{A/B} + \vec v_{B/C}`, '', 'Boats in currents, planes in wind.'),
  f(W3, "Newton's second law", R`\sum \vec F = m\vec a`, R`$F$ in N, $m$ in kg, $a$ in m/s².`, 'Draw a free-body diagram first; resolve into components.'),
  f(W3, 'Weight', R`W = mg`),
  f(W3, 'Friction', R`f_s \le \mu_s N,\qquad f_k = \mu_k N`, R`$N$ is the normal force (N); μ has no units.`),
  f(W4, 'Centripetal acceleration and force', R`a_c = \frac{v^2}{r} = \omega^2 r,\qquad F_c = \frac{m v^2}{r}`, R`$r$ radius (m), ω angular speed (rad/s).`),
  f(W4, 'Work done by a constant force', R`W = F d\cos\theta`, R`$W$ in J, $d$ displacement (m), θ angle between force and displacement.`),
  f(W4, 'Kinetic and potential energy', R`K = \tfrac12 m v^2,\qquad U_g = mgh,\qquad U_s = \tfrac12 k x^2`, R`$k$ spring constant (N/m), $x$ extension (m).`),
  f(W4, 'Work–energy theorem', R`W_{net} = \Delta K`),
  f(W4, 'Conservation of mechanical energy', R`K_1 + U_1 + W_{other} = K_2 + U_2`, '', 'W_other is work by friction or applied forces (negative for friction).'),
  f(W4, 'Power', R`P = \frac{W}{t} = F v`, R`$P$ in W.`),
  f(W5, 'Momentum and impulse', R`\vec p = m\vec v,\qquad \vec J = \vec F\,\Delta t = \Delta \vec p`, R`$p$ in kg·m/s, $J$ in N·s.`),
  f(W5, 'Conservation of momentum', R`m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2`, '', 'Any collision with no external impulse. Watch the signs for direction.'),
  f(W5, 'Perfectly inelastic collision', R`v = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}`, '', 'Objects stick together; kinetic energy is lost.'),
  f(W5, 'Elastic collision (1-D)', R`u_1 - u_2 = -(v_1 - v_2)`, '', 'Kinetic energy is also conserved.'),
  f(W6, 'Density and specific weight', R`\rho = \frac{m}{V},\qquad \gamma = \rho g,\qquad SG = \frac{\rho}{\rho_{water}}`, R`ρ in kg/m³, γ in N/m³.`),
  f(W6, 'Pressure', R`p = \frac{F}{A}`, R`$p$ in Pa (N/m²).`),
  f(W6, 'Hydrostatic pressure', R`p = p_0 + \rho g h`, R`$h$ depth below the surface (m).`),
  f(W6, 'Buoyancy (Archimedes)', R`F_B = \rho_{fluid}\, g\, V_{displaced}`, '', 'Floating: F_B equals the weight.'),
  f(W7, 'Absolute and gauge pressure', R`p_{abs} = p_{gauge} + p_{atm}`),
  f(W7, 'Force on a submerged plane surface', R`F_R = \rho g h_c A`, R`$h_c$ depth of the centroid (m), $A$ area (m²).`),
  f(W7, 'Centre of pressure', R`y_{cp} = y_c + \frac{I_{xc}}{y_c A}`, R`$y_c$ distance to the centroid along the plane, $I_{xc}$ second moment of area about the centroid (m⁴).`, 'The centre of pressure is always below the centroid.'),
  f(W8, 'Normal stress and strain', R`\sigma = \frac{F}{A},\qquad \varepsilon = \frac{\Delta L}{L_0}`, R`σ in Pa (often MPa), ε has no units.`),
  f(W8, "Hooke's law and Young's modulus", R`\sigma = E\varepsilon`, R`$E$ in Pa (often GPa).`, 'Only in the linear elastic region.'),
  f(W8, 'Axial elongation', R`\delta = \frac{F L}{A E}`),
  f(W8, "Poisson's ratio", R`\nu = -\frac{\varepsilon_{lat}}{\varepsilon_{long}}`),
  f(W9, 'Shear stress and strain', R`\tau = \frac{V}{A},\qquad \tau = G\gamma`, R`$V$ shear force (N), $G$ shear modulus (Pa), γ shear strain (rad).`),
  f(W9, 'Relationship between E, G and ν', R`G = \frac{E}{2(1+\nu)}`),
];

return {
  units,
  packs: {
    EGD105: { formulas: EGD105 },
    EGD102: { formulas: EGD102, topics: EGD102_TOPICS },
  },
};
})();
