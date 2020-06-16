const stats = {
  classStat: document.getElementById('classStat'),
  protoStat: document.getElementById('protoStat'),
  plainStat: document.getElementById('plainStat'),
}

export function setStat(type, value){
  stats[`${type}Stat`].innerText = value;
}