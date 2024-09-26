let makeCedarStars = (length) => {
    let symbolStar = "*";
    let symbolStartSlash = "/";
    let symbolEndSlash = "\\";
    for (let i = 1; i <= length; i++) {
        let spaces = new Array(length - i).fill(" ").join("");
        if (i === 1) {
            console.log(spaces + symbolStar);
        } else {
            let newSymbolStar = new Array(i * 2 - 2).fill(symbolStar).join("");
            console.log(spaces + symbolStartSlash + newSymbolStar + symbolEndSlash);
        }
    }
};
let makeReversedCedarStars = (length) => {
    let symbolStar = "*";
    let symbolStartSlash = "/";
    let symbolEndSlash = "\\";
    for (let i = 1; i <= length; i++) {
        let space = new Array(i - 1).fill(" ").join("");
        if (i === length) {
            console.log(space + [symbolStar].join(""));
        } else {
            let newSymbolStar = new Array((length - i) * 2).fill(symbolStar).join("");
            console.log(space + symbolEndSlash + newSymbolStar + symbolStartSlash);
        }
    }
};
let makeSecondReversedCedarStars = (length) => {
    let symbolStar = "*";
    let symbolStartSlash = "/";
    let symbolEndSlash = "\\";
    let lines = [];
    for (let i = 1; i <= length; i++) {
        let spaces = new Array(length - i).fill(" ").join("");
        if (i === 1) {
            lines.push(spaces + symbolStar);
        } else {
            let newSymbolStar = new Array(i * 2 - 2).fill(symbolStar).join("");
            lines.push(spaces + symbolEndSlash + newSymbolStar + symbolStartSlash);
        }
    }
    lines.reverse().forEach((line) => {
        console.log(line);
    });
};
makeSecondReversedCedarStars(5);
