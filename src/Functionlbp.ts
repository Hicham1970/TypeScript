function lbp(dav: number, dar: number, trim: number, lbp: number) {
  let distanceDeCorrection = trim / (lbp - dav + dar);
  return distanceDeCorrection;
}

console.log(
  "The distance of the forward draft correction is " + lbp(0.5, 2.4, 1.3, 120)
);
