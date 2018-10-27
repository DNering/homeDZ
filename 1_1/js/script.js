//вводим имя
let name = prompt ("Введите ваше имя:");
let res ="";
let result = "";

// если есть цифра то меняет регист букв с большого на маленький и на оборот
if (name.match(/\d/g)) {

  for (let j = 0; j < name.length; j++) {
    if(name.charAt(j) == name.charAt(j).toLowerCase()){
      result += name.charAt(j).toUpperCase();
    }
    else if (name.charAt(j) == name.charAt(j).toUpperCase()) {
    result += name.charAt(j).toLowerCase();
    }
  }
  alert(result);
}                          //если нет цифр то переворачиваем слово задом на перед
else{
  for (let i = name.length -1; i >= 0; i--) {
    res += name.charAt(i);
  }
  alert(res);  
}