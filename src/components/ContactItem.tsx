import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ContactItemProps {
  icon: IconDefinition;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl"; // <-- adicionamos a prop
}

export default function ContactItem({ icon, children, size = "md" }: ContactItemProps) {
  const iconSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className="flex items-start gap-3">
      <FontAwesomeIcon icon={icon} className={`${iconSizes[size]} mt-1 text-violeta`} />
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}