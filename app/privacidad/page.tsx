import React from "react";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans py-20 px-6 selection:bg-cyan-500/30 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-cyan-400 font-medium">VELION AI Agency</p>
          <p className="text-zinc-500 text-sm mt-2">
            Última actualización: Enero 2025
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">1.</span> Introducción
            </h2>
            <p className="leading-relaxed">
              En <strong className="text-white">VELION</strong> respetamos tu
              privacidad y nos comprometemos a proteger tus datos personales.
              Esta política explica cómo recopilamos, usamos y protegemos tu
              información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">2.</span> Responsable del
              Tratamiento
            </h2>
            <ul className="list-none space-y-2 ml-4 text-zinc-300">
              <li>
                <strong className="text-white">Responsable:</strong> VELION
              </li>
              <li>
                <strong className="text-white">Ubicación:</strong> Argentina
              </li>
              <li>
                <strong className="text-white">Contacto:</strong> +54 9 3541
                21-5803
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">3.</span> Datos que Recopilamos
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  3.1 Datos que nos proporcionás directamente:
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-300">
                  <li>Nombre completo</li>
                  <li>Nombre de empresa</li>
                  <li>Email</li>
                  <li>Número de teléfono/WhatsApp</li>
                  <li>
                    Información sobre tu negocio y necesidades de automatización
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  3.2 Datos recopilados automáticamente:
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-300">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas en nuestro sitio</li>
                  <li>Fecha y hora de acceso</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  3.3 Datos de tus clientes (cuando usás nuestro servicio):
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-zinc-300">
                  <li>Mensajes de WhatsApp procesados por el agente</li>
                  <li>Datos de citas agendadas</li>
                  <li>Información que tus clientes proporcionen al agente</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">4.</span> Finalidad del
              Tratamiento
            </h2>
            <p className="mb-4">Usamos tus datos para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>Contactarte y responder tus consultas</li>
              <li>Configurar y personalizar tu agente de IA</li>
              <li>Brindarte soporte técnico</li>
              <li>Mejorar nuestros servicios</li>
              <li>
                Enviarte información relevante sobre actualizaciones (con tu
                consentimiento)
              </li>
              <li>Cumplir obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">5.</span> Base Legal
            </h2>
            <p className="mb-4">Tratamos tus datos basándonos en:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>Tu consentimiento explícito</li>
              <li>La ejecución del contrato de servicios</li>
              <li>Nuestro interés legítimo en mejorar el servicio</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">6.</span> Compartición de Datos
            </h2>
            <p className="mb-4">
              <strong className="text-white">No vendemos tus datos.</strong>{" "}
              Solo compartimos información con:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                <strong className="text-white">
                  Proveedores de infraestructura:
                </strong>{" "}
                Servidores en la nube para alojar los servicios
              </li>
              <li>
                <strong className="text-white">APIs de terceros:</strong>{" "}
                WhatsApp, Google (Calendar, Sheets), según las integraciones
                contratadas
              </li>
              <li>
                <strong className="text-white">Proveedores de IA:</strong>{" "}
                OpenAI, Google (Gemini) para procesar las conversaciones
              </li>
              <li>
                <strong className="text-white">Autoridades:</strong> Solo si es
                requerido legalmente
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">7.</span> Datos de los Clientes de
              Nuestros Clientes
            </h2>
            <p className="mb-4">
              Cuando procesamos mensajes de WhatsApp de tus clientes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Actuamos como <strong>encargados del tratamiento</strong> bajo
                tus instrucciones
              </li>
              <li>No usamos esos datos para fines propios</li>
              <li>
                Los datos se procesan únicamente para brindar el servicio
                contratado
              </li>
              <li>Vos seguís siendo el responsable ante tus clientes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">8.</span> Seguridad de los Datos
            </h2>
            <p className="mb-4">Implementamos medidas de seguridad:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>Encriptación de datos en tránsito (HTTPS/TLS)</li>
              <li>Acceso restringido solo a personal autorizado</li>
              <li>Servidores seguros con monitoreo 24/7</li>
              <li>Copias de seguridad periódicas</li>
              <li>Contraseñas encriptadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">9.</span> Retención de Datos
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                <strong className="text-white">Datos de contacto:</strong>{" "}
                Mientras dure la relación comercial + 2 años
              </li>
              <li>
                <strong className="text-white">
                  Conversaciones de WhatsApp:
                </strong>{" "}
                90 días (o según lo que configures)
              </li>
              <li>
                <strong className="text-white">Datos de facturación:</strong> 10
                años (obligación legal)
              </li>
              <li>
                <strong className="text-white">Datos de la web:</strong> 12
                meses
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500">
              Podés solicitar la eliminación de tus datos en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">10.</span> Tus Derechos
            </h2>
            <p className="mb-4">Tenés derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                <strong className="text-white">Acceso:</strong> Saber qué datos
                tenemos sobre vos
              </li>
              <li>
                <strong className="text-white">Rectificación:</strong> Corregir
                datos incorrectos
              </li>
              <li>
                <strong className="text-white">Supresión:</strong> Solicitar que
                eliminemos tus datos
              </li>
              <li>
                <strong className="text-white">Oposición:</strong> Oponerte al
                tratamiento de tus datos
              </li>
              <li>
                <strong className="text-white">Portabilidad:</strong> Recibir
                tus datos en formato electrónico
              </li>
              <li>
                <strong className="text-white">Limitación:</strong> Restringir
                el uso de tus datos
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500">
              Para ejercer estos derechos, contactanos por WhatsApp o email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">11.</span> Cookies
            </h2>
            <p className="mb-4">Nuestro sitio web usa cookies para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>Recordar tus preferencias</li>
              <li>Analizar el tráfico del sitio (Google Analytics)</li>
              <li>Mejorar tu experiencia de navegación</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500">
              Podés desactivar las cookies desde tu navegador, aunque algunas
              funciones pueden verse afectadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">12.</span> Transferencias
              Internacionales
            </h2>
            <p className="mb-4">
              Algunos de nuestros proveedores están fuera de Argentina (ej:
              servidores en USA). En estos casos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Nos aseguramos de que cumplan estándares de seguridad adecuados
              </li>
              <li>Los datos se transfieren de forma encriptada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">13.</span> Menores de Edad
            </h2>
            <p className="leading-relaxed">
              Nuestros servicios están dirigidos a empresas y mayores de 18
              años. No recopilamos intencionalmente datos de menores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">14.</span> Cambios en esta
              Política
            </h2>
            <p className="leading-relaxed">
              Podemos actualizar esta política. Los cambios se publicarán en
              esta página con la fecha de actualización. Para cambios
              significativos, te notificaremos por email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">15.</span> Contacto
            </h2>
            <p className="mb-4">Para consultas sobre privacidad:</p>
            <ul className="list-none space-y-2 ml-4 text-zinc-300">
              <li>
                <strong className="text-white">WhatsApp:</strong> +54 9 3541
                21-5803
              </li>
              <li>
                <strong className="text-white">Email:</strong>{" "}
                contacto@velion.com.ar
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-12 border-t border-zinc-800">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
