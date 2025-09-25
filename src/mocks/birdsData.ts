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
  { id: 1, name: "Lorem ipsum", picture: A },
  { id: 2, name: "Lorem ipsum", picture: B },
  { id: 3, name: "Lorem ipsum", picture: C },
  { id: 4, name: "Lorem ipsum", picture: D },
  { id: 5, name: "Lorem ipsum", picture: E },
  { id: 6,
    name: "Cerceta colorada",
    scientificName: "Spatula cyanoptera",
    order: "Anseriformes",
    family: "Anatidae",
    genus: "Spatula",
    description: "El pato colorado (Spatula cyanoptera anteriormente Anas cyanoptera), llamado también cerceta colorada (en Perú), cerceta canela, cerceta castaña, pato canelo o pato acanelado, es una especie de ave endémica de América. No se debe confundir con el otro pato colorado (Netta rufina). Su área de distribución geográfica abarca desde el sur de Canadá hasta Tierra del Fuego. También está presente en las Islas Malvinas.",
    picture: CercetaColorada,
    reserves: [
      { id: 1, name: "Juan Venado", picture: JuanVenado },
      { id: 2, name: "La Palestina", picture: LaPalestina },
      { id: 3, name: "Los Guatuzos", picture: LosGuatuzos },
    ]
  },
];
