//Reseves Pictures
import JuanVenado from "./imgs/JuanVenado.png";
import LaPalestina from "./imgs/LaPalestina.png";
import LosGuatuzos from "./imgs/LosGuatuzos.png";
import PenasBlancas from "./imgs/PenasBlancas.png";
import VolcanMasaya from "./imgs/VolcanMasaya.png";
import IndioMaiz from "./imgs/IndioMaiz.png";

//Birds Pictures
import RabinjucoEtereo from "./imgs/RabinjucoEtereo.png";
import Zampullin from "./imgs/Zampullin.png";
import Paujil from "./imgs/Paujil.png";
import TinamuGrande from "./imgs/TinamuGrande.png";
import Jabiru from "./imgs/Jabiru.png";
import CercetaColorada from "./imgs/CercetaColorada.png";

//Reserves List
export const reserves = [
  { id: 1,
    name: "Juan Venado",
    picture: JuanVenado,
    division: "Departamento de León",
    surface: "132.17 kilómetros cuadrados",
    coordinates: "12° 20' 37.57\", -87° 2' 51.28\"",
    latitude: 12.343769,
    longitude: -86.952422,
    country: "Nicaragua",
    Description: "La isla Juan Venado es una alargada barrera arenosa paralela al mar, con una anchura que varía de 30 metros las partes más angostas, hasta 250 metros en la más ancha. El área protegida ocupa una superficie de 2927.85 ha en zona terrestre y 10000 ha en zona marina, y tiene con una zona de amortiguamiento de 4415.53 ha. La isla es rica en biodiversidad animal y vegetal, destacándose su tupido bosque de manglar, el que sirve de albergue a miles de aves, reptiles y crustáceos.",
    birds: [
      { id: 1, name: "Tinamú Grande", picture: TinamuGrande },
      { id: 2, name: "Jabiru", picture: Jabiru },
      { id: 3, name: "Cerceta Colorada", picture: CercetaColorada },
    ]
  },
  { id: 2,
    name: "La Palestina",
    picture: LaPalestina,
    division: "Departamento de Managua",
    surface: " 0.8 kilómetros cuadrados",
    coordinates: "12° 1' 17.26\", -87° 46' 7.73\"",
    latitude: 12.021460335508584,
    longitude:  -86.23118537116444,
    country: "Nicaragua",
    Description: "Fundada en 1904, con una extensión de 80 Mz inicialmente la Finca Palestina estaba destinada para el cultivo de Café, ganadería y piña por sus características edafoclimáticas. Por los cambios climático y la falta de recurso vital que es el agua, se construyó una pila en 1940 la cual alberga 1,300 barriles para fumigación, riego y uso doméstico. ",
    birds: [
      { id: 1, name: "Tinamú Grande", picture: TinamuGrande },
      { id: 2, name: "Zampullín de pico grueso", picture: Zampullin },
      { id: 3, name: "Paujil", picture: Paujil },
    ]
  },
  { id: 3,
    name: "Los Guatuzos",
    picture: LosGuatuzos,
    division: "Departamento de Rio San Juan",
    surface: "437.5 kilómetros cuadrados",
    coordinates: "11° 1' 51.06\", -86° 56' 47.58\"",
    latitude: 11.030899744686314,
    longitude: -85.05342490944597,
    country: "Nicaragua",
    Description: "El refugio de vida salvaje Los Guatuzos se encuentra situado en la orilla sur del lago Cocibolca y se extiende a lo largo de algunos kilómetros del cauce del río San Juan, en el departamento de Río San Juan de la república de Nicaragua.",
    birds: [
      { id: 1, name: "Tinamú Grande", picture: TinamuGrande },
      { id: 2, name: "Rabijunco etéreo", picture: RabinjucoEtereo },
      { id: 3, name: "Zampullín de pico grueso", picture: Zampullin },
    ]
  },
  { id: 4,
    name: "Penas Blancas",
    picture: PenasBlancas,
    division: "Departamento de Matagalpa y Jinotega",
    surface: "113.08 kilómetros cuadrados",
    coordinates: "13° 15' 32.84\", -86° 19' 55.04\"",
    latitude: 13.259123313938222,
    longitude: -85.66804371164444,
    country: "Nicaragua",
    Description: "El macizo de Peñas Blancas es un conjunto de cerros que se elevan unos 1,750 metros de altura sobre el nivel del mar, que forman parte de la llamada «cordillera Isabelia», una alineación de cumbres que sirve de línea divisoria entre los afluentes de los ríos Bocay y Coco y los afluentes del río Tuma. Cuenta con 11,308 hectáreas de extensión distribuidas entre los municipios de El Tuma, La Dalia y Rancho Grande del departamento de Matagalpa y en el municipio El Cuá del departamento de Jinotega.",
    birds: [
      { id: 1, name: "Rabijunco etéreo", picture: RabinjucoEtereo },
      { id: 2, name: "Zampullín de pico grueso", picture: Zampullin },
      { id: 3, name: "Cerceta Colorada", picture: CercetaColorada },
    ]
  },
  { id: 5,
    name: "Volcan Masaya",
    picture: VolcanMasaya,
    division: "Departamento de Masaya",
    surface: "54 kilómetros cuadrados",
    coordinates: "12° 0' 12.87\", -87° 51' 3.08\"",
    latitude: 12.00357479074494,
    longitude: -86.14914355767112,
    country: "Nicaragua",
    Description: "El parque nacional Volcán Masaya (PNVM) es un parque natural de Nicaragua que abarca una antigua caldera volcánica que en la actualidad la componen 1 volcán tipo escudo y 5 cráteres, una laguna craterica, 15 túneles lavicos y 4 conos cineríticos . Se encuentra ubicado entre el departamento de Masaya y el departamento de Managua, en las cercanías de la ciudad de Nindirí.",
    birds: [
      { id: 2, name: "Zampullín de pico grueso", picture: Zampullin },
      { id: 3, name: "Cerceta Colorada", picture: CercetaColorada },
      { id: 1, name: "Tinamú Grande", picture: TinamuGrande },
    ]
  },
  { id: 6,
    name: "Indio Maiz",
    picture: IndioMaiz,
    division: "Departamento de Río San Juan y Región Autónoma de la Costa Caribe Sur",
    surface: "2639.8 kilómetros cuadrados",
    coordinates: "11°04'57\"N 84°05'42\"O",
    latitude: 11.082423,
    longitude: -84.095122,
    country: "Nicaragua",
    Description: "La Reserva Biológica Indio Maíz es considerada una de las reservas naturales mejor preservadas en Nicaragua. Ésta se localiza en la esquina sureste del país, bordeando el río San Juan. La reserva comprende 3180 km² y es el hogar de una amplia variedad de animales de la selva. Entre ellos la habitan cientos de especies de aves, incluyendo tucanes, guacamayas, colibríes y loros. En la zona también habitan mamíferos, tales como venados, perezosos, jabalíes, pumas, jaguares, pacas, zorros e incluso manatíes, además de las tres especies de monos que viven en el país (mona congo, cara blanca y mono araña). Asimismo, se pueden encontrar ranas venenosas, serpientes, cocodrilos, tortugas e iguanas. A pesar de que la reserva es una área inmensa, gran parte de ella no puede ser explorada, ya que el Ministerio de Recursos Naturales (MARENA) no permite que la gente entre en la mayoría de los lugares. Sin embargo, hay dos áreas por donde se puede ingresar para disfrutar de los tesoros naturales que se encuentran escondidos en esta remota esquina de Nicaragua.",
    birds: [
      { id: 1, name: "Rabijunco etéreo", picture: RabinjucoEtereo },
      { id: 2, name: "Zampullín de pico grueso", picture: Zampullin },
      { id: 3, name: "Paujil", picture: Paujil },
    ]
  },
];
