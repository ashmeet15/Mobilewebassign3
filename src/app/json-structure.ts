import {Pet} from "./pets";

export interface CatalogJson {
  _embedded: {
    pets: Pet[];
  };
  _links: {
    self: {
      href: string;
    };
    profile: {
      href: string;
    };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
