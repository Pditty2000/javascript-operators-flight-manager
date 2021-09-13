function Flights() {
	function calculateNumberOfFlights(passengers, capacity) {
		let flights;

		if((passengers < 0) || (!Number.isInteger(Number(passengers)))) {
			throw new Error("The number of passengers must be a positive integer value");
		}

		if((capacity < 0) || (!Number.isInteger(Number(capacity)))) {
			throw new Error("The capacity of the flight must be a positive integer value");
		}


		if (passengers%capacity == 0) {
			flights = passengers/capacity;
		} else {
			flights = Math.floor(passengers/capacity) + 1;
		}
	
	return flights;
}

	function checkAircraftRevision(distanceLimit, distancesArray) {
		// totalDistance = distancesArray.reduce(function(acc, val) { return acc + val; }, 0);

		let totalDistance = 0;
		let distance;
		for(distance of distancesArray) {
			if (Number.isNaN(distance)) {
				totalDistance += 0;
			} else {
				totalDistance += distance;
			}
		}
		let percent = Math.floor((totalDistance/distanceLimit)*100);

		if (totalDistance > distanceLimit) {
			throw new Error("Total distance: " + totalDistance + " exceeds the distance limit: " + distanceLimit + ".  This is a flying deathtrap.")
		}

		if(totalDistance <= (distanceLimit/2)) {
			return "The revision needs to be done within the next 3 months.  This aircraft has flown " + percent + "% of it's limit.";
		} else if(totalDistance <=  (distanceLimit/4)*3){
			return "The revision needs to be done within the next 2 months.  This aircraft has flown " + percent + "% of it's limit.";
		} else {
			return "The revision needs to be done within the next month.  This aircraft has flown " + percent + "% of it's limit.";
		} 
	}
	return {calculateNumberOfFlights, checkAircraftRevision}; 
}

