
//Функция сравнения двух массивов
export const arraysEqual = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false;
    }

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false;
        }
    }
    return true;
}

//заменяет пробелы в строке на нижние пробелы (для создания ссылок)

export const replaceForLink = (str) => {
    return '/' + str.toLowerCase().replace(/\s/g, '_');
}

//пока что пробные функции
 