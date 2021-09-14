"use strict"

function Util() {
	function calculateTotalDistributedPassengers(distributedPassengers) {
		let totalDistributedPassengers = 0;
		let value;
		for(value in distributedPassengers) {
			totalDistributedPassengers += distributedPassengers[value];
		}
		return totalDistributedPassengers;
	}

	function calculateTotalNumberOfPassengers(passengersArray) {
		let totalNumberOfPassengers = 0;
		let passengers;
		for (passengers of passengersArray) {
			totalNumberOfPassengers += passengers;
		}
		return totalNumberOfPassengers;
	}

	function checkInput(input) {
		if (!input) {
			throw new Error("Incorrect values. Check all input fields to be filled in.");
		}
		if (isNaN(input)) {
			throw new Error("Incorrect values. Check all input fields to be numbers.")
		}
	}

	function calculateTotalDistance(distancesArray) {
		let totalDistance = 0;
  		let distance;
		for (distance of distanceArray) {
			if (distance < 0) {
				continue;
			} 
			totalDistance += distance;
		}
		return totalDistance;
	}

	function calculateBonusPoints(businessDistancesArray, economyDistancesArray, businessBonusPercent, economyBonusPercent) {
		let businessDistance = calculateTotalDistance(businessDistancesArray);
		let economyDistance = calculateTotalDistance(economyDistancesArray);
		let points = (businessPoints * businessBonusPercent)/100 + (economyDistance * economyBonusPercent)/100;
		return points;
	}

	return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}
module.exports = Util();