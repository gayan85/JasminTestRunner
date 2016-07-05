describe("App", function () {
    describe("foo", function () {
        it("should return bar", function () {
            expect(App.foo()).toEqual("bar");
        });
    });

    describe("Some base suite", function () {
        describe("Basic Suite", function () {
            it("Should pass a basic truthiness test.", function () {
                expect(true).toEqual(true);
                expect(false).toEqual(false);
            });
            it("Should fail when it hits an inequal statement.", function () {
                expect(1 + 1).toEqual(3);
            });
        });
        xdescribe("A skipped suite", function () {
            it("Should not be reported.", function () {
                expect(0).toEqual(0);
            });
            it("Should still add to the skipped count", function () {
                expect(0).toEqual(0);
            });
        });
        describe("A suite with a skipped suite", function () {
            describe("A suite with a skipped test", function () {
                xit("Should be executed but skipped.", function () {
                    expect(0).toEqual(0);
                });
                it("Should not be skipped.", function () {
                    expect(0).toEqual(0);
                });
            });
            xdescribe("A nested skipped suite", function () {
                it("Should not be reported.", function () {
                    expect(0).toEqual(0);
                });
                it("Should still add to the skipped count", function () {
                    expect(0).toEqual(0);
                });
            });
        });
    });
    describe("Another Suite", function () {
        it("Should pass this test as well.", function () {
            expect(0).toEqual(0);
        });

    });
});
