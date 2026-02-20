function save() {
  localStorage.setItem('moneyKey',money);
  localStorage.setItem('levelKey',level);
  localStorage.setItem('soldKey',sold);
  localStorage.setItem('levelUpKey',levelUp);
}

function load() {
  if (!localStorage.getItem('moneyKey') || !localStorage.getItem('levelKey') || !localStorage.getItem('soldKey') || !localStorage.getItem('levelUpKey'))
  money = localStorage.getItem('moneyKey');
  level = localStorage.getItem('levelKey');
  sold = localStorage.getItem('soldKey');
  levelUp = localStorage.getItem('levelUpKey');
}


