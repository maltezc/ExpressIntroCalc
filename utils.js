const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  // try {
  let arrNums = strNums.split(",")
  // let
  // for (let num of arrNums) {
  //   if (num === NaN) {
  //     throw new BadRequestError();
  //   }
  // }

  // return arrNums.map(num => Number(num))
  // } catch (err) {
  //   throw new BadRequestError();
  // }
}


module.exports = { convertStrNums };

