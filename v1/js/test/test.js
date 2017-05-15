// time_storage.js
describe("time_storage.js", function(){
    
    describe("getListTimeRecord()", function() {
        
    });
    
    describe("getTimeRecord()", function() {

        it("Возвращает NULL для не существующего уровня 07", function() {
            assert.isNull(getTimeRecord("07"));
        });

        it("Возвращает NULL для функции без аргумента", function() {
            assert.isNull(getTimeRecord());
        });

        describe("Проверяет, чтобы значения всех уровней были числами", function() {

            function makeTest(x) {
                var expected = "#0" + x;
                it("значения уровеня #0" + x + " является числом", function() {
                    assert.isNumber(getTimeRecord(expected));
                });
            }

            for (var x = 1; x <= 6; x++) {
                makeTest(x);
            }
        });
    });
    
    describe("getCurrentTime()", function() {
        
    });
    
    describe("isNewRecord()", function() {
        
    });
});


