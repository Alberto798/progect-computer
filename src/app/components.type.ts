export interface PCComponent {
  id: number;
  type: 'CPU' | 'GPU' | 'RAM' | 'SSD' | 'HDD' | 'PSU' | 'Case' | 'Motherboard';
  brand: string;
  model: string;
  specs: string;
  price: number;
}