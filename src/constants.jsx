
//*svg I´d like to use as icon but can´t get it to work at the moment

// const svgX = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M13.7 19.55l5.88-5.89l3.35 3.36a3.57 3.57 0 0 1 0 5.05l-.83.83a3.57 3.57 0 0 1-5.05 0zM22.92 1.9l-.83-.83a3.57 3.57 0 0 0-5.05 0L12 6.12L6.95 1.07a3.57 3.57 0 0 0-5.05 0l-.83.83a3.57 3.57 0 0 0 0 5.05L6.12 12l-5.05 5.05a3.57 3.57 0 0 0 0 5.05l.83.83a3.57 3.57 0 0 0 5.05 0L12 17.88l3.68-3.68l2.2-2.2l5.05-5.05a3.57 3.57 0 0 0 0-5.05z" fill="currentColor"/></svg>

// const svgO = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopCircleFilledCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><path fill="#000" d="M19.5 13a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"/></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCircleFilledCircleFilled0)"/></g></svg>

const TURNS = {
  X: 'x',
  O: 'o'
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export {
  TURNS,
  WINNER_COMBOS
}