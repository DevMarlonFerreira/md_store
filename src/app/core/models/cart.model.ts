// export interface Cart2 {
//   name: string;
//   deliveryAddress: string;
//   items: [Item];
// }

export interface Cart {
  productId: string;
  quantity: number;
}

export interface Item {
  productId: string;
  quantity: number;
}
