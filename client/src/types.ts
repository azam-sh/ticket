export type Location = {
  id: string;
  name: string;
  img: string;
};

export type Event = {
  id: string;
  title: string;
  img: string;
  price: number;
  location: string;
  description: string;
  category: "movie" | "theatre" | "concert" | "museum";
};

export type Session = {
  id: string;
  time: string;
  eventId: string;
  seats: Seat[];
};

export type Seat = {
  id: number;
  isReserved: boolean;
  number: string;
  row: string;
  price: number;
  isSelected?: boolean;
};

export type Ticket = {
  id: string;
  ticketFor: "tjk" | "foreign";
  category: 'entrance' | 'excursion'
  title: string;
  price: number;
  qtt?: number
};
