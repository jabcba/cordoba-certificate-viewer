import React from 'react';

const CertificateViewer = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0782be] py-4 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/2121703779/1215279704.png"
              alt="Municipalidad de Córdoba"
              className="h-12 mr-4"
            />
            <div className="text-white">
              <div className="text-lg font-semibold">Municipalidad</div>
              <div className="text-lg font-semibold">de Córdoba</div>
            </div>
          </div>
          <img
            src="https://ext.same-assets.com/2121703779/4108264495.png"
            alt="Habilitación Online"
            className="h-20"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        {/* Page Title */}
        <div className="bg-gray-100 p-4 mb-6 rounded">
          <h1 className="text-xl font-semibold text-gray-800">
            Detalles del trámite Nº 183623
          </h1>
        </div>

        {/* Certificate Sections */}
        <div className="space-y-6">
          {/* Datos del trámite */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-[#bde4eb] p-3 text-center">
              <h2 className="font-medium text-gray-800">Datos del trámite</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-3 bg-white">
                <strong>Razón Social:</strong> SANCHEZ RIERA SOCIEDAD DE RESPONSABILIDAD LIMITADA
              </li>
              <li className="p-3 bg-white">
                <strong>Cuit:</strong> 33711362849
              </li>
              <li className="p-3 bg-white">
                <strong>Tipo:</strong> 2 Intermedio
              </li>
              <li className="p-3 bg-white">
                <strong>Estado de Habilitación:</strong> Habilitado
              </li>
              <li className="p-3 bg-white">
                <strong>Instancia del Proceso:</strong> Habilitacion Finalizada
              </li>
            </ul>
          </div>

          {/* Datos de habilitación */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-[#bde4eb] p-3 text-center">
              <h2 className="font-medium text-gray-800">Datos de habilitación</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-3 bg-white">
                <strong>Nro. Habilitación:</strong> 040000531/22
              </li>
              <li className="p-3 bg-white">
                <strong>Fecha Habilitación:</strong> 23/06/2022
              </li>
              <li className="p-3 bg-white">
                <strong>Fecha Vencimiento:</strong> 23/06/2027
              </li>
            </ul>
          </div>

          {/* Datos del Inmueble */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-[#bde4eb] p-3 text-center">
              <h2 className="font-medium text-gray-800">Datos del Inmueble</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-3 bg-white">
                <strong>Zona de Influencia:</strong> CPC Colon
              </li>
              <li className="p-3 bg-white">
                <strong>Nro. Catastral:</strong> 062403304200000
              </li>
              <li className="p-3 bg-white">
                <strong>Calle:</strong> MTRO VIDAL
              </li>
              <li className="p-3 bg-white">
                <strong>Número:</strong> 554
              </li>
              <li className="p-3 bg-white">
                <strong>Piso:</strong> -
              </li>
              <li className="p-3 bg-white">
                <strong>Depto/Local:</strong> -
              </li>
              <li className="p-3 bg-white">
                <strong>Barrio:</strong> ALTO ALBERDI
              </li>
              <li className="p-3 bg-white">
                <strong>Código Postal:</strong> 5000
              </li>
              <li className="p-3 bg-white">
                <strong>Superficie Total:</strong> 661.3
              </li>
              <li className="p-3 bg-white">
                <strong>Superficie Cubierta:</strong> 661.3
              </li>
            </ul>
          </div>

          {/* Datos de la Sociedad */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-[#bde4eb] p-3 text-center">
              <h2 className="font-medium text-gray-800">Datos de la Sociedad</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-3 bg-gray-100">
                <strong>Socio Nº:</strong> 1
              </li>
              <li className="p-3 bg-white">
                <strong>Nombre:</strong> JULIETA VALENTINA
              </li>
              <li className="p-3 bg-white">
                <strong>Apellido:</strong> SANCHEZ
              </li>
              <li className="p-3 bg-white">
                <strong>Cuit:</strong> 27284283096
              </li>
              <li className="p-3 bg-white">
                <strong>Email:</strong> cr.quiroga.marcelo@gmail.com
              </li>
              <li className="p-3 bg-white mb-3">
                <strong>Teléfono:</strong> 351111111
              </li>
            </ul>
          </div>

          {/* Datos de las actividades */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-[#bde4eb] p-3 text-center">
              <h2 className="font-medium text-gray-800">Datos de las actividades</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="p-3 bg-gray-100">
                <strong>Actividad Nº:</strong> 2297
              </li>
              <li className="p-3 bg-white">
                <strong>Nombre:</strong> ENSAYOS Y ANÁLISIS TÉCNICOS
              </li>
              <li className="p-3 bg-white">
                <strong>Rubro:</strong> 712000
              </li>
              <li className="p-3 bg-white">
                <strong>SubRubro:</strong> -
              </li>
              <li className="p-3 bg-white">
                <strong>Incluye:</strong> Las actividades de prueba y análisis del comportamiento de todo tipo de materiales y productos, mediante pruebas:
                <br />- acústicas
                <br />- físicas
                <br />- pruebas de composición
                <br />- pureza de minerales
                <br />- químicas
                <br />- vibratorias
                <br />- otras pruebas analíticas La actividad de:
                <br />- empresas de certificación de calidad de máquinas, instrumentos, procesos, productos, etcétera
                <br />- entidades de control y verificación periódica de los vehículos automotores
                <br />- entidades de control bromatológico
                <br />- laboratorios policiales
                <br />- fiscalización de semillas, verduras, etc.
                <br />- servicios de peritos calígrafos
                <br />Los servicios de medición de la pureza del agua o del aire, de la radioactividad, de aguas residuales, etcétera.
              </li>
              <li className="p-3 bg-white">
                <strong>Excluye:</strong> Las actividades de ensayo y análisis veterinarios (750000).
                <br />Las actividades de ensayo y análisis médicos (desde código 863110 a 863190).
              </li>
              <li className="p-3 bg-white mb-3">
                <strong>¿Permite Desafectar Otras Actividades?:</strong> No
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

function App() {
  return <CertificateViewer />;
}

export default App;
