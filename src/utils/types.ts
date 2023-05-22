export type foodCategoryItemType = {
  name: string;
  imageName: string;
}

export type NewCartItemType = {
  name: string;
  imageName: string;
  quantity: number;
}

export type OrderItemType = {
  orderNumber: number;
  status: 'in-progress' | 'ready';
}