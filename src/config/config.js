const config = {

  // PRICING
  ///////////
  locale: undefined,
  currency: undefined,
  minimumFractionDigits: undefined,
  currentInflationRate: 94.8,

  // DELIVERY
  ///////////
  deliveries: [
    {
      type: 'Envío estandar',
      time: '5 días hábiles',
      price: '$500',
      cost: 500
    },
    {
      type: 'Envío rápido',
      time: '24hs',
      price: '$1000',
      cost: 1000
    },
    {
      type: 'Retiro en local',
      time: 'inmediato',
      price: 'gratis',
      cost: 0
    },
  ]

};

export default config;