const setMetrics = (card) => {
  let newInterval;
  let newRepitition;

  if (card.score >= 3) {
    if (card.repitition === 1) {
      newInterval = 1;
      newRepitition = 2;
    } else if (card.repitition === 2) {
      newInterval = 6;
      newRepitition = 3;
    } else {
      newInterval = Math.round(card.interval * card.ease);
      newRepitition = card.repitition + 1;
    }
  } else {
    newInterval = 1;
    newRepitition = 1;
  }

  let newEase = card.ease + (0.1 - (5 - card.score) * (0.08 + (5 - card.score) * 0.02));

  if (newEase < 1.3) {
    newEase = 1.3;
  }

  card.interval = newInterval;
  card.repitition = newRepitition;
  card.ease = newEase;

  return card;
};

module.exports = setMetrics;
