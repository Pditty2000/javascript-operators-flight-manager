function Passengers() {
	function onCheckFlightCapacity(flightCapacity, passengersArray){
		// totalPassengers = passengersArray.reduce(function(acc, val) { return acc + val; }, 0);

		let totalFlightCapacity = 0;
		let chair;
		for(chair in flightCapacity) {
			totalFlightCapacity += flightCapacity[chair];

		if (totalPassengers > flightCapacity) {
			throw new Error("Total passengers exceeds the flight capacity.  Someone gonna die.")
		} else {
			return totalPassengers;
		}
	}

	function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, flights, businessSeatsPerFlight, economySeatsPerFlight) {
		let vipInBusiness = 0;
		let vipInEconomy = 0;
		let regularInBusiness = 0;
		let regularInEconomy = 0;
		let businessSeatsRemaining = flights * businessSeatsPerFlight;
		let economySeatsRemaining = flights * economySeatsPerFlight;

		var vipBusinessConfiguration = {passengers:vipPassengers, seats:businessSeatsRemaining};
		vipInBusiness = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

		var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:economySeatsRemaining};
		vipInEconomy = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

		var regularBusinessConfiguration = {passengers:regularPassengers, seats: vipBusinessConfiguration.seats};
		regularInBusiness = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

		var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats: vipEconomyConfiguration.seats};
		regularInEconomy = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);
	}

	function updateConfiguration(configuraion, seatsPerFlight) {
		let pssengersWithSeats = 0;
		while (configuration.passengers > 0) {
			if (configuration.seats > 0) {
				if (configuration.passengers >= configuration.seats) {
					if (configuration.seats > configuration.seatsPerFlight) {
						configuration.passengers -= seatsPerFlight;
						passengersWithSeats += seatsPerFlight;
					} else {
						configuration.passengers -= configuration.seats;
						passengersWithSeats += configuration.seats;
						configuration.seats = 0;
					}
				} else {
					passengersWithSeats += configuration.passengers;
					configuration.seats -= configuration.passengers;
					configuration.passengers = 0;
				}
			} else {
				break;
			}
		}
		return passengersWithSeats;
	}
	return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
				

module.exports = Passengers();

