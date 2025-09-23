import React from 'react';
import { ENGLISH, ESPANOL, FRANCAIS } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const aboutPageJSX = {
  [ENGLISH]:
    <div>
      <p>This is display tool for the oral histories collected as part of the Enenlhet Language Documentation Project with the (Toba) Enenlhet communities in Pozo Amarillo and Casanillo, Paraguay. The goal here is that speakers can interact with the texts/recordings, enjoy them, and provide feedback to the project team. To explore all the files from the project, see the archival repository at the University of Texas at Austin: <a href="https://ailla.utexas.org/es/islandora/object/ailla%3A266557">https://ailla.utexas.org/es/islandora/object/ailla%3A266557</a>.</p>

    </div>,
  [ESPANOL]:
    <div>
      <p>Esta es una herramienta de exhibición de las historias orales recopiladas como parte del Proyecto de Documentación de la Lengua Enenlhet con las comunidades (Toba) Enenlhet en Pozo Amarillo y Casanillo, Paraguay. El objetivo aquí es que los oradores puedan interactuar con los textos/grabaciones, disfrutarlos y brindar retroalimentación al equipo del proyecto. Para explorar todos los archivos del proyecto, consulte el repositorio de archivos de la Universidad de Texas en Austin: <a href="https://ailla.utexas.org/es/islandora/object/ailla%3A266557">https://ailla.utexas.org/es/islandora/object/ailla%3A266557</a>.</p>

    </div>,
  [FRANCAIS]:
    <div>
      <p>Ceci est un outil d'affichage pour les histoires orales recueillies dans le cadre du Projet de Documentation de la Langue Enenlhet avec les communautés (Toba) Enenlhet à Pozo Amarillo et Casanillo, au Paraguay. L'objectif ici est que les locuteurs puissent interagir avec les textes/enregistrements, les apprécier et fournir des commentaires à l'équipe du projet. Pour explorer tous les fichiers du projet, consultez le dépôt d'archives de l'Université du Texas à Austin : <a href="https://ailla.utexas.org/es/islandora/object/ailla%3A266557">https://ailla.utexas.org/es/islandora/object/ailla%3A266557</a>.</p>
    </div>,
};

export function AboutPage() {
  return <TranslatableText dictionary={aboutPageJSX} />;
}
