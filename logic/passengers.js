function Passengers() {
	function CheckFlightCapacity(flightCapacity, passengersArray){

		let passengersNumber = 0;
		let passengers;
		for(passengers in passengersArray) {
			if (Number.isNaN(passengers)) {
				passengersNumber += 0;
			} else {
				passengersNumber += passengers;
			}
		}

		if (passengersNumber > flightCapacity) {
			throw new Error("Total passengers exceeds the flight capacity.  Someone gonna die.")
		} else {
			return passengersNumber;
		}
	}

	function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, noOfflights, businessSeatsPerFlight, economySeatsPerFlight) {
		let vipInBusiness = 0;
		let vipInEconomy = 0;
		let regularInBusiness = 0;
		let regularInEconomy = 0;
		let businessSeatsRemaining = noOfflights * businessSeatsPerFlight;
		let economySeatsRemaining = noOfflights * economySeatsPerFlight;

		var vipBusinessConfiguration = {passengers:vipPassengers, seats:businessSeatsRemaining};
		vipInBusiness = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

		var vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:economySeatsRemaining};
		vipInEconomy = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

		var regularBusinessConfiguration = {passengers:regularPassengers, seats: vipBusinessConfiguration.seats};
		regularInBusiness = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

		var regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats: vipEconomyConfiguration.seats};
		regularInEconomy = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

		return {vipInBusiness:vipInBusiness, vipInEconomy: vipInEconomy, regularInBusiness: regularInBusiness, regularInEconomy:regularInEconomy};
	}

	function updateConfiguration(configuraion, seatsPerFlight) {
		let pssengersWithSeats = 0;
		while (configuration.passengers > 0) {
			if (configuration.seats > 0) {
				if (configuration.passengers > configuration.seats) {
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

