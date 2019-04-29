/*
*   функция для конвертирования адреса фото и добавления необходимой папка
*   где лежит фото соответствующего размера
*/
export const updateImageName = (str, base ) => {
   let position = str.match(/\/(\d\D*.jpg)$/);
   let name = position[1];
   name = `${base}${name}`
   return name;
}