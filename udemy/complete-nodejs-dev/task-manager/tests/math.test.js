const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius
} = require("../src/math");

test("should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("should convert 32 F to 0 C", () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("should convert 0 C to 32 F", () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});

// Why test?
//
//  - Saves time
//  - Creates reliable software
//  - Gives flexibility to developers
//      - refactoring
//      - collaborating
//      - profiling
//  - Peace of mind
