const vessel: {
  nationality: string;
  name: string;
  IMO: number;
  LBP: number;
  year: number;
} = {
  nationality: "Japan",
  name: "Titanic",
  IMO: 100000,
  LBP: 234,
  year: 1997,
};

console.log(vessel.IMO, vessel.LBP);