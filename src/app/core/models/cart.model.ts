export interface Cart {
  productId: string;
  name: string;
  quantity: number;
}

export interface CartFinished {
  name: string;
  deliveryAddress: string;
  items: Omit<Cart, 'name'>[];
}
