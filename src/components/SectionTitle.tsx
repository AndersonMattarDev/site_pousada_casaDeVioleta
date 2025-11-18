import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SectionTitleProps {
  icon?: any;
  children: React.ReactNode;
}

export default function SectionTitle({ icon, children }: SectionTitleProps) {
  return (
    <h4 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
      {icon && <FontAwesomeIcon icon={icon} className="text-violeta" />}
      {children}
    </h4>
  );
}