function Util() {
	function calculateTotalDistributedPassengers(distributedPassengers) {
		// return distributedPassengers.reduce(function(acc, val) { return acc + val; }, 0)
		let totalDistributedPassengers = 0;
		let value;
		for(value in distributedPassengers) {
			totalDistributedPassengers += distributedPassengers[value];
		}
		return distributedPassengers;
	}

	function calculateTotalNumberOfPassengers(passengersArray) {
		let totalNumberOfpassengers = 0;
		let passengers;
		for (passengers in ppassengersArray) {
			totalNumberOfPassengers += passengers;
		}
		return totalNumberOfPassengers;
	}
	return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports = Util();

