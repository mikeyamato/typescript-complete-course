"use strict";
var MyMath;
(function (MyMath) {
    // perfectly fine to have a namespace within a namespace.
    // export if needed.
    var Circle;
    (function (Circle) {
        var PI = 3.14; // only accessible within this scope
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
