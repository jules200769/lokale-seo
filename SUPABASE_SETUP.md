# Supabase Setup Instructies

## 1. Supabase Project Aanmaken

1. Ga naar [supabase.com](https://supabase.com)
2. Maak een account aan of log in
3. Klik op "New Project"
4. Kies je organisatie
5. Vul project details in:
   - **Name**: lokale-seo-website
   - **Database Password**: (kies een sterk wachtwoord)
   - **Region**: Europe West (Amsterdam)
6. Klik "Create new project"

## 2. Database Schema Installeren

1. Ga naar de SQL Editor in je Supabase dashboard
2. Kopieer de inhoud van `supabase-schema.sql`
3. Plak het in de SQL Editor
4. Klik "Run" om de tabel aan te maken

## 3. Environment Variabelen Instellen

1. Ga naar Settings > API in je Supabase dashboard
2. Kopieer je Project URL en anon public key
3. Maak een `.env.local` bestand in je project root:
```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 4. Afbeeldingen Vervangen

Vervang de placeholder bestanden in `/public/images/` met je echte afbeeldingen:
- `logo.png` - Je bedrijfslogo
- `hero-bg.jpg` - Hero sectie achtergrond
- `cta-bg.jpg` - CTA sectie achtergrond  
- `team-work.jpg` - Team foto
- `workspace.jpg` - Werkruimte foto
- `favicon.png` - Website icoon

## 5. Testen

1. Start de development server: `npm run dev`
2. Ga naar de contact pagina
3. Vul het formulier in en test of het wordt opgeslagen in Supabase
4. Controleer in je Supabase dashboard of de data correct wordt opgeslagen

## 6. Production Deployment

Voor productie deployment:
1. Zet je environment variabelen in je hosting platform
2. Bouw de applicatie: `npm run build`
3. Deploy naar je hosting platform

## Database Schema

De `contact_submissions` tabel bevat:
- `id` - Unieke identifier (UUID)
- `name` - Naam van de klant
- `email` - Email adres
- `phone` - Telefoonnummer (optioneel)
- `company` - Bedrijfsnaam (optioneel)
- `message` - Bericht
- `service` - Gewenste dienst (optioneel)
- `created_at` - Tijdstip van indiening
- `status` - Status (new, contacted, closed)
