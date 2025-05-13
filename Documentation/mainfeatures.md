# Main Features of TypeFiArena

## 1. Typing Game (Multiplayer)

### Key Components:

#### Real-time Gameplay Logic:

- Utilize a WebSocket-based system (e.g., Socket.io) for real-time communication between players.
- Synchronize typing progress and accuracy between players.

#### Typing Mechanics:

- Provide a pre-defined text passage to both players.
- Track players’ typing speed and accuracy live.
- Determine the winner based on speed and accuracy.

#### UI/UX:

- Display live progress bars and stats (speed, accuracy) for both players.
- Include a countdown timer before the game starts.

---

## 2. Invite System

### Key Components:

#### Player Authentication:

- Enable players to log in using email or crypto wallets (e.g., Phantom or MetaMask).

#### Friend System:

- Allow players to add friends by wallet ID or username.
- Show online/offline status of friends.

#### Game Invitations:

- Allow players to invite friends to a match via unique game links or notifications.
- Handle acceptance/rejection of invites.

---

## 3. Prize Pool Setup and Smart Contracts

### Key Components:

#### User Prize Pool Setup:

- Allow players to set up a prize pool in cryptocurrency.
- Define minimum and maximum limits for prize pools.

#### Smart Contract for Prize Handling:

- Develop a smart contract to:
  - Lock the prize amount from both players before the match.
  - Automatically transfer the prize to the winner after the match.
  - Deduct a 2% platform fee before transferring.
- Use Solana's Anchor Framework or Ethereum-based tools for contract development.

#### Wallet Integration:

- Connect popular wallets like Phantom (Solana) or MetaMask (USDT).

#### Transaction Transparency:

- Display transaction details (e.g., amount locked, winner, fees deducted) to users after each match.
