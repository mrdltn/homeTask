export function methodsStr(str) {
    let strLowerCase = str.toLowerCase();
    return strLowerCase[0].toUpperCase() + strLowerCase.slice(1);
}