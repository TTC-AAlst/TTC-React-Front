const rankings = ['A', 'B0', 'B2', 'B4', 'B6', 'C0', 'C2', 'C4', 'C6', 'D0', 'D2', 'D4', 'D6', 'E0', 'E2', 'E4', 'E6', 'F', 'NG'];

export default function (a, b) {
  return rankings.indexOf(a) - rankings.indexOf(b);
}
