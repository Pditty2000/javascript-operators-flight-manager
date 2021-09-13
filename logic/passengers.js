function Passengers() {
	
	function checkFlightCapacity(flightCapacity, passengersArray) {

		let passengersNumber = 0;
		let passengers;
		for (passengers of passengersArray) {
			if (Number.isNaN(passengers)) {
				passengersNumber += 0;
			} else {
				passengersNumber += passengers;
			}
		}

		if (passengersNumber > flightCapacity) {
			throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers. ")
		} 
		return passengersNumber;
	}


	// return {checkFlightCapacity};

	function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
		let vipPassengersWithBusinessSeats = 0, vipPassengersWithEconomySeats = 0, 
		regularPassengersWithBusinessSeats = 0, regularPassengersWithEconomySeats = 0;
		let businessSeatsRemaining = nrOfFlights * businessSeatsPerFlight;
		let economySeatsRemaining = nrOfFlights * economySeatsPerFlight;

		var vipBusinessConfiguration = {passengers:vipPassengers, seats:businessSeatsRemaining};
		vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

		var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:economySeatsRemaining};
		vipInEconomy = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

		var regularBusinessConfiguration = {passengers:regularPassengers, seats: vipBusinessConfiguration.seats};
		regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

		var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats: vipEconomyConfiguration.seats};
		regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

		return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats: vipPassengersWithEconomySeats, regularInBusiness: regularInBusiness, regularInEconomy:regularInEconomy};
	}

	function updateConfiguration(configuration, seatsPerFlight) {	
		let passengersWithSeats = 0;
		while (configuration.passengers > 0) {
			if (configuration.seats > 0) {
				if (configuration.passengers >= configuration.seats) {

					if (configuration.seats > configuration.seatsPerFlight) {
						configuration.passengers -= seatsPerFlight;
						configuration.seats -= seatsPerFlight;
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

