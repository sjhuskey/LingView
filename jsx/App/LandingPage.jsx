import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
      <p>Welcome! You have found the LingView site for the Enenlhet Language Documentation Project. Use this site to view our currently transcribed and translated narrative texts with speakers from Pozo Amarillo and Casanillo, Paraguay.</p>
      <p>This website is powered by <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>. Click <a href='#/index'>"Index of Texts"</a> to see some example texts.</p>
    </div>,
  [ESPANOL]:
    <div>
      <p>¡Bienvenido! Ha encontrado el sitio LingView para el proyecto de documentación del idioma Enenlhet. Use este sitio para ver nuestros textos narrativos transcritos y traducidos con hablantes de Pozo Amarillo y Casanillo, Paraguay.</p>
      <p>Este sitio web funciona con <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>. Haga clic <a href='#/index'>"Índice de textos"</a> para ver algunos textos de ejemplo.</p>
    </div>,
  [FRANCAIS]:
    <div>
      <p>Bienvenue! Vous avez trouvé le site LingView pour le projet de documentation de la langue Enenlhet. Utilisez ce site pour voir nos textes narratifs actuellement transcrits et traduits avec des locuteurs de Pozo Amarillo et Casanillo, Paraguay.</p>
      <p>Bienvenue! Ce site Web est alimenté par <a href='https://github.com/BrownCLPS/LingView/' target="_blank" rel="noopener noreferrer">Lingview</a>. Cliquez <a href='#/index'>"Index des Textes"</a> pour voir quelques exemples de textes.</p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
