export const novaString = (string) => {
    if (string.length >= 25){
        return string.substring(0,18) + "...";
    }
}