function gruopsName(arrOfGroup) {
  const regex = /^(?:[A-Z]{2}20\d{2}(-\d+)?|[a-z]{2}20\d{2}(-\d+)?)$/;
  return arrOfGroup.map((group) =>
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
gruopsName(arrGroups);
