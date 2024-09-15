import React from "react";
import style from "./without.module.css";
import { UiCard } from "@/shared";

export function WithoutSection() {
  return (
    <div className={style.section_out}>
      <h2 className={style.welcome}>Bienvenido a mentaNote</h2>
      <span className={style.description}>
        Organiza tus pensamientos, impulsa tu productividad y lleva tus ideas al
        siguiente nivel.
      </span>
      <div className={style.section_info}>
        <h2 className={style.title_info}>Crea todo tipo de notas</h2>
        <div className={style.content_card}>
          {[
            {
              title: "Notas de texto",
              desc: "Escribe y formatea tus pensamientos con nuestro editor de texto enriquecido.",
              icon: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            },
            {
              title: "Listas de tareas",
              desc: "Organiza tus actividades y marca tus logros con listas de verificación.",
              icon: "M9 11l3 3L22 4",
            },
            {
              title: "Notas de código",
              desc: "Escribe y formatea código con resaltado de sintaxis para múltiples lenguajes.",
              icon: "M16 18l6-6-6-6M8 6l-6 6 6 6",
            },
          ].map((noteType, index) => (
            <UiCard key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={style.icon}
                aria-hidden="true"
              >
                <path d={noteType.icon} />
              </svg>
              <h3 className={style.title_card}>{noteType.title}</h3>
              <p className={style.description_card}>{noteType.desc}</p>
            </UiCard>
          ))}
        </div>
      </div>
    </div>
  );
}
