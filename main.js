var RomanNumerals = function() {}

var numeral =  function(value, numeral){
    return {value: value, numeral: numeral};
};

var numerals = [
    numeral(1000, "M"),
    numeral(900, "CM"),
    numeral(500, "D"),
    numeral(400, "CD"),
    numeral(100, "C"),
    numeral(90, "XC"),
    numeral(50, "L"),
    numeral(40, "XL"),
    numeral(10, "X"),
    numeral(9, "IX"),
    numeral(5, "V"),
    numeral(4, "IV"),
    numeral(1, "I")
];

RomanNumerals.prototype.fromNumber = function(n){
    var result = "";
    numerals.forEach(function(item){    
        for (; n >= item.value; n -= item.value){
            result += item.numeral;
        } 
    });
    /// while (n > 0) {
    ///     result += "I";
    ///     --n;
    /// }
    // if (3 === n){
    //     return "III"
    // }
    // if (2 === n){
    //     return "II"
    // }
    return result;
};

module.exports = new RomanNumerals();