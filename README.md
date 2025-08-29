# Comparus Game

## Project Structure

src/app/features/comparus-game/
├── comparus-game.component.ts # Root component
├── comparus-game.html # Main template
├── comparus-game.scss # Main styles
├── components/
│ ├── game-header/
│ │ ├── game-header.component.ts
│ │ ├── game-header.html
│ │ └── game-header.scss
│ ├── game-board/
│ │ ├── game-board.component.ts
│ │ ├── game-board.html
│ │ └── game-board.scss
│ └── game-winner-modal/
│ └── game-winner-modal.component.ts
├── state/
│ └── comparus-game.state.ts # ComponentStore for game logic
└── models/
├── game-state.interface.ts
└── game-filed-block.type.ts
---

## Main Components

### 1. ComparusGameComponent
- **Root component** of the game.
- Responsible for **binding state** from `ComparusGameState` store to child components.
- Handles game initialization and events:
  - `startGame()`
  - `changeReactionMs(ms: number)`
  - `cellClick({row, col})`
- Exposes reactive streams to templates using getters:
  - `field$`
  - `score$`
  - `isRunning$`
  - `reactionMs$`

---

### 2. GameHeader
- Displays **score** and **reaction time input**.
- **Inputs:**
  - `score$` – observable of current scores
  - `reactionMs$` – observable of player reaction time
  - `isRunning$` – observable if game is running
- **Outputs:**
  - `setGameState` – triggers game start
  - `setReactionsMs` – updates reaction time
- Disables inputs/buttons when game is running

---

### 3. GameBoard
- Displays the **10x10 game grid**
- **Inputs:**
  - `field$` – observable of all cells
  - `isRunning$` – whether the game is active
- **Outputs:**
  - `clickedCell` – emits row/column of clicked cell
- Buttons are disabled if cell is `idle`, `hit`, `miss`, or game is not running

---

## ComparusGameState (ComponentStore)

### Key Responsibilities:
- Holds **game state**: field, score, reaction time, running status
- Handles **effects**:
  - `start` – initialize game, reset score and field
  - `nextRound` – randomly select active cell, schedule timeout
  - `clickCell` – handle user clicks on active cells
- **Helpers**:
  - `createEmptyField()` – creates 10x10 grid of idle cells
  - `timeout()` – mark missed cell and update computer score
  - `updateCell()` – update a specific cell color
  - `updateScore()` – increment player/computer score, check winner
- **Updaters**:
  - `setReactionMs(ms: number)` – updates reaction time
- **Selectors**:
  - `field$` – observable for the game field
  - `score$` – observable for score
  - `isRunning$` – observable for game status
  - `reactionMs$` – observable for reaction time

---
