export interface Pet {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: string;
  ownerId: number;
}

export interface Embedded {
  pets: Pet[];
}

export interface CatalogJson {
  _embedded: Embedded;
  _links: {
    self: { href: string };
    profile: { href: string };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };

}
