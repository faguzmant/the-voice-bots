# The Voice Bots

Chat de broma con tres bots que imitan (exagerando) a los amigos del grupo. Eliges quién eres, te toca una misión y ellos hacen todo lo posible para que no se cumpla.

Es una página estática (solo `index.html` y `config.js`). Las respuestas las genera la API de Gemini de Google.

## Dejarla funcionando

1. Entra a <https://aistudio.google.com/apikey> y crea una API key. Hazlo en un proyecto **sin tarjeta asociada**, así nunca te pueden cobrar.
2. **Restringe la key** (esto es lo importante, porque la key queda visible en la página):
   - Abre la key en Google Cloud Console, sección "APIs y servicios", "Credenciales".
   - En "Restricciones de la aplicación" elige "Sitios web" y agrega `https://faguzmant.github.io/*`.
   - En "Restricciones de API" elige "Generative Language API".
3. Abre `config.js` en este repositorio, toca el lápiz, corta tu key por la mitad y pega la primera mitad en `KEY_A` y la segunda en `KEY_B`. Se parte en dos solo para que GitHub no la marque como filtrada. Toca "Commit changes".
4. Espera uno o dos minutos y abre <https://faguzmant.github.io/the-voice-bots/>.

## Límites del plan gratis

El plan gratis de Gemini tiene tope de mensajes por minuto y por día, y se comparte entre todos los que jueguen. Cada vuelta de conversación usa unas 3 o 4 llamadas. Si se acaba el cupo, la página lo avisa y vuelve a funcionar al día siguiente. Los modelos y sus límites cambian; si uno deja de existir, cambia el nombre en `MODELS` dentro de `config.js`.

## Cambiar personajes

Las personalidades están en `index.html`, dentro de `DOSSIER` y `SAMPLES`.
