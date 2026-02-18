
export interface Event {
  id: string;
  title: string;
  date: string;
  dj?: string;
  image: string;
  price?: string;
  whatsappLink: string;
}

export interface ReservationData {
  name: string;
  date: string;
  guests: number;
  phone: string;
  type: 'Mesa' | 'Cumpleaños' | 'VIP';
}
