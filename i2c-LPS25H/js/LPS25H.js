var ADT7410 = function(i2cPort,slaveAddress){
  this.i2cPort = i2cPort;
  this.slaveAddress = slaveAddress;
};

LPS25H.prototype = {
  sleep: function(ms, generator){
    setTimeout(function(){generator.next()}, ms);
  },
  init: function(){
    var self = this;
    return new Promise(function(resolve, reject){
      self.i2cPort.open(self.slaveAddress)
      .then(function(i2cSlave){
        // init
        var thread = (function* () {
        io.i2cWriteReg(address, 0x20, 0x90); //
          yield self.sleep(10, thread);
          resolve();
        })();

        thread.next();

      });
    });
  },
  read: function(){
    var self = this;
    return new Promise(function(resolve, reject){
      self.i2cPort.open(self.slaveAddress)
      .then(function(i2cSlave){
        var thread = (function* () {
          // get distance value
          Promise.all([
            i2cSlave.read8(0x2a, true),
            i2cSlave.read8(0x29, true),
            i2cSlave.read8(0x28, true),
          ]).then(function(v){
			console.log(v);//
            var pressure = v[0]<<16)  | v[1]<<8)  |  v[2] );
            var tmp = (pressure / 4096);
            resolve(temp);
          }).catch(reject);

        })();
        thread.next();
      });
    });  
  }
};