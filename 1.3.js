export function findStr(str) {
    return str.replace("," , ", ")
              .split(' ').length;
}