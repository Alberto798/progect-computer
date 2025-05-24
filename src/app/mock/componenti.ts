import { PCComponent } from "../components.type";


export const PC_COMPONENTS: PCComponent[] = [
  // CPU
  { id: 1, type: 'CPU', brand: 'AMD', model: 'Ryzen 5 5600X', specs: '6-Core, 12-Thread, 3.7 GHz', price: 200 },
  { id: 2, type: 'CPU', brand: 'Intel', model: 'i5-12400F', specs: '6-Core, 12-Thread, 2.5 GHz', price: 180 },
  { id: 3, type: 'CPU', brand: 'AMD', model: 'Ryzen 7 5800X3D', specs: '8-Core, 16-Thread, 3.4 GHz', price: 320 },
  { id: 4, type: 'CPU', brand: 'Intel', model: 'i7-13700K', specs: '16-Core (8P+8E), 24-Thread, 3.4 GHz', price: 430 },

  // GPU
  { id: 5, type: 'GPU', brand: 'NVIDIA', model: 'RTX 3060', specs: '12GB GDDR6', price: 330 },
  { id: 6, type: 'GPU', brand: 'AMD', model: 'RX 6700 XT', specs: '12GB GDDR6', price: 380 },
  { id: 7, type: 'GPU', brand: 'NVIDIA', model: 'RTX 4070', specs: '12GB GDDR6X', price: 580 },
  { id: 8, type: 'GPU', brand: 'AMD', model: 'RX 7900 XT', specs: '20GB GDDR6', price: 750 },

  // RAM
  { id: 9, type: 'RAM', brand: 'Corsair', model: 'Vengeance LPX', specs: '16GB (2x8GB) DDR4 3200MHz', price: 75 },
  { id: 10, type: 'RAM', brand: 'Kingston', model: 'Fury Beast', specs: '32GB (2x16GB) DDR4 3600MHz', price: 120 },
  { id: 11, type: 'RAM', brand: 'G.Skill', model: 'Trident Z5 RGB', specs: '32GB (2x16GB) DDR5 6000MHz', price: 180 },
  { id: 12, type: 'RAM', brand: 'Crucial', model: 'Ballistix', specs: '16GB (2x8GB) DDR4 3000MHz', price: 65 },

  // SSD
  { id: 13, type: 'SSD', brand: 'Samsung', model: '970 EVO Plus', specs: '1TB NVMe', price: 110 },
  { id: 14, type: 'SSD', brand: 'WD', model: 'Black SN770', specs: '1TB NVMe Gen4', price: 100 },
  { id: 15, type: 'SSD', brand: 'Crucial', model: 'MX500', specs: '500GB SATA', price: 50 },
  { id: 16, type: 'SSD', brand: 'Kingston', model: 'A2000', specs: '1TB NVMe', price: 85 },

  // HDD
  { id: 17, type: 'HDD', brand: 'Seagate', model: 'Barracuda', specs: '2TB 7200 RPM', price: 50 },
  { id: 18, type: 'HDD', brand: 'Western Digital', model: 'Blue', specs: '1TB 7200 RPM', price: 40 },
  { id: 19, type: 'HDD', brand: 'Toshiba', model: 'P300', specs: '2TB 7200 RPM', price: 48 },
  { id: 20, type: 'HDD', brand: 'WD', model: 'Black', specs: '4TB 7200 RPM', price: 100 },

  // PSU
  { id: 21, type: 'PSU', brand: 'EVGA', model: '600 BR', specs: '600W 80+ Bronze', price: 55 },
  { id: 22, type: 'PSU', brand: 'Corsair', model: 'RM750x', specs: '750W 80+ Gold', price: 110 },
  { id: 23, type: 'PSU', brand: 'Seasonic', model: 'Focus GX-850', specs: '850W 80+ Gold', price: 130 },
  { id: 24, type: 'PSU', brand: 'Cooler Master', model: 'MWE Gold 650', specs: '650W 80+ Gold', price: 90 },

  // Case
  { id: 25, type: 'Case', brand: 'NZXT', model: 'H510', specs: 'ATX Mid Tower', price: 75 },
  { id: 26, type: 'Case', brand: 'Fractal Design', model: 'Meshify C', specs: 'ATX Mid Tower, mesh front', price: 90 },
  { id: 27, type: 'Case', brand: 'Lian Li', model: 'Lancool II', specs: 'ATX Mid Tower, tempered glass', price: 95 },
  { id: 28, type: 'Case', brand: 'Phanteks', model: 'Eclipse P400A', specs: 'ATX Mid Tower', price: 85 },

  // Motherboard
  { id: 29, type: 'Motherboard', brand: 'MSI', model: 'B550 Tomahawk', specs: 'AM4, ATX, DDR4', price: 150 },
  { id: 30, type: 'Motherboard', brand: 'ASUS', model: 'Z690-P', specs: 'LGA1700, ATX, DDR5', price: 180 },
  { id: 31, type: 'Motherboard', brand: 'Gigabyte', model: 'X570 AORUS Elite', specs: 'AM4, ATX, DDR4', price: 170 },
  { id: 32, type: 'Motherboard', brand: 'ASRock', model: 'B650M Pro RS', specs: 'AM5, mATX, DDR5', price: 140 }
];
