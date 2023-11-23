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

module.exports = ScranAdvisor;