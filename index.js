const dotCalculator = (equation) => {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '//': (a, b) => a / b,
    };
    const [left, operator, right] = equation.split(' ');
    return '.'.repeat(operators[operator](left.length, right.length));
};
