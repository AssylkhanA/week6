const getElemId = (id) => document.getElementById(id);

const mulDiv = () => {
    const n1 = parseFloat(getElemId("num1").value), n2 = parseFloat(getElemId("num2").value);
    getElemId("result1").innerHTML = isNaN(n1) || isNaN(n2) ? "Enter valid numbers" : n2 === 0 ? "Cannot divide by zero" : `Multiplication: ${n1 * n2} <br> Division: ${n1 / n2}`;
};

const maxThree = () => {
    const n3 = parseFloat(getElemId("num3").value), n4 = parseFloat(getElemId("num4").value), n5 = parseFloat(getElemId("num5").value);
    getElemId("result2").innerHTML = `Largest: ${Math.max(n3, n4, n5)}`;
};

const sumTriple = () => {
    const n6 = parseFloat(getElemId("num6").value), n7 = parseFloat(getElemId("num7").value);
    getElemId("result3").innerHTML = `Result: ${n6 === n7 ? (n6 + n7) * 3 : n6 + n7}`;
};

const closest100 = () => {
    const n8 = parseFloat(getElemId("num8").value), n9 = parseFloat(getElemId("num9").value);
    const diffA = Math.abs(100 - n8), diffB = Math.abs(100 - n9);
    getElemId("result4").innerHTML = diffA === diffB ? "Both equally close" : diffA < diffB ? `Closest: ${n8}` : `Closest: ${n9}`;
};

const firstHalf = () => {
    const str = getElemId("inputString").value;
    getElemId("result5").innerHTML = str.length % 2 === 0 ? str.slice(0, str.length / 2) : "String length not even";
};
