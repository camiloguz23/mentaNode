import { create } from "zustand";
import { SectionBookInterface, SectionFromBookInterfaces } from "../types";

interface StoreInterface {
  sections: SectionBookInterface[];
  setSections: (sections: SectionBookInterface[]) => void;
  onCreateSection: (data: {
    idBook: string;
    section: SectionFromBookInterfaces;
  }) => void;

  onUpdateContent: (data: {
    idBook: string;
    content: string;
    idSection: string;
  }) => void;
}

export const useSectionBookStore = create<StoreInterface>((set) => ({
  sections: [],
  setSections: (sections) => set({ sections }),
  onCreateSection: (data) =>
    set((state) => {
      const { idBook, section } = data;
      const newSection = state.sections.map((item) => {
        if (item.idBook === idBook) {
          return {
            ...item,
            section: [...item.section, section],
          };
        }
        return item;
      });

      return {
        sections: state.sections.length
          ? [...newSection]
          : [{ idBook, section: [section] }],
      };
    }),
  onUpdateContent: (data) =>
    set((state) => {
      const { idBook, content, idSection } = data;
      const setBook = state.sections.find((item) => item.idBook === idBook);
      const newSection: SectionFromBookInterfaces[] = setBook?.section.map(
        (item) => {
          if (item.id === idSection) {
            return {
              ...item,
              content,
            };
          }
          return item;
        }
      )!;

      return {
        sections: [
          ...state.sections.map((item) =>
            item.idBook === idBook ? { ...item, section: newSection } : item
          ),
        ],
      };
    }),
}));
