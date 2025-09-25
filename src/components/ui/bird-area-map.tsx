import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type BirdAreaMapProps = {
  species: string,
  area: any,
}

const BirdAreaMap = ({ species, area }: BirdAreaMapProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Área de distribución: {species}</h2>

      <MapContainer
        center={[12.8654, -85.2072]}
        zoom={7}
        style={{ height: "600px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Polygon pathOptions={{ color: "green", fillOpacity: 0.3 }} positions={area}>
          <Popup>Área de distribución de {species}</Popup>
        </Polygon>
      </MapContainer>
    </div>
  );
};

export default BirdAreaMap;
