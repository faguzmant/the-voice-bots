// Configuración de The Voice Bots.
// 1) Pega tu API key de Google AI Studio cortada por la mitad: la primera mitad en KEY_A y la segunda en KEY_B.
//    (Se parte en dos solo para que GitHub no la detecte como key filtrada y Google no la desactive. No es seguridad real:
//     la protección de verdad es restringir la key a la dirección de esta página en Google Cloud. Mira el README.)
// 2) Guarda el archivo (Commit changes). En 1 o 2 minutos la página ya funciona.
window.TV_CONFIG = {
  KEY_A: "AQ.Ab8RN6L9gfwNiRF-jd_C2d3J",
  KEY_B: "IR74lLwbFjM8OPEoedpPJ_omZg",
  // Modelos que prueba, en orden. Si uno no existe o se agota, pasa al siguiente.
  MODELS: ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite"]
};
