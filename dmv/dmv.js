function DMV(agents) {
  this.agents = agents
  this.customers = []
  // this.customer = null
};

DMV.prototype.customersInLine = function() {
  return this.customers
};

DMV.prototype.enter = function(customer) {
  this.customers.push(customer)
}

DMV.prototype.currentCustomerFor = function(agent) {
 return this.customers[0]
}

DMV.prototype.nextCustomer = function() {
  this.customer = this.customers.shift()
}

module.exports = DMV;
