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

module.exports = ScranAdvisor;