const sum = require('./sum');

test.each`
  a | b | output
  ${2} | ${2} | ${4}
  ${100} | ${200} | ${300}
`('SHOULD sum a($a) and b($b) and return $output', ({ a, b, output}) => {
  expect(sum(a, b)).toBe(output);
});

const testTable = [
  [2, 2, 4],
  [100, 200, 300]
];
test.each(testTable)('SHOULD sum a(%d) and b(%d) and return %d', (a, b, output) => {
  expect(sum(a, b)).toBe(output);
});
