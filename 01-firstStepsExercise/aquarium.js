function aquarium(input) {
  let literVolume = Number(input[0]) * Number(input[1]) * Number(input[2]) / 1000;
  let accsVolumePerc = Number(input[3]) / 100;
  
  console.log(literVolume * (1 - accsVolumePerc));
}

aquarium(["105",
"77",
"89",
"18.5"]);