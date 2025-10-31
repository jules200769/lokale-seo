
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const OverOnsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Over <span style={{ color: '#dcc8c2' }}>Lokale SEO & Maps</span> Optimalisatie 013
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wij zijn gespecialiseerd in het helpen van lokale ondernemers in Tilburg en omgeving 
              om beter gevonden te worden in Google Maps en lokale zoekresultaten.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Onze <span style={{ color: '#dcc8c2' }}>Missie</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Lokale ondernemers verdienen het om gevonden te worden door hun ideale klanten. 
                Wij geloven dat elke lokale business de kans moet krijgen om te groeien door 
                optimale online zichtbaarheid.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Met onze expertise in lokale SEO en Google Business Profile optimalisatie 
                zorgen wij ervoor dat uw bedrijf prominent verschijnt wanneer potentiële 
                klanten in Tilburg en omgeving naar uw diensten zoeken.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/team-work.jpg"
                alt="SEO team aan het werk"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Ons <span style={{ color: '#dcc8c2' }}>Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Een perfecte combinatie van content expertise en technische kennis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Partner A */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-user-line text-4xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Mikail van Engelen</h3>
              <p className="font-semibold mb-4" style={{ color: '#dcc8c2' }}>Content & Klantrelaties Specialist</p>
              <p className="text-gray-600 mb-6">
                Verantwoordelijk voor content strategie, klantcommunicatie en het ontwikkelen 
                van effectieve lokale SEO campagnes. Zorgt ervoor dat elke klant de persoonlijke 
                aandacht krijgt die ze verdienen.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="px-3 py-1 rounded-full text-sm text-black border border-gray-300">Content Marketing</div>
                <div className="px-3 py-1 rounded-full text-sm text-black border border-gray-300">Klantrelaties</div>
              </div>
            </div>

            {/* Partner B */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-code-line text-4xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Jules Roelen</h3>
              <p className="font-semibold mb-4" style={{ color: '#dcc8c2' }}>Techniek & Automatisering Specialist</p>
              <p className="text-gray-600 mb-6">
                Focust op de technische aspecten van SEO, automatisering van processen en 
                het implementeren van geavanceerde tracking en analytics systemen voor 
                meetbare resultaten.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="px-3 py-1 rounded-full text-sm text-black border border-gray-300">Technische SEO</div>
                <div className="px-3 py-1 rounded-full text-sm text-black border border-gray-300">Automatisering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Onze <span style={{ color: '#dcc8c2' }}>Waarden</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze principes staan centraal in alles wat wij doen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-trophy-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Resultaatgericht</h3>
              <p className="text-gray-600">Wij werken alleen met meetbare doelen en zorgen voor concrete resultaten die uw business vooruithelpen.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-line-chart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Data-gedreven</h3>
              <p className="text-gray-600">Alle beslissingen worden ondersteund door data en analytics. Geen giswerk, alleen bewezen strategieën.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-map-pin-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Lokale betrokkenheid</h3>
              <p className="text-gray-600">Als Tilburgers kennen wij de lokale markt en begrijpen wij wat lokale ondernemers nodig hebben.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-eye-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Transparantie</h3>
              <p className="text-gray-600">Volledige transparantie in onze werkwijze, prijzen en resultaten. U weet altijd waar u aan toe bent.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-user-heart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Persoonlijke aanpak</h3>
              <p className="text-gray-600">Elke klant is uniek. Wij ontwikkelen maatwerk strategieën die perfect aansluiten bij uw bedrijf.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className="ri-arrow-up-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Continue verbetering</h3>
              <p className="text-gray-600">De digitale wereld verandert snel. Wij blijven leren en verbeteren om voorop te blijven lopen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                Onze <span style={{ color: '#dcc8c2' }}>Werkwijze</span>
              </h2>
              <p className="text-xl text-gray-600">
                Hoe wij samenwerken om uw lokale online zichtbaarheid te maximaliseren
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Mikail van Engelen: Content & Klanten",
                  description: "Focust op het ontwikkelen van effectieve content strategieën, het onderhouden van klantrelaties en het creëren van overtuigende lokale SEO campagnes die resoneren met uw doelgroep.",
                  features: ["Content strategie ontwikkeling", "Klantcommunicatie en support", "Lokale keyword research", "Review management strategieën"]
                },
                {
                  title: "Jules Roelen: Techniek & Automatisering",
                  description: "Zorgt voor de technische implementatie, automatisering van processen en het opzetten van geavanceerde tracking systemen voor meetbare resultaten en continue optimalisatie.",
                  features: ["Technische SEO implementatie", "Analytics en tracking setup", "Automatisering van processen", "Performance monitoring"]
                }
              ].map((approach, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-black mb-4">{approach.title}</h3>
                  <p className="text-gray-600 mb-6">{approach.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {approach.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full" style={{ backgroundColor: '#dcc8c2' }}>
                          <i className="ri-check-line text-black text-sm"></i>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-black relative"
        style={{
          backgroundImage: 'url(/images/cta-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar om samen te werken?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Laten wij u helpen om beter gevonden te worden in Tilburg en omgeving. 
            Plan een gratis kennismakingsgesprek en ontdek wat wij voor u kunnen betekenen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-semibold transition-all whitespace-nowrap text-black cursor-pointer"
              style={{ backgroundColor: '#dcc8c2' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c9b3ab';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dcc8c2';
              }}
            >
              Plan gratis kennismaking
            </Link>
            <Link
              to="/diensten"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OverOnsPage;
