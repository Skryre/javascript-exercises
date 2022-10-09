const ftoc = function(fdegree) {
  let f = (fdegree - 32) * (5/9);
  return Math.round(f * 10) / 10;
};

const ctof = function(cdegree) {
  let c  = cdegree * (9/5) + 32;
  return Math.round(c * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
