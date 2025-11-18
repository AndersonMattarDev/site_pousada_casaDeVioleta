import React from "react";

interface DistanceItemProps {
  city: string;
  distance: string;
}

export default function DistanceItem({ city, distance }: DistanceItemProps) {
  return (
    <p className="text-sm">
      <strong>{city}:</strong> {distance}
    </p>
  );
}