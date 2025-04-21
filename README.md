# Mini TuneIn Player

This is a test task for **TuneIn**, showcasing a single-page radio streaming application built with React and TypeScript. The app allows users to browse and play various internet radio stations.

![image](https://github.com/user-attachments/assets/05314912-26d9-41bf-a755-917f2a4672e3)

## Overview

The application allows users to:

- Browse a list of available radio stations
- Select and play any station
- View station details (image, name, description)
- Control playback: Play, Pause, Next, Previous
- Adjust volume using a dedicated slider
- Enjoy a smooth visual wave animation indicating when music is playing

> Instead of a standard progress bar (which doesn’t make sense for live radio), a subtle animated wave was implemented to reflect the playing state and improve visual feedback.

## Tech Stack

- **Vite** – fast frontend tooling for development
- **React** – component-based UI framework
- **TypeScript** – static type checking
- **CSS Modules** – scoped styling for components

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ekaterina-Kaschenko/mini-player.git
```
```bash
cd mini-player
```
```bash
npm install
```
```bash
npm run dev
```

The app will be available at http://localhost:5173.

## Potential Improvements (Given More Time)

Enhancements that could improve the functionality, maintainability, and accessibility of the Mini TuneIn Player application, if more development time were available.

---

### 1. Scoped Styling & CSS Management

Currently, some class name collisions may occur due to shared or global styles. To avoid conflicts and improve scalability, the following styling strategies could be adopted:

- **CSS-in-JS** using libraries like [Styled Components](https://styled-components.com/)
- **Tailwind CSS** for utility-first, scalable styling
- **SASS/SCSS** with the [BEM](http://getbem.com/) naming convention for structure and clarity
- **CSS Modules** with stricter isolation per component


---

### 2. Error Handling & User Feedback

The current version of the app does not provide any visible feedback if a radio station fails to load. Future improvements in this area could include:

- Displaying fallback UI messages when a stream fails to load
- Showing loading indicators or placeholders while waiting for station data
- Using error boundaries to gracefully handle rendering errors
- Providing retry buttons or alternative stream suggestions

---

### 3. Responsive Design

At present, the app is optimized for desktop viewports. To ensure usability across all devices, it should be adapted for various screen sizes, including:

- **Mobile phones**
- **Tablets**
- **Small laptops**

Responsive improvements could involve using media queries, a CSS framework like Tailwind or Bootstrap, or CSS Grid/Flexbox layouts to ensure components reflow elegantly on different screens.

---

### 4. Keyboard Accessibility (Key Navigation)

Improving keyboard accessibility would make the app usable by a wider audience, including users who rely on keyboard navigation. Enhancements could include:

- Support for navigating station cards using `Tab`, `Arrow` keys, and `Enter`
- Keyboard shortcuts for play/pause, volume adjustment, and next/previous station
- Clear **focus indicators** to show which element is selected
- Accessible labels and roles to support screen readers


---

## Project Structure & Component Organization

The project is organized into modular, reusable components with a balance between clarity and scalability.

### 🎧 Core Component: `CustomAudioPlayer`

The `CustomAudioPlayer` is the main feature of this application. It handles:

- Audio playback logic
- Visual animation (waveform)
- Volume control
- Station navigation (previous/next)
- Playback state tracking

Because of its complexity, it's placed in a **dedicated directory** that includes its own internal subcomponents.

```bash
src/
  └── CustomAudioPlayer/
      ├── CustomAudioPlayer.tsx
      └── components/
          ├── Audio.tsx
          ├── Controls.tsx
          ├── VolumeControl.tsx
          └── PlayAnimation.tsx
```
Each of these internal components is focused, minimal, and closely tied to the player itself. Their styles are kept local to `CustomAudioPlayer.css` for simplicity.

## Shared UI Components

Other visual/UI components like StationList, AutoplayToggle etc. are located in a shared components/ directory.

## Why This Structure
This approach was chosen to:

- Keep the core audio logic separate and easy to navigate
- Avoid cluttering the shared components folder with logic-heavy concerns
- Allow quick expansion of player features without impacting unrelated UI components

While this structure works well for small projects, larger teams may opt for a more formalized architecture (e.g. feature-based, atomic design, or domain-driven component grouping). Every project is different, and team consensus usually defines the final structure.
