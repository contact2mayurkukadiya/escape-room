# 🕷️ Spider Hunter Escape Room

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white)](https://sweetalert2.github.io/)

> A thrilling web-based escape room game where you hunt down spiders by answering challenging questions! Built with Angular and styled with Tailwind CSS.

[Game Preview](https://contact2mayurkukadiya.github.io/escape-room)

## 🎮 Game Overview

**Spider Hunter Escape Room** is an interactive puzzle game where players must eliminate all spiders from the screen by answering trivia questions correctly. Each spider belongs to a group, and answering a question correctly removes an entire group of spiders. But beware - wrong answers give the spiders the upper hand!

## ✨ Features

- 🕸️ **Dynamic Spider Generation**: Spiders are randomly positioned across the screen
- 🧠 **Trivia Questions**: Answer multiple-choice questions to eliminate spider groups
- 🎯 **Group Elimination**: Correct answers remove entire spider families
- 🎨 **Beautiful UI**: Modern design with smooth animations and SweetAlert2 dialogs
- 📱 **Responsive Design**: Play on desktop or mobile devices
- ⚡ **Fast & Smooth**: Built with Angular for optimal performance

## 🎯 How to Play

1. **Start the Game**: Click "Start Playing" when the welcome dialog appears
2. **Hunt Spiders**: Click on any spider to trigger a question
3. **Answer Questions**: Select the correct answer from multiple choices
4. **Eliminate Groups**: Correct answers remove all spiders in that group
5. **Win the Game**: Eliminate all spiders to become the ultimate Spider Hunter!

### Game Rules
- ✅ **Correct Answer**: Eliminates the entire spider group
- ❌ **Wrong Answer**: The spiders win - try again!
- 🏆 **Victory**: Clear all spiders to save the day

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/spider-hunter-escape-room.git
   cd spider-hunter-escape-room
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

### Project Structure

```
src/
├── app/
│   ├── home/                 # Main game component
│   ├── data/                 # Game data and questions
│   │   ├── data.json        # Spider configuration
│   │   ├── questions.json   # Trivia questions
│   │   └── alert.const.ts   # Dialog configurations
│   └── shared/              # Shared components
├── styles.scss              # Global styles
└── main.ts                  # Application bootstrap
```

## 🎨 Technologies Used

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: SweetAlert2
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📊 Game Data

The game includes:
- **60+ Trivia Questions** across various topics
- **Spider Groups** with parent-child relationships
- **Dynamic Positioning** for varied gameplay
- **Responsive Alerts** for game feedback

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Adding New Questions

Questions are stored in `src/app/data/questions.json`. Each question object should have:
```json
{
  "question": "Your question here?",
  "ans_arr": ["Option A", "Option B", "Option C", "Option D"],
  "correct_ans": "Correct Option"
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Angular
- Special thanks to the SweetAlert2 team for beautiful dialogs
- Inspired by classic escape room games

---

**Happy Hunting! 🕷️🔫**

*Made with Angular, Tailwind CSS, and lots of spider-slaying enthusiasm!* 🚀

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
