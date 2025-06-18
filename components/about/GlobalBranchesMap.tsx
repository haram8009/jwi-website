"use client";

import { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import customMapStyle from "@/data/googlemaps.json";

// 브랜치 데이터 (예시)
const branches = [
  {
    name: "HQ - Fullerton, CA",
    desc: "Strategic base for global coordination.",
    position: { lat: 33.8704, lng: -117.9243 },
  },
  {
    name: "Atlanta, GA",
    desc: "Specializing in EV and battery logistics.",
    position: { lat: 33.749, lng: -84.388 },
  },
  {
    name: "Guatemala",
    desc: "Hub for Latin America operations.",
    position: { lat: 14.6349, lng: -90.5069 },
  },
  {
    name: "Vietnam",
    desc: "Gateway for Asian shipments.",
    position: { lat: 21.0285, lng: 105.8542 },
  },
  {
    name: "Haiti",
    desc: "Garment export and customs support center.",
    position: { lat: 18.5944, lng: -72.3074 },
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: 20.5, lng: -40 }; // 적당히 글로벌 브랜치가 한눈에 보이도록

export default function GlobalBranchesMap() {
  const [selected, setSelected] = useState(null);


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div className="w-full h-[400px] flex items-center justify-center text-blue-800">Loading map...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-6">
          Global Branches
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Worldwide network for seamless logistics and support.
        </p>
        <div className="rounded-xl shadow-lg overflow-hidden">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={3.2}
            options={{
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              clickableIcons: false,
              styles: customMapStyle
            }}
          >
            {branches.map((branch, i) => (
              <Marker
                key={branch.name}
                position={branch.position}
                // label={{
                //   text: branch.name.replace(/^HQ - /, ""),
                //   color: "#2563eb",
                //   fontWeight: "bold",
                //   fontSize: "13px",
                // }}
                onClick={() => setSelected(i)}
              />
            ))}
            {selected !== null && (
              <InfoWindow
                position={branches[selected].position}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <div className="font-bold text-blue-700">{branches[selected].name}</div>
                  <div className="text-gray-700 text-sm">{branches[selected].desc}</div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </div>
    </section>
  );
}
