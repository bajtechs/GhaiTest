const OWNER_PHONE = "917696904810";

interface OrderItem {
  name: string;
  price: number;
  qty: number;
  subtotal: number;
}

interface OrderData {
  orderId: string;
  branch: string;
  customer: {
    name: string;
    phone: string;
    location: string;
  };
  items: OrderItem[];
  totalPrice: number;
  paymentMethod: string;
  orderDate: string;
}

export function buildWhatsAppOrderUrl(order: OrderData): string {
  const itemLines = order.items
    .map((item) => `• ${item.name} × ${item.qty} = ₹${item.subtotal}`)
    .join("\n");

  const message = `🧾 *New Order — Ghai Biscuits*

📋 *Order ID:* ${order.orderId}
🏪 *Branch:* ${order.branch}
📅 *Date:* ${new Date(order.orderDate).toLocaleString("en-IN")}

👤 *Customer:* ${order.customer.name}
📞 *Phone:* ${order.customer.phone}
📍 *Location:* ${order.customer.location}

🛒 *Items:*
${itemLines}

💰 *Total:* ₹${order.totalPrice}
💳 *Payment:* ${order.paymentMethod}`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${OWNER_PHONE}?text=${encoded}`;
}
