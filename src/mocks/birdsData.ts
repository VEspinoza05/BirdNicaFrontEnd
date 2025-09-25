import A from "./imgs/A.png";
import B from "./imgs/B.png";
import C from "./imgs/C.png";
import D from "./imgs/D.png";
import E from "./imgs/E.png";
import CercetaColorada from "./imgs/CercetaColorada.png";
import JuanVenado from "./imgs/JuanVenado.png";
import LaPalestina from "./imgs/LaPalestina.png";
import LosGuatuzos from "./imgs/LosGuatuzos.png";

export const birds = [
  { id: 1, name: "Rabijunco etéreo", picture: A },
  { id: 2, name: "Zampullín de pico grueso", picture: B },
  { id: 3, name: "Paujil", picture: C },
  { id: 4, name: "Tinamú grande", picture: D },
  { id: 5, name: "Jabirú", picture: E },
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
