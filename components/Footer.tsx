import React from "react";
import { ClassProps } from "@/app/type";

export default function Footer({ className }: ClassProps) {
  return (
    <div className={className}>
      <div className="text-black py-4 text-center w-full font-montserrat m-12">
        <p>&copy; 2025 Anaïs.Z. All rights reserved.</p>
      </div>
    </div>
  );
}
