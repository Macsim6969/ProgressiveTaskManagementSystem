// private setActiveCell(row: number, col: number) {
//   this.patchState(state => ({
//     ...state,
//     field: state.field.map(c =>
//       c.row === row && c.col === col
//         ? { ...c, color: 'active' }
//         : c.color === 'active'
//           ? { ...c, color: 'idle' }
//           : c
//     ),
//     currentCell: { row, col, color: 'active' }
//   }));
// }
