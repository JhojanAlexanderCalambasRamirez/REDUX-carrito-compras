// src/utils/generateInvoice.js

export const generateInvoice = (cart) => {
    // Aquí puedes implementar la lógica de generación de factura
    // por ejemplo, formatear los datos del carrito, crear un archivo PDF, etc.
    const invoice = cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1, // Suponiendo que tengas una propiedad de cantidad
    }));
  
    return invoice;
  };
  