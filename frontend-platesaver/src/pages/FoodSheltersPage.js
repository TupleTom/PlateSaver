import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import placeholderIcon from "./../placeholder.png";
import "./../globalStyles.css";

const locations = [
  { id: 1, name: "Shelter 1", position: [44.5654, -123.262], type: "shelter" },
  { id: 2, name: "Shelter 2", position: [44.5646, -123.2639], type: "shelter" },
  { id: 3, name: "Shelter 3", position: [44.524, -123.2919], type: "shelter" },
  { id: 4, name: "Shelter 4", position: [44.5854, -123.274], type: "shelter" },
  { id: 5, name: "Shelter 5", position: [44.5036, -123.2029], type: "shelter" },
  { id: 6, name: "Shelter 6", position: [44.5926, -123.2209], type: "shelter" },
  {
    id: 3,
    name: "Oregon State University",
    position: [44.5646, -123.2793],
    type: "university",
  },
];

const customIcon = L.icon({
  iconUrl: placeholderIcon,
  iconSize: [32, 32],
});

const FoodSheltersPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 120px)",
        marginBottom: "-300px"
      }}
    > 
      <div
        style={{
          height: "80%",
          width: "800px",
          borderRadius: "15px",
          overflow: "hidden",
          border: "2px solid #333",
          marginTop: "-120px",
          margin: '200px'
    
        }}
      >
        <MapContainer
          center={[44.5646, -123.2793]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map(
            (location) =>
              location.type === "shelter" && (
                <Marker
                  key={location.id}
                  position={location.position}
                  icon={customIcon}
                >
                  <Popup>{location.name}</Popup>
                </Marker>
              )
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default FoodSheltersPage;