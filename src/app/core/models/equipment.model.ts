export interface Equipment {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isAvailable: boolean;
  rating: number;
}

export interface EquipmentCartShow {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  isAvailable: boolean;
  rating: number;
  quantity: number;
}
