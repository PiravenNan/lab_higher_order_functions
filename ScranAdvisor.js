const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
};

// Add methods to prototype

ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.reduce((reducer,restaurant)=>{
        return reducer + 1;
},0);
};

ScranAdvisor.prototype.findByName = function(restaurantName) {
    return this.restaurants.find((restaurant) => restaurant.name === restaurantName);
};

ScranAdvisor.prototype.getRestaurantNames = function() {
    return this.restaurants.map((restaurant)=>{
        return restaurant.name;
},0);
};

ScranAdvisor.prototype.getRestaurantByCity = function(targetCity) {
    return this.restaurants.filter((restaurant)=>{
        return restaurant.location.town ===targetCity;
},0);
};


module.exports = ScranAdvisor;