# Comparus Game

## Project Structure

- **comparus-game.component.ts** – Root component of the game. Handles initialization and binds the game state to child components.
- **comparus-game.component.spec.ts** – Unit test.
- **comparus-game.html** – Template for the root component.
- **comparus-game.scss** – Styles for the root component.

### Components

- **game-header/** – Game header component:
  - **game-header.component.ts** – Logic and events for the game header.
  - **game-header.component.spec.ts** – Unit test.
  - **game-header.html** – Template for the game header.
  - **game-header.scss** – Styles for the game header.

- **game-board/** – Game board component:
  - **game-board.component.ts** – Logic for the game board and handling cell clicks.
  - **game-board.component.spec.ts** – Unit test.
  - **game-board.html** – Template for the game board.
  - **game-board.scss** – Styles for the game board.

- **game-winner-modal/** – Winner modal component:
  - **game-winner-modal.component.ts** – Logic for the modal window that shows the winner.
  - **game-winner-modal.component.spec.ts** – Unit test.
  - **game-winner-modal.html** – Template for the game winner modal.
  - **game-winner-modal.scss** – Styles for the game winner modal.

### State

- **comparus-game.state.ts** – ComponentStore that manages the game state (score, field, current turn, player reactions, modals, etc.).
- **comparus-game.state.spec.ts** – Unit test.

### Models

- **game-filed-block.type.ts** – Types for the game field cells.
- **game-state.interface.ts** – Interfaces for the game state, including score and other properties.
- **game-winner-data.interface.ts** – Type definitions for modal winner data.
- **player.type.ts** – Type for player identifiers.

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
- **Unit test:** `comparus-game.component.spec.ts`

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
- Disables inputs/buttons when game is running.
- **Unit test:** `game-header.component.spec.ts`

---

### 3. GameBoard
- Displays the **10x10 game grid**.
- **Inputs:**
  - `field$` – observable of all cells
  - `isRunning$` – whether the game is active
- **Outputs:**
  - `clickedCell` – emits row/column of clicked cell
- Buttons are disabled if cell is `idle`, `hit`, `miss`, or game is not running.
- **Unit test:** `game-board.component.spec.ts`

---

### 4. GameWinnerModal
- Displays **winner information** and **final score** after the game ends.
- Receives **`data`** as input via `MAT_DIALOG_DATA` containing:
  - `winner` – either `'player'` or `'computer'`
  - `score` – final score object
- Provides **callback** when modal is closed:
  - **Close button** – closes modal without replay
  - **Play again button** – closes modal and triggers game restart
- **Unit test:** `game-winner-modal.component.spec.ts`


## ComparusGameState (ComponentStore)

### Key Responsibilities:
- Holds **game state**: field, score, reaction time, running status.
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
- **Unit test:** `comparus-game.state.spec.ts`
