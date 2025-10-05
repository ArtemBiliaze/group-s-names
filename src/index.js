function gruopsNames(arrOfGroup) {
  const regex = /^(FD|FE|FM|fd|fe|fm)20\d{2}(?:-\d+)?$/;
  return arrOfGroup.forEach((group) =>
    regex.test(group)
      ? console.log(`Success - ${group}`)
      : console.log(`Error - ${group}`)
  );
}
const arrGroups = [
  "FE2021-5",
  "Fe2020-2",
  "FD2021",
  "fD2022-1",
  "FE2020-3",
  "FD2020/2",
  "fe2021-3",
  "FD2020$5",
  "FE2008-52",
  "Fm2008-23",
  "FM2022-1",
];
gruopsNames(arrGroups);
