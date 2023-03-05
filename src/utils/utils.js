import config from "../config/config";

export function calculateInflation(originalPrice) {
  const currentMonth = new Date().getMonth() + 1;
  const inflationByMonth = config.currentInflationRate / 12
  // const inflatedAnualPrice = originalPrice + (originalPrice * config.currentInflationRate / 100)
  return Math.ceil(originalPrice + ((originalPrice * inflationByMonth / 100) * currentMonth));
}

export function formatPrice (price) {
  return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
}