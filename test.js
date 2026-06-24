const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.el68ori.mongodb.net", (err, records) => {
  if (err) {
    console.log(err);
  } else {
    console.log(records);
  }
});