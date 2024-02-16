

function whoPays(){
    var pay = document.getElementById("pay")
    var names = ["Venerita", "Wisdom", "Lucas", "Boris", "Salim", "Emmanuel"]
    var randomName = Math.floor(Math.random() * names.length);
    var getName = names[randomName];
    // console.log(getName);
    pay.innerHTML = `Among ${names}, ${getName} is going to pay the bills!`
    console.log(`${getName} is going to pay the bills!`);

}

whoPays()