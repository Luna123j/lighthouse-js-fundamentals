const judgeVegetable = function (vegetables, metric) {
  let farm = '';
  let highest = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] >= highest) {
      highest = vegetables[i][metric];
      farm = vegetables[i].submitter;
    }
  }
  console.log(farm);
  return farm;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

judgeVegetable(vegetables, metric)