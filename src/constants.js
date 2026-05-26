// ══════════════════════════════════════════════════
//  EDITAR ESTOS VALORES PARA PERSONALIZAR EL TALLER
// ══════════════════════════════════════════════════

export const WA_NUMBER_RAW = "5491130346645"
export const WA_DISPLAY    = "+54 9 11 3034-6645"
export const TALLER_NAME   = "Andrés Racing Performance"
export const TALLER_SHORT  = "Andrés Racing"
export const EMAIL         = "andresracingperformance@gmail.com"
export const LOCATION      = "Valeria del Mar · Pinamar, Buenos Aires"
export const OWNER         = "Andrés Sperati"
export const INSTAGRAM_LINK = "https://www.instagram.com/andresracingperformance"
export const FACEBOOK_LINK  = "https://www.facebook.com/andresracingperformance"

// ── WhatsApp helper ──────────────────────────────
const WA_BASE = `https://wa.me/${WA_NUMBER_RAW}`
export const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`

// ── Mensajes prearmados por servicio ────────────
export const WA_MSGS = {
  general:
    'Hola Andrés, quiero hacer una consulta sobre los servicios de Andrés Racing Performance.',

  dynojet:
    'Hola Andrés, quiero consultar por el banco Dynojet.\n\nAuto:\n¿Tiene modificaciones?:\nQué quiero medir:\nConsulta:',

  mecanica:
    'Hola Andrés, quiero consultar por mecánica o diagnóstico.\n\nAuto:\nProblema o síntoma:\nConsulta:',

  performance:
    'Hola Andrés, quiero consultar por performance para mi auto.\n\nAuto:\nQué tiene hecho:\nQué me gustaría mejorar:\nConsulta:',

  alineacion:
    'Hola Andrés, quiero consultar por alineación, suspensión o tren delantero.\n\nAuto:\nQué problema noto:\nConsulta:',

  karting:
    'Hola Andrés, quiero consultar por servicios de karting.\n\nTipo de kart:\nUso:\nServicio que necesito:\nConsulta:',

  pista:
    'Hola Andrés, quiero consultar por preparación para pista.\n\nVehículo:\nUso:\nQué necesito revisar:\nConsulta:',
}

// Backward-compat alias used by components that haven't been updated yet
export const WA_LINK = waLink(WA_MSGS.general)
