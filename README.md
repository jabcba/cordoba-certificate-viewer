# 🏛️ Córdoba Certificate Viewer

A faithful recreation of the Córdoba, Argentina government certificate viewer interface, built with modern web technologies.

## 🌟 Live Demo

**[View Live Demo](https://same-79rziuaegag-latest.netlify.app)** 

## 📋 Project Description

This project is a pixel-perfect clone of the Córdoba government certificate viewer page, designed to display business license and registration information in a professional, government-compliant format. The application replicates the exact styling, layout, and functionality of the original government interface.

## ✨ Features

- 🎨 **Exact Government Styling** - Perfect recreation of official Córdoba government design
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🔄 **Professional Layout** - Clean, organized sections for easy information viewing
- 🎯 **Government Theme** - Official color scheme (#0782be) and typography
- 📄 **Certificate Display** - Comprehensive business and license information sections
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🔧 **Type Safe** - Full TypeScript implementation

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Package Manager:** Bun
- **Deployment:** Netlify

## 📁 Project Structure

```
cordoba-certificate-viewer/
├── src/
│   ├── App.tsx          # Main certificate viewer component
│   ├── main.tsx         # React app entry point
│   ├── index.css        # Global styles and Tailwind imports
│   └── vite-env.d.ts    # TypeScript environment declarations
├── public/
│   └── _redirects       # Netlify routing configuration
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── biome.json          # Code formatting configuration
├── netlify.toml        # Netlify deployment settings
└── README.md           # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ or Bun
- Git

### Clone the Repository
```bash
git clone https://github.com/jabcba/cordoba-certificate-viewer.git
cd cordoba-certificate-viewer
```

### Install Dependencies

**Using Bun (Recommended):**
```bash
bun install
```

**Using NPM:**
```bash
npm install
```

### Start Development Server

**Using Bun:**
```bash
bun run dev
```

**Using NPM:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `bun run dev` / `npm run dev` - Start development server
- `bun run build` / `npm run build` - Build for production
- `bun run preview` / `npm run preview` - Preview production build
- `bun run lint` / `npm run lint` - Run code linting

## 🎨 Design Features

### Color Scheme
- **Primary Blue:** `#0782be` (Header and accent elements)
- **Light Blue:** `#bde4eb` (Section headers)
- **Background:** Clean white with subtle borders
- **Text:** Professional dark gray hierarchy

### Layout Components
- **Header Section:** Government logos and page title
- **Data Sections:** Organized cards for different information types
- **Business Data:** Company information and registration details
- **License Data:** Official license numbers and validity
- **Property Data:** Address and location information
- **Partner Data:** Business ownership and partnership details
- **Activity Data:** Business activities and classifications

## 🔧 Customization

The application is built with modularity in mind. Key customization points:

- **Colors:** Modify `tailwind.config.js` for theme changes
- **Content:** Update data in `src/App.tsx`
- **Styling:** Adjust components with Tailwind CSS classes
- **Layout:** Modify responsive breakpoints and grid layouts

## 🌐 Deployment

### Netlify (Current)
The project is automatically deployed to Netlify. Any pushes to the main branch trigger a new deployment.

### Manual Deployment
```bash
bun run build
# Deploy the 'dist' folder to your hosting provider
```

## 📱 Browser Support

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues or have questions:
- Create an issue in this repository
- Check the live demo for reference
- Review the original government page for context

## 🔮 Future Enhancements

- [ ] QR Code generation for certificates
- [ ] Search and filter functionality
- [ ] Print-optimized styling
- [ ] PDF export capability
- [ ] Multi-language support (Spanish/English)
- [ ] API integration for real data
- [ ] Advanced form validation

---

**Built with ❤️ for government transparency and accessibility**