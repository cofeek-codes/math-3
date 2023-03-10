var values = [];
var inputs = document.querySelectorAll('input');
var btn = document.querySelector('#check');
var out = inputs[3];
var count = function () {
    inputs.forEach(function (e) { return values.push(+e.value); });
    values.pop();
    var biggest = Math.max.apply(Math, values);
    var others = values.filter(function (i) { return i !== biggest; });
    console.log(others, values, biggest);
    out.value = "".concat(Math.pow(biggest, 2) == Math.pow(others[0], 2) + Math.pow(others[1], 2));
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', count);
