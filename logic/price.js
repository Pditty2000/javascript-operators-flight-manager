"use strict"

function Prices() {
	function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
		let finalPrice = 0;
		let variationPassengerPrice = variationPassengerPrice * basePrice;
		finalPrice = basePrice + variationPassengerPrice + (variationFlightType * variationPassengerPrice);
		return finalPrice.toFixed(2);
	}

	function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
		let finalPrice = basePrice;

		switch (passengerType.toUpperCase()) {
			case 'REGULAR': finalPrice *= .95;		//Regular passenger
				break;
			case'VIP': finalPrice *= 1.05;			//VIP passenger
				break;
		}

		switch (flightType.toUpperCase()) {
			case 'ECONOMY': finalPrice *= .97;		//Economy flight
				break;
			case 'BUSINESS': finalPrice *= 1.1;	//Business flight
				break;
		}
		return finalPrice.toFixed(2);
	}

	function calculateTotalFinalPrice(seats, passengerType, flightType, basePrice) {
		return seats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
	}
	return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}
module.exports = Prices();