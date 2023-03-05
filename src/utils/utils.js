import config from "../config/config";
export function calculateInflation(originalPrice) {
  const currentMonth = new Date().getMonth() + 1;
  const inflationByMonth = config.currentInflationRate / 12
  // const inflatedAnualPrice = originalPrice + (originalPrice * config.currentInflationRate / 100)
  const inflatedMonthlyPrice = Math.ceil(originalPrice + ((originalPrice * inflationByMonth / 100) * currentMonth))

  return inflatedMonthlyPrice.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 });
}