function lbp(dav: number, dar: number, trim: number, lbp: number) {
  let distanceDeCorrection = trim / (lbp - dav + dar);
  return distanceDeCorrection;
}

console.log(
  "The distance of the forward draft correction is " + lbp(0.5, 2.4, 1.3, 120)
);

// Named Parameters:
type NewType = {
  draftAvant: number;
  draftArrière: number;
  draftMilieu: number;
  distAv: number;
  distAr: number;
  lpp: number;
  trim: unknown;
  lbm: unknown;
  distCorAv: unknown;
};

function draftCorrection({
  draftAvant,
  draftArrière,
  trim: trimUnknown,
  draftMilieu,
  distAv,
  distAr,
  lpp,
  lbm: lbmUnknown,
  distCorAv,
}: NewType) {
  // Calcul du trim
  const trim = draftArrière - draftAvant;
  console.log(trim);
  //Calcul du lbm: length between perpendiculars
  let lbm = lpp; // Initialize lbm with lpp

  if (distAv > 0 && distAr > 0) {
    lbm = lpp + distAr - distAv;
  } else if (distAv < 0 && distAr > 0) {
    lbm = lpp - distAv - distAr;
  } else if (distAv < 0 && distAr < 0) {
    lbm = lpp - distAv + distAr;
  } else if (distAv > 0 && distAr < 0) {
    lbm = lpp + distAv - distAr;
  }

  console.log(`La valeur actuelle du lbm est : ${lbm.toFixed(2)}  m`);

  // calculer la distance de correction avant:
  const distCorAvCalculated = (distAv * trim) / lbm;

  return distCorAvCalculated.toFixed(4);
}
console.log(
  "Distance de correction du tirant d'eau avant est :" +
    draftCorrection({
      draftAvant: 3.5,
      draftArrière: 4.2,
      draftMilieu: 4.1,
      distAv: -0.5,
      distAr: -2.4,
      lpp: 118.99,
      trim: undefined,
      lbm: undefined,
      distCorAv: undefined,
    })+" m",
);
