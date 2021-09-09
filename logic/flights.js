function Flights() {
	function calculateNumberOfFlights(passengers, capacity){
		let flights = 0;

		if(passengers < 0 || (!Number.isInteger(Number(passengers)))) {
			throw new Error("The number of passengers must be a positive integer value");
		}

		if(capacity < 0 || (!Number.isInteger(Number(capacity)))) {
			throw new Error("The capacity of the flight must be a positive integer value");
		}


		if (passengers%capacity == 0){
			flights = passengers/capacity;
		} else {
			flights = Math.floor(passengers/capacity) + 1;
		}
	}
	return flights;

	function checkAircraftRevision(distanceLimit, distancesArray) {
		let totalDistance = distancesArray.reduce(function(acc, val) { return acc + val; }, 0)
		if(totalDistance <= distanceLimit/2){
			console.log("The revision needs to be done within the next 3 months");
		} else if(totalDistance > distanceLimit/2 && totalDistance <=  (distanceLimit/4)*3){
			console.log("The revision needs to be done within the next 2 months")
		} else if(totalDistance > (distanceLimit/4)*3 && totalDistance <= distanceLimit){
			console.log("The revision needs to be done within the next month")
		} else {
			throw new Error("Total distance exceeds the distance limit.  This is a flying deathtrap.")
		}
	}

	return {calculateNumberOfFlights, checkAircraftRevision}; 
}

