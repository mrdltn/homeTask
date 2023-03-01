export function TwoString(initStr) {
    // разбиваем строку на массив, по пробелу
    const strItems = initStr.replace("," , " ,").split(' ');
    // допилить , чтобы  знаки препинания не считались словами
    const result = {};
    strItems.forEach( item => {
        // приводим в один регистр, для правильной проверки
        const normalItem = item.toLowerCase();

        // Если уже есть, просто увеличиваем. Если нет, устанавливает счетчик в 1
        if(normalItem in result) {
            result[normalItem] = result[normalItem] + 1;
        } else {
            result[normalItem] = 1;
        }
    });

    return Object.keys(result).map(k => {
        return `Слово: ${k}: ${result[k]};`
    }).join(' ')
}

alert(TwoString('Текст, в котором слово текст несколько раз встречается и слово тоже'));