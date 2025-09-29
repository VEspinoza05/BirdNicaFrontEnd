//Bird pictures
import RabinjucoEtereo from "./imgs/RabinjucoEtereo.png";
import Zampullin from "./imgs/Zampullin.png";
import Paujil from "./imgs/Paujil.png";
import TinamuGrande from "./imgs/TinamuGrande.png";
import Jabiru from "./imgs/Jabiru.png";
import CercetaColorada from "./imgs/CercetaColorada.png";
//Reserves Pictures
import JuanVenado from "./imgs/JuanVenado.png";
import LaPalestina from "./imgs/LaPalestina.png";
import LosGuatuzos from "./imgs/LosGuatuzos.png";
import PenasBlancas from "./imgs/PenasBlancas.png"
import VolcanMasaya from "./imgs/VolcanMasaya.png";
import IndioMaiz from "./imgs/IndioMaiz.png";

//Bird List
export const birds = [
  { id: 1,
    name: "Rabijunco etéreo",
    scientificName: "Phaethon aethereus",
    order: "Phaethontiformes",
    family: "Phaethontidae",
    genus: "Phaethon",
    description: "El rabijunco etéreo o ave del trópico de pico rojo (Phaethon aethereus) es una especie de ave fetontiforme, una de las aves marinas que habitan los mares tropicales.",
    picture: RabinjucoEtereo,
    birdArea: [
      [12.1, -86.3],
      [12.2, -86.0],
      [12.7, -85.5],
      [12.4, -85.0],
      [12.0, -85.8],
    ],
    reserves: [
      { id: 1, name: "Juan Venado", picture: JuanVenado },
      { id: 2, name: "Peñas Blancas", picture: PenasBlancas },
      { id: 3, name: "Los Guatuzos", picture: LosGuatuzos },
    ]
  },
  { id: 2,
    name: "Zampullín de pico grueso",
    scientificName: "Podilymbus podiceps",
    order: "Podicipediformes",
    family: "	Podicipedidae",
    genus: "	Podilymbus",
    description: "El zampullín de pico grueso (Podilymbus podiceps), es un zambullidor pequeño, mide de 31-38 cm de longitud, achaparrado y de cuello corto. usualmente es de color pardo con el cuello color canela. Tiene un pico corto, grueso similar al de un pollo.",
    picture: Zampullin,
    birdArea: [
      [12.7,-86.4],
      [11.9,-84.3],
      [13.4,-84.0],
      [13.2,-85.7],
      [12.7,-86.4]
    ],
    reserves: [
      { id: 1, name: "Juan Venado", picture: JuanVenado },
      { id: 2, name: "Indio Maiz", picture: IndioMaiz },
      { id: 3, name: "Volcan Masaya", picture: VolcanMasaya },
    ]
  },
  { id: 3,
    name: "Paujil",
    picture: Paujil,
    scientificName: "Crax rubra",
    order: "Galliformes",
    family: "Cracidae",
    genus: "Crax",
    description: "El paujil, pajuil u hocofaisán (Crax rubra), también conocido como pavón norteño, o como faisán real, kambul (maya), pavón grande o pavón norteño, es una especie de ave del orden Craciformes (Enciclovida considera al orden de las Galliformes donde se ubican también a las chachalacas, guajolotes silvestres, codornices y pavón), de la familia Cracidae (chachalacas), que se encuentra en los bosques del sur de México, Centroamérica y Sudamérica (este de Colombia, Ecuador y Amazonía).",
    birdArea: [
      [13.0, -85.3],
      [12.9, -84.0],
      [13.6, -84.0],
      [13.1, -86.0],
      [12.7, -85.8],
      [12.7, -85.4],
      [13.0, -85.3],
    ],
    reserves: [
      { id: 1, name: "Juan Venado", picture: JuanVenado },
      { id: 2, name: "La Palestina", picture: LaPalestina },
      { id: 3, name: "Peñas blancas", picture: PenasBlancas },
    ]
  },
  { id: 4,
    name: "Tinamú grande",
    scientificName: "Tinamus major",
    order: "Tinamiformes",
    family: "Tinamidae",
    genus: "Tinamus",
    description: "El tinamú grande, tinamú mayor o tinamú oliváceo (Tinamus major) es una especie de ave nativa de América Central y América del Sur, los tinámidos presentan aproximadamente 47 especies de la Familia Tinamidae. Tiene 43 centímetros de largo, 1100 gramos de peso y aproximadamente el tamaño y forma de un pavo pequeño.",
    picture: TinamuGrande,
    birdArea: [
      [12.7,-86.4],
      [11.3,-84.3],
      [13.0,-84.1],
      [12.7,-86.4]
    ],
    reserves: [
      { id: 1, name: "Volcan Masaya", picture: VolcanMasaya },
      { id: 2, name: "Peñas blancas", picture: PenasBlancas },
      { id: 3, name: "Indio Maiz", picture: IndioMaiz },
    ]
  },
  { id: 5,
    name: "Jabirú",
    scientificName: "Jabiru mycteria",
    order: "Ciconiiformes",
    family: "Ciconiidae",
    genus: "Jabiru",
    description: "El jabirú, tuyuyú o jabirú americano (Jabiru mycteria) es una especie de ave ciconiforme de la familia Ciconiidae; es la mayor cigüeña del Nuevo Mundo. Con una altura de 120-140 cm y una envergadura (alas desplegadas) de 3 metros, es una ave inconfundible de los humedales americanos desde Yucatán, pasando por Guatemala, Honduras, Nicaragua, Costa Rica, Panamá, Colombia, Venezuela, Ecuador, Guyana, Surinam, Perú, Brasil, Bolivia y Paraguay hasta la pampa argentina, siendo abundante en zonas como los llanos venezolanos, el Pantanal o el Iberá. El nombre de esta ave proviene del idioma guaraní.",
    picture: Jabiru,
    birdArea: [
      [10.9, -83.9],
      [14.0, -83.7],
      [13.0, -84.8],
      [11.4, -84.6],
      [10.9, -83.9],
    ],
    reserves: [
      { id: 1, name: "Los Guatuzos", picture: LosGuatuzos },
      { id: 2, name: "La Palestina", picture: LaPalestina },
      { id: 3, name: "Volcan Masaya", picture: VolcanMasaya },
    ]
  },
  { id: 6,
    name: "Cerceta colorada",
    scientificName: "Spatula cyanoptera",
    order: "Anseriformes",
    family: "Anatidae",
    genus: "Spatula",
    description: "El pato colorado (Spatula cyanoptera anteriormente Anas cyanoptera), llamado también cerceta colorada (en Perú), cerceta canela, cerceta castaña, pato canelo o pato acanelado, es una especie de ave endémica de América. No se debe confundir con el otro pato colorado (Netta rufina). Su área de distribución geográfica abarca desde el sur de Canadá hasta Tierra del Fuego. También está presente en las Islas Malvinas.",
    picture: CercetaColorada,
    birdArea: [
      [12.1, -86.3],
      [12.5, -86.0],
      [12.7, -85.5],
      [12.4, -85.0],
      [12.0, -85.4],
    ],
    reserves: [
      { id: 1, name: "Juan Venado", picture: JuanVenado },
      { id: 2, name: "La Palestina", picture: LaPalestina },
      { id: 3, name: "Los Guatuzos", picture: LosGuatuzos },
    ]
  },
];
