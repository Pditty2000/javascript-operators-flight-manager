function Util() {
	function calculateTotalDistributedPassengers(distributedPassengers) {
		// return distributedPassengers.reduce(function(acc, val) { return acc + val; }, 0)
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
			if (Number.isNaN(passengers)) {
				totalNumberOfPassengers += 0;
			} else {
				totalNumberOfPassengers += passengers;
			}
		}
		return totalNumberOfPassengers;
	}
	return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports = Util();

