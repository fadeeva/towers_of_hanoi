// time_storage.js
describe("time_storage.js", function(){
    
    describe("getListTimeRecord()", function() {
        
    });
    
    describe("getTimeRecord()", function() {

        it("Возвращает NULL для не существующего уровня 07", function() {
            assert.isNull(getTimeRecord("07"));
        });
        
        it("Возвращает NULL для числового значения", function() {
            assert.isNull(getTimeRecord(7));
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
        it("Возвращает объект", function() {
            assert.isObject(getCurrentTime());
        });
        
        it("Объект содержит два ключа: strTime, sec", function() {
            expect(getCurrentTime()).to.have.all.keys('strTime', 'sec');
        });
        
        describe("Проверяет тип ключей:", function() {
            it("strTime должно быть строкой.", function() {
                expect(getCurrentTime()).to.have.property('strTime').that.is.a('string');
            });
            
            it("sec должно быть числом.", function() {
                expect(getCurrentTime()).to.have.property('sec').that.is.a('number');
            });
        });
    });
    
    describe("isNewRecord()", function() {
        
    });
});


