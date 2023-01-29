import orderByProps from '../sort';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const arr = ['level', 'name'];
const testResult = [
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test('sorting', () => {
  const result = orderByProps(obj, arr);

  expect(result).toEqual(testResult);
});
