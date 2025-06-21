import { create } from "zustand";

export interface CartItem {
  id: number
  title: string
  artist: string
  price: number
  quantity: number
  imageUrl: string
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  incrementItem: (id: number) => void
  decrementItem: (id: number) => void
}

export const useCart = create<CartState>((set, get) => ({
  items: [],

  get totalItems() {
    return get().items.reduce((acc: number, i: CartItem) => acc + i.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce((acc: number, i: CartItem) => acc + i.price * i.quantity, 0);
  },

  addItem: (item: CartItem) => {
    const existing = get().items.find(i => i.id === item.id);
    if (existing) {
      set(state => ({
        items: state.items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }));
    } else {
      set(state => ({
        items: [...state.items, { ...item, quantity: 1 }]
      }));
    }
  },

  removeItem: (id: number) => {
    set(state => ({
      items: state.items.filter(i => i.id !== id)
    }));
  },

  incrementItem: (id: number) => {
    set(state => ({
      items: state.items.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    }));
  },

  decrementItem: (id: number) => {
    set(state => ({
      items: state.items.map(i =>
        i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
      )
    }));
  }
}));
