export interface SectionFromBookInterfaces {
  titleSection: string;
  content: string;
  id: string;
}
export interface SectionBookInterface {
  idBook: string;
  section: SectionFromBookInterfaces[];
}
