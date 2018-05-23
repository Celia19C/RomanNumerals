var application = require("./main");

var app;

describe("RomanNumerals", function() {
    
    app = application();
    it("converts numbers to Roman numerals", function(){
        
        expect(app.init(1)).toBe("I");
        expect(app.init(2)).toBe("II");
        expect(app.init(3)).toBe("III");
        expect(app.init(4)).toBe("IV");
        expect(app.init(2648)).toBe("MMDCXLVIII");
    });
});
