import React from "react";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans py-20 px-6 selection:bg-cyan-500/30 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="border-b border-zinc-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Términos y Condiciones
          </h1>
          <p className="text-cyan-400 font-medium">VELION AI Agency</p>
          <p className="text-zinc-500 text-sm mt-2">
            Última actualización: Enero 2025
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">1.</span> Información General
            </h2>
            <p className="leading-relaxed">
              Estos Términos y Condiciones regulan el uso de los servicios
              ofrecidos por <strong className="text-white">VELION</strong>{" "}
              ("nosotros", "nuestro"), una agencia de automatización con
              inteligencia artificial con sede en Argentina.
            </p>
            <p className="mt-4 leading-relaxed">
              Al contratar nuestros servicios, aceptás estos términos en su
              totalidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">2.</span> Servicios Ofrecidos
            </h2>
            <p className="mb-4 leading-relaxed">
              VELION ofrece servicios de automatización empresarial mediante
              agentes de inteligencia artificial, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>Atención al cliente automatizada vía WhatsApp</li>
              <li>Agendamiento automático de citas</li>
              <li>Gestión administrativa automatizada</li>
              <li>
                Integración con herramientas externas (Google Calendar, Sheets,
                Excel, etc.)
              </li>
              <li>Desarrollo de soluciones personalizadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">3.</span> Planes y Precios
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  3.1 Plan PyME
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="text-zinc-500">Costo mensual:</span>{" "}
                    <span className="text-cyan-400 font-mono">$85.000 ARS</span>
                  </li>
                  <li>
                    <span className="text-zinc-500">Setup inicial:</span>{" "}
                    <span className="text-cyan-400 font-mono">
                      $190.000 ARS
                    </span>{" "}
                    (pago único)
                  </li>
                </ul>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  3.2 Plan Enterprise
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="text-zinc-500">Proyectos desde:</span>{" "}
                    <span className="text-cyan-400 font-mono">USD 1.500</span>
                  </li>
                  <li>Cotización personalizada según requerimientos</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-500 italic">
              Los precios pueden actualizarse con previo aviso de 30 días.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">4.</span> Forma de Pago
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>Los pagos se realizan por adelantado, de forma mensual.</li>
              <li>Métodos aceptados: Transferencia bancaria, Mercado Pago.</li>
              <li>El servicio se activa una vez confirmado el pago.</li>
              <li>
                El setup inicial se abona antes de comenzar el desarrollo.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">5.</span> Garantía de Resultados
            </h2>
            <div className="bg-cyan-950/20 border border-cyan-500/20 p-6 rounded-xl">
              <p className="mb-4 font-medium text-cyan-100">
                Ofrecemos una <strong>garantía de 30 días</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
                <li>
                  Si en los primeros 30 días no ves mejoras en tu atención al
                  cliente, te devolvemos el 100% del setup inicial.
                </li>
                <li>
                  Esta garantía no aplica si el cliente no proporciona la
                  información necesaria para configurar el agente.
                </li>
                <li>
                  La garantía no cubre cambios de opinión o cancelaciones sin
                  causa justificada.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">6.</span> Obligaciones del Cliente
            </h2>
            <p className="mb-4">El cliente se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Proporcionar información veraz y actualizada sobre su negocio
              </li>
              <li>
                Facilitar acceso a las herramientas necesarias (WhatsApp
                Business, Google Calendar, etc.)
              </li>
              <li>
                Responder consultas técnicas en un plazo razonable (48-72 horas)
              </li>
              <li>No utilizar el servicio para fines ilegales o spam</li>
              <li>
                Mantener la confidencialidad de sus credenciales de acceso
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">7.</span> Obligaciones de VELION
            </h2>
            <p className="mb-4">VELION se compromete a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Entregar el servicio en los plazos acordados (8 días hábiles
                para implementación estándar)
              </li>
              <li>
                Mantener la confidencialidad de la información del cliente
              </li>
              <li>Brindar soporte técnico durante el horario comercial</li>
              <li>Notificar cualquier incidente que afecte el servicio</li>
              <li>Mantener la infraestructura con un uptime del 99.9%</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">8.</span> Propiedad Intelectual
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Los agentes desarrollados son de uso exclusivo del cliente
                contratante.
              </li>
              <li>
                VELION retiene la propiedad del código base y metodología.
              </li>
              <li>
                El cliente es dueño de sus datos y puede exportarlos en
                cualquier momento.
              </li>
              <li>
                VELION puede mencionar al cliente como caso de éxito, salvo que
                el cliente lo prohíba expresamente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">9.</span> Uso de WhatsApp
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>VELION utiliza la API oficial de WhatsApp Business.</li>
              <li>
                El cliente es responsable de cumplir con las políticas de
                WhatsApp.
              </li>
              <li>
                VELION no se hace responsable de bloqueos causados por mal uso
                del cliente.
              </li>
              <li>
                Implementamos técnicas de "Human-Like Timing" para proteger la
                línea.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">10.</span> Cancelación y
              Reembolsos
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Por parte del Cliente:
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
                  <li>
                    Podés cancelar en cualquier momento con 15 días de
                    anticipación.
                  </li>
                  <li>No hay reembolso del mes en curso.</li>
                  <li>
                    El setup inicial no es reembolsable después de los primeros
                    30 días.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Por parte de VELION:
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
                  <li>
                    Podemos cancelar el servicio con 30 días de anticipación.
                  </li>
                  <li>
                    En caso de cancelación por nuestra parte, se reembolsará el
                    período no utilizado.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">11.</span> Limitación de
              Responsabilidad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                VELION no es responsable por pérdidas indirectas, lucro cesante
                o daños consecuentes.
              </li>
              <li>
                Nuestra responsabilidad máxima está limitada al monto pagado en
                los últimos 3 meses.
              </li>
              <li>
                No somos responsables por interrupciones de servicios de
                terceros (WhatsApp, Google, etc.).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">12.</span> Soporte Técnico
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Soporte incluido de lunes a viernes, 9:00 a 18:00 (hora
                Argentina).
              </li>
              <li>Tiempo de respuesta: 24 horas hábiles.</li>
              <li>Emergencias críticas: atención prioritaria.</li>
              <li>
                El soporte no incluye capacitación extendida ni modificaciones
                fuera del alcance original.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">13.</span> Modificaciones
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                VELION puede modificar estos términos con 30 días de
                anticipación.
              </li>
              <li>Las modificaciones se notificarán por email.</li>
              <li>
                El uso continuado del servicio implica aceptación de los nuevos
                términos.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">14.</span> Ley Aplicable y
              Jurisdicción
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-zinc-300">
              <li>
                Estos términos se rigen por las leyes de la República Argentina.
              </li>
              <li>
                Cualquier disputa se resolverá en los tribunales ordinarios de
                la ciudad de Córdoba, Argentina.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-500">15.</span> Contacto
            </h2>
            <p className="mb-4">Para consultas sobre estos términos:</p>
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
