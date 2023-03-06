import config from "../config/config";

export function calculateInflation(originalPrice) {
  const currentMonth = new Date().getMonth() + 1;
  const inflationByMonth = config.currentInflationRate / 12
  // const inflatedAnualPrice = originalPrice + (originalPrice * config.currentInflationRate / 100)
  return Math.ceil(originalPrice + ((originalPrice * inflationByMonth / 100) * currentMonth));
}

export function formatPrice (price) {
  let options = {
    locale: config?.locale ?? 'es-AR',
    currency: config?.currency ?? 'ARS',
    minimumFractionDigits: config?.minimumFractionDigits ?? 0,
  };

  return price.toLocaleString(
    options.locale,
    { style: 'currency', currency: options.currency, minimumFractionDigits: options.minimumFractionDigits }
  );
}