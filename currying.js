const calculatePriceTax = iva => price => price * iva ;
const calculatePriceWithIva = calculatePriceTax(1.21)
console.log(calculatePriceWithIva(10));