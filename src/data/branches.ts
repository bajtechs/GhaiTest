export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapEmbed: string;
  mapLink: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

export const branches: BranchInfo[] = [
  {
    id: "model-town",
    name: "Ghai Biscuits — Model Town",
    shortName: "Model Town",
    address: "Shop No. 12, Model Town Market, Jalandhar, Punjab 144003",
    phone: "+91 76969 04810",
    whatsapp: "917696904810",
    hours: "8:00 AM – 9:00 PM (Mon–Sun)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.123!2d75.57!3d31.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sModel+Town+Jalandhar!5e0!3m2!1sen!2sin!4v1700000000000",
    mapLink: "https://maps.google.com/?q=Model+Town+Market+Jalandhar+Punjab",
    description: "Our flagship store in the heart of Model Town, serving fresh biscuits and bakery delights since the very beginning.",
  },
  {
    id: "lajpat-nagar",
    name: "Ghai Biscuits — Lajpat Nagar",
    shortName: "Lajpat Nagar",
    address: "Near Lajpat Nagar Chowk, Jalandhar, Punjab 144001",
    phone: "+91 76969 04810",
    whatsapp: "917696904810",
    hours: "8:00 AM – 9:00 PM (Mon–Sun)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.123!2d75.58!3d31.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLajpat+Nagar+Jalandhar!5e0!3m2!1sen!2sin!4v1700000000000",
    mapLink: "https://maps.google.com/?q=Lajpat+Nagar+Chowk+Jalandhar+Punjab",
    description: "Conveniently located at Lajpat Nagar, bringing the same trusted taste to the bustling neighbourhood.",
  },
  {
    id: "bmc-chowk",
    name: "Ghai Biscuits — BMC Chowk",
    shortName: "BMC Chowk",
    address: "BMC Chowk, GT Road, Jalandhar, Punjab 144001",
    phone: "+91 76969 04810",
    whatsapp: "917696904810",
    hours: "8:00 AM – 9:30 PM (Mon–Sun)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.123!2d75.59!3d31.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBMC+Chowk+Jalandhar!5e0!3m2!1sen!2sin!4v1700000000000",
    mapLink: "https://maps.google.com/?q=BMC+Chowk+GT+Road+Jalandhar+Punjab",
    description: "Right at the iconic BMC Chowk on GT Road — easily accessible and always buzzing with loyal customers.",
  },
  {
    id: "nakodar-road",
    name: "Ghai Biscuits — Nakodar Road",
    shortName: "Nakodar Road",
    address: "Nakodar Road, Near Bus Stand, Jalandhar, Punjab 144004",
    phone: "+91 76969 04810",
    whatsapp: "917696904810",
    hours: "7:30 AM – 9:00 PM (Mon–Sun)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.123!2d75.56!3d31.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNakodar+Road+Jalandhar!5e0!3m2!1sen!2sin!4v1700000000000",
    mapLink: "https://maps.google.com/?q=Nakodar+Road+Bus+Stand+Jalandhar+Punjab",
    description: "Our Nakodar Road branch serves travelers and locals alike with the freshest biscuits and snacks.",
  },
];

export const branchMenus: Record<string, MenuItem[]> = {
  "model-town": [
    { id: "mt-1", name: "Atta Biscuit", price: 40, category: "Classic Biscuits", description: "Wholesome wheat biscuits, perfectly crisp" },
    { id: "mt-2", name: "Nankhatai", price: 60, category: "Classic Biscuits", description: "Traditional Indian shortbread cookies" },
    { id: "mt-3", name: "Ajwain Biscuit", price: 45, category: "Classic Biscuits", description: "Carom-seed flavoured crunchy delight" },
    { id: "mt-4", name: "Jeera Biscuit", price: 45, category: "Classic Biscuits", description: "Cumin-spiced savoury biscuits" },
    { id: "mt-5", name: "Coconut Cookies", price: 55, category: "Premium Cookies", description: "Rich coconut-infused buttery cookies" },
    { id: "mt-6", name: "Kaju Pista Cookies", price: 90, category: "Premium Cookies", description: "Cashew & pistachio loaded cookies" },
    { id: "mt-7", name: "Choco Chip Cookies", price: 70, category: "Premium Cookies", description: "Belgian chocolate chunk cookies" },
    { id: "mt-8", name: "Dry Fruit Biscuit", price: 80, category: "Premium Cookies", description: "Loaded with almonds, cashews & raisins" },
    { id: "mt-9", name: "Suji Rusk", price: 50, category: "Rusks & Toast", description: "Light and crispy semolina rusks" },
    { id: "mt-10", name: "Elaichi Rusk", price: 55, category: "Rusks & Toast", description: "Cardamom-flavoured crispy rusks" },
    { id: "mt-11", name: "Milk Rusk", price: 50, category: "Rusks & Toast", description: "Perfect tea-time companion" },
    { id: "mt-12", name: "Butter Toast", price: 45, category: "Rusks & Toast", description: "Golden buttery oven-baked toast" },
    { id: "mt-13", name: "Mathri", price: 60, category: "Savoury Snacks", description: "Flaky, spiced Indian crackers" },
    { id: "mt-14", name: "Namak Pare", price: 50, category: "Savoury Snacks", description: "Crunchy salted diamond-cut snacks" },
    { id: "mt-15", name: "Pinni", price: 100, category: "Traditional Sweets", description: "Nutritious Punjabi energy balls" },
    { id: "mt-16", name: "Gur Rewri", price: 70, category: "Traditional Sweets", description: "Jaggery sesame brittle" },
  ],
  "lajpat-nagar": [
    { id: "ln-1", name: "Atta Biscuit", price: 38, category: "Classic Biscuits", description: "Wholesome wheat biscuits, perfectly crisp" },
    { id: "ln-2", name: "Nankhatai", price: 55, category: "Classic Biscuits", description: "Traditional Indian shortbread cookies" },
    { id: "ln-3", name: "Ajwain Biscuit", price: 42, category: "Classic Biscuits", description: "Carom-seed flavoured crunchy delight" },
    { id: "ln-4", name: "Jeera Biscuit", price: 42, category: "Classic Biscuits", description: "Cumin-spiced savoury biscuits" },
    { id: "ln-5", name: "Coconut Cookies", price: 50, category: "Premium Cookies", description: "Rich coconut-infused buttery cookies" },
    { id: "ln-6", name: "Kaju Pista Cookies", price: 85, category: "Premium Cookies", description: "Cashew & pistachio loaded cookies" },
    { id: "ln-7", name: "Choco Chip Cookies", price: 65, category: "Premium Cookies", description: "Belgian chocolate chunk cookies" },
    { id: "ln-8", name: "Dry Fruit Biscuit", price: 75, category: "Premium Cookies", description: "Loaded with almonds, cashews & raisins" },
    { id: "ln-9", name: "Suji Rusk", price: 48, category: "Rusks & Toast", description: "Light and crispy semolina rusks" },
    { id: "ln-10", name: "Elaichi Rusk", price: 52, category: "Rusks & Toast", description: "Cardamom-flavoured crispy rusks" },
    { id: "ln-11", name: "Milk Rusk", price: 48, category: "Rusks & Toast", description: "Perfect tea-time companion" },
    { id: "ln-12", name: "Butter Toast", price: 42, category: "Rusks & Toast", description: "Golden buttery oven-baked toast" },
    { id: "ln-13", name: "Mathri", price: 55, category: "Savoury Snacks", description: "Flaky, spiced Indian crackers" },
    { id: "ln-14", name: "Namak Pare", price: 48, category: "Savoury Snacks", description: "Crunchy salted diamond-cut snacks" },
    { id: "ln-15", name: "Pinni", price: 95, category: "Traditional Sweets", description: "Nutritious Punjabi energy balls" },
    { id: "ln-16", name: "Gur Rewri", price: 65, category: "Traditional Sweets", description: "Jaggery sesame brittle" },
  ],
  "bmc-chowk": [
    { id: "bc-1", name: "Atta Biscuit", price: 42, category: "Classic Biscuits", description: "Wholesome wheat biscuits, perfectly crisp" },
    { id: "bc-2", name: "Nankhatai", price: 62, category: "Classic Biscuits", description: "Traditional Indian shortbread cookies" },
    { id: "bc-3", name: "Ajwain Biscuit", price: 48, category: "Classic Biscuits", description: "Carom-seed flavoured crunchy delight" },
    { id: "bc-4", name: "Jeera Biscuit", price: 48, category: "Classic Biscuits", description: "Cumin-spiced savoury biscuits" },
    { id: "bc-5", name: "Coconut Cookies", price: 58, category: "Premium Cookies", description: "Rich coconut-infused buttery cookies" },
    { id: "bc-6", name: "Kaju Pista Cookies", price: 95, category: "Premium Cookies", description: "Cashew & pistachio loaded cookies" },
    { id: "bc-7", name: "Choco Chip Cookies", price: 72, category: "Premium Cookies", description: "Belgian chocolate chunk cookies" },
    { id: "bc-8", name: "Dry Fruit Biscuit", price: 82, category: "Premium Cookies", description: "Loaded with almonds, cashews & raisins" },
    { id: "bc-9", name: "Suji Rusk", price: 52, category: "Rusks & Toast", description: "Light and crispy semolina rusks" },
    { id: "bc-10", name: "Elaichi Rusk", price: 58, category: "Rusks & Toast", description: "Cardamom-flavoured crispy rusks" },
    { id: "bc-11", name: "Milk Rusk", price: 52, category: "Rusks & Toast", description: "Perfect tea-time companion" },
    { id: "bc-12", name: "Butter Toast", price: 48, category: "Rusks & Toast", description: "Golden buttery oven-baked toast" },
    { id: "bc-13", name: "Mathri", price: 62, category: "Savoury Snacks", description: "Flaky, spiced Indian crackers" },
    { id: "bc-14", name: "Namak Pare", price: 52, category: "Savoury Snacks", description: "Crunchy salted diamond-cut snacks" },
    { id: "bc-15", name: "Pinni", price: 105, category: "Traditional Sweets", description: "Nutritious Punjabi energy balls" },
    { id: "bc-16", name: "Gur Rewri", price: 72, category: "Traditional Sweets", description: "Jaggery sesame brittle" },
  ],
  "nakodar-road": [
    { id: "nr-1", name: "Atta Biscuit", price: 35, category: "Classic Biscuits", description: "Wholesome wheat biscuits, perfectly crisp" },
    { id: "nr-2", name: "Nankhatai", price: 52, category: "Classic Biscuits", description: "Traditional Indian shortbread cookies" },
    { id: "nr-3", name: "Ajwain Biscuit", price: 40, category: "Classic Biscuits", description: "Carom-seed flavoured crunchy delight" },
    { id: "nr-4", name: "Jeera Biscuit", price: 40, category: "Classic Biscuits", description: "Cumin-spiced savoury biscuits" },
    { id: "nr-5", name: "Coconut Cookies", price: 48, category: "Premium Cookies", description: "Rich coconut-infused buttery cookies" },
    { id: "nr-6", name: "Kaju Pista Cookies", price: 82, category: "Premium Cookies", description: "Cashew & pistachio loaded cookies" },
    { id: "nr-7", name: "Choco Chip Cookies", price: 62, category: "Premium Cookies", description: "Belgian chocolate chunk cookies" },
    { id: "nr-8", name: "Dry Fruit Biscuit", price: 72, category: "Premium Cookies", description: "Loaded with almonds, cashews & raisins" },
    { id: "nr-9", name: "Suji Rusk", price: 45, category: "Rusks & Toast", description: "Light and crispy semolina rusks" },
    { id: "nr-10", name: "Elaichi Rusk", price: 50, category: "Rusks & Toast", description: "Cardamom-flavoured crispy rusks" },
    { id: "nr-11", name: "Milk Rusk", price: 45, category: "Rusks & Toast", description: "Perfect tea-time companion" },
    { id: "nr-12", name: "Butter Toast", price: 40, category: "Rusks & Toast", description: "Golden buttery oven-baked toast" },
    { id: "nr-13", name: "Mathri", price: 55, category: "Savoury Snacks", description: "Flaky, spiced Indian crackers" },
    { id: "nr-14", name: "Namak Pare", price: 45, category: "Savoury Snacks", description: "Crunchy salted diamond-cut snacks" },
    { id: "nr-15", name: "Pinni", price: 90, category: "Traditional Sweets", description: "Nutritious Punjabi energy balls" },
    { id: "nr-16", name: "Gur Rewri", price: 60, category: "Traditional Sweets", description: "Jaggery sesame brittle" },
  ],
};

export function getBranch(branchId: string): BranchInfo | undefined {
  return branches.find((b) => b.id === branchId);
}

export function getBranchMenu(branchId: string): MenuItem[] {
  return branchMenus[branchId] || [];
}
