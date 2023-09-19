export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  imgUrl: string;
}
export interface CartDataItem {
  id: number;
  name: string;
  image: string;
}

export interface Order {
  id: number;
  name: string;
  image: string;
}
