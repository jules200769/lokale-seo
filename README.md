# Lokale SEO Website

React website voor lokale SEO en Google Maps optimalisatie diensten.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Supabase** - Backend/Database
- **i18next** - Internationalisatie

## Setup

### Vereisten

- Node.js 18+ 
- npm of yarn

### Installatie

1. Clone het repository:
```bash
git clone https://github.com/jouw-username/jouw-repo-naam.git
cd jouw-repo-naam
```

2. Installeer dependencies:
```bash
npm install
```

3. Maak een `.env.local` bestand aan (zie `.env.example`):
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

4. Start development server:
```bash
npm run dev
```

De website is nu beschikbaar op `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build voor productie (output in `out/` folder)
- `npm run preview` - Preview productie build lokaal

## Project Structuur

```
├── src/
│   ├── components/     # Herbruikbare componenten
│   ├── pages/          # Pagina componenten
│   ├── router/         # Routing configuratie
│   ├── lib/            # Utilities en configuratie
│   └── i18n/           # Internationalisatie
├── public/             # Statische assets
└── out/                # Productie build (niet in Git)

```

## Deployment

Zie `GITHUB_UPLOAD_GUIDE.md` voor deployment instructies.

Voor hosting op mijndomein.nl:
1. Run `npm run build`
2. Upload alle bestanden uit de `out/` folder naar je hosting
3. Upload ook het `.htaccess` bestand (staat in `public/.htaccess`)
4. Stel DNS records in bij mijndomein.nl

## Database Setup

Zie `SUPABASE_SETUP.md` voor Supabase configuratie instructies.

## License

Private project

