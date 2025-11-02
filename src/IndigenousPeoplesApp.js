import React, { useState, useEffect } from 'react';
import { Book, Users, Home, Mountain, Heart, Languages } from 'lucide-react';

const IndigenousPeoplesApp = () => {
  useEffect(() => {
    // Agregar Tailwind CSS si no está presente
    if (!document.querySelector('script[src*="tailwind"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);
  const [selectedPeople, setSelectedPeople] = useState('malecu');

  const malecuData = {
    name: 'Maleku',
    image: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2025/05/Intrepid-Travel-Costa-Rica-Maleku-community-visit-and-reforestation-traditional-man2.jpg',
    description: 'Pueblo indígena del norte de Costa Rica, guardián de la cuenca del Río Frío',
    sections: [
      {
        icon: Users,
        title: 'Población y Ubicación',
        content: 'Los maleku son el pueblo indígena más pequeño de Costa Rica y el único sobreviviente en el norte del país. En la actualidad habitan en el Territorio Indígena Maleku, que se ubica en el cantón de Guatuso de la provincia de Alajuela, Costa Rica.',
        citation: '(Vásquez, 2011)',
        details: 'Su población que apenas alcanza los 550 individuos se concentra en 3 comunidades o palenques: El Sol, Margarita y Tonjibe, localizados a orillas del Río El Sol.'
      },
      {
        icon: Heart,
        title: 'Situación Actual',
        content: 'Este pueblo indígena se encuentra en situación vulnerable debido a la pérdida de su territorio ancestral y la destrucción de los recursos naturales, fundamentales para su supervivencia material y cultural.',
        citation: '(Vásquez, 2011)',
        details: 'La falta de empleos y tierras, el dominio demográfico no indígena dentro de su propio territorio, el reducido tamaño de su población y el fuerte proceso de aculturación y mestizaje, han ocasionado el abandono y la sustitución de actividades económicas tradicionales.'
      },
      {
        icon: Home,
        title: 'Organización Social y Vivienda',
        content: 'En la sociedad maleku predominaba el tipo de familia extensa, la cual se componía de cinco o seis familias nucleares, cuyos miembros estaban unidos por lazos de parentesco o matrimonio.',
        citation: '(Vásquez, 2011)',
        details: 'Las viviendas consistían en ranchos multifamiliares que podían llegar a medir hasta 800m² los más grandes. Los ranchos tenían forma rectangular y eran construidos con postes de madera gruesos. El techo estaba hecho con hojas de palma de suita y tenía forma angular.'
      },
      {
        icon: Mountain,
        title: 'Palenques y Territorio',
        content: 'El palenque consistía en un grupo de 3 o 4 ranchos multifamiliares, construidos muy cerca unos de otros y ubicados a orillas de un río principal de la zona.',
        citation: '(Vásquez, 2011)',
        details: 'Las familias extensas que habitaban en los ranchos podían llegar a tener en promedio 30-35 miembros, por consiguiente, se estima que un palenque típico podía albergar una población que oscilaba entre los 90 y los 140 habitantes.'
      },
      {
        icon: Heart,
        title: 'Religión y Cosmovisión',
        content: 'Los ríos, incluyendo las cataratas y lagunas, eran considerados sitios sagrados porque un dios específico vivía en ese lugar. Cada dios tenía soberanía y dominio sobre un territorio que coincidía con la cuenca de un río determinado.',
        citation: '(Vásquez, 2011)',
        details: 'La religión tradicional maleku (tocuismo) se caracterizaba por un conjunto de actitudes, prácticas y creencias relacionadas con lo sobrenatural, influyó en todas las actividades de la sociedad maleku y se convirtió en un importante elemento de identidad.'
      },
      {
        icon: Languages,
        title: 'Lengua',
        content: 'La lengua maléku lhaíca (el habla de nuestras personas) es una lengua chibcha derivada de un tronco protochibcha común que se separó en diferentes grupos lingüísticos hace unos 6,000 años.',
        citation: '(Vásquez, 2011)',
        details: 'A partir de ese momento cada uno de esos grupos, entre los cuales se encuentran los maleku, comenzó a construir su propio lenguaje e identidad cultural.'
      }
    ],
    reference: 'Vásquez, R. C. (2011). El pueblo indígena maleku de Costa Rica y su patrón de asentamiento en la segunda mitad del siglo XIX. Revista Geográfica, 150, 75-96. https://biblat.unam.mx/es/revista/revista-geografica/articulo/el-pueblo-indigena-maleku-de-costa-rica-y-su-patron-de-asentamiento-en-la-segunda-mitad-del-siglo-xix'
  };

  const bribriData = {
    name: 'Bribri',
    image: 'https://static.wixstatic.com/media/95f0e3_493203ba66b14df2bd98187262419705~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/95f0e3_493203ba66b14df2bd98187262419705~mv2.jpg',
    description: 'Pueblo de la Cordillera de Talamanca, nacidos de la semilla de Sibö',
    sections: [
      {
        icon: Users,
        title: 'Identidad Cultural',
        content: 'Los bribris y cabécares de Sulá señalan dos poblaciones indígenas unidas por razones históricas, sin embargo con grandes diferencias en el idioma, cantos y danzas ceremoniales, narraciones sagradas, costumbres y tradiciones propias de cada cultura.',
        citation: '(Ministerio de Educación Pública, s.f.)',
        details: 'Estas diferencias culturales aportan al conocimiento de la cultura costarricense.'
      },
      {
        icon: Heart,
        title: 'Guías Espirituales',
        content: 'Los guías espirituales marcan su presencia portando grandes bastones de madera, sagrados, como símbolo de jerarquía, eso les permite entrar en comunicación, mediante sus sonidos, con el mundo mágico de los espíritus.',
        citation: '(Ministerio de Educación Pública, s.f.)',
        details: 'Las leyendas explican su poder mítico de transformación: el águila como el animal más fuerte y poderoso; convertido en jaguar, el animal más feroz, lucha en las batallas guerreras. También son importantes la serpiente, el murciélago y la lechuza en los rituales.'
      },
      {
        icon: Mountain,
        title: 'Origen y Cosmovisión',
        content: 'Los bribris "nacieron de una semilla esparcida por Sibö en la Cordillera de Talamanca y como los indígenas siguen la misma ruta del Sol, se nace, se crece y se muere para regresar al lugar de donde se viene, es el alma de todo lo existente".',
        citation: '(Ministerio de Educación Pública, s.f.)',
        details: 'Estas comunidades tienen una visión espiritual y mítica del universo y del mundo, así como su conocimiento ancestral el cual representa el equilibrio entre los humanos y las fuerzas sobrenaturales que los rodean.'
      },
      {
        icon: Book,
        title: 'Resistencia Cultural',
        content: 'Se trata de la explicación mítica del origen del universo y de los dioses hacia una explicación racional del respeto y valores de todo lo creado por Sibö en el mundo.',
        citation: '(Ministerio de Educación Pública, s.f.)',
        details: 'Con ello han resistido desde la conquista española y sus tradiciones han sido legadas a las familias y comunidades, habitantes armoniosos con su naturaleza y el cosmos.'
      },
      {
        icon: Mountain,
        title: 'Lugares Sagrados',
        content: 'Los lugares sagrados tienen una connotación espiritual importante para los habitantes bribris, representan esa interacción de Sibö con el ser humano.',
        citation: '(Ministerio de Educación Pública, s.f.)',
        details: 'Entre ellos se encuentra la montaña sagrada llamada Suláyöm, los cerros, los ríos, el agua, los animales, las lagunas, charcas de agua caliente llamadas Duli, dejadas por Sibö para curarse cuando estaba en la Tierra; si alguien se baña allí no puede tocar carne o sal por 15 días.'
      }
    ],
    reference: 'Ministerio de Educación Pública. (s.f.). Minienciclopedia de los Territorios Indígenas de Costa Rica: Tomo 1. Los Bribris y Cabécares de Sulá [PDF]. Departamento de Educación Intercultural. https://mep.go.cr/sites/default/files/media/tomo_1.pdf'
  };

  const currentData = selectedPeople === 'malecu' ? malecuData : bribriData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-green-800 text-white py-8 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-2">
            Pueblos Indígenas de Costa Rica
          </h1>
          <p className="text-center text-green-100 text-lg">
            Maleku y Bribri: Patrimonio Cultural Costarricense
          </p>
          <p className="text-center text-green-200 text-sm mt-3">
            Melannie Arguedas Delgado - Estudiante de Ingeniería en Sistemas
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Book className="w-6 h-6 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-green-800">
              Acerca de este Proyecto
            </h2>
          </div>
          <div className="text-gray-700 space-y-3">
            <p className="leading-relaxed">
              Esta página web ha sido desarrollada como parte de un trabajo universitario enfocado en las 
              <strong> creencias y cosmovisión de los pueblos indígenas de Costa Rica</strong>.
            </p>
            <p className="leading-relaxed">
              El objetivo de esta página es generar un ejemplo de cómo la tecnología podría conservar 
              las creencias indígenas enfatizando en las poblaciones Bribri y Maleku, organización social 
              y patrimonio cultural de estas comunidades que representan una parte fundamental de la 
              identidad costarricense.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedPeople('malecu')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedPeople === 'malecu'
                ? 'bg-green-700 text-white shadow-lg scale-105'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}
          >
            Maleku
          </button>
          <button
            onClick={() => setSelectedPeople('bribri')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedPeople === 'bribri'
                ? 'bg-green-700 text-white shadow-lg scale-105'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}
          >
            Bribri
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 md:h-80">
              <img 
                src={currentData.image} 
                alt={`Territorio ${currentData.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-4xl font-bold mb-2">
                    {currentData.name}
                  </h2>
                  <p className="text-lg text-gray-200">
                    {currentData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {currentData.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <section.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      {section.content}
                    </p>
                    <p className="text-sm italic text-gray-600 mb-3">
                      {section.citation}
                    </p>
                    {section.details && (
                      <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-green-200 pl-4">
                        {section.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 rounded-lg p-6 border-l-4 border-green-700">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
              <Book className="w-5 h-5" />
              Referencia Bibliográfica
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {currentData.reference}
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-green-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-lg mb-2">
            Melannie Arguedas Delgado
          </p>
          <p className="text-green-100 mb-1">
            Estudiante de Ingeniería en Sistemas
          </p>
          <p className="text-green-200 text-sm mb-3">
            Trabajo Universitario - Investigación sobre Creencias de Pueblos Indígenas
          </p>
          <p className="text-sm text-green-200 italic">
            Proyecto con visión a futuro: Plataforma de centralización de información 
            sobre cultura y vivencias de los pueblos indígenas de Costa Rica
          </p>
          <p className="text-xs text-green-300 mt-3">
            © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IndigenousPeoplesApp;