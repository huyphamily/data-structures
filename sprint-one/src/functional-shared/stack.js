var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var instance = {};
  instance.storage = {};
  instance.length = 0;

  _.extend(instance, stackMethods);


  return instance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function () {
    if (this.length > 0) {
      this.length--;
    }
    var temp = this.storage[this.length];
    delete this.storage[this.length];
    return temp;
  },
  size: function () {
    return this.length;
  }
};


