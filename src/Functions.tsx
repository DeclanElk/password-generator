export default function generatePassword(lowercase: Boolean,
    uppercase: Boolean,
    numbers: Boolean,
    symbols: Boolean,
    length: number) {

    let charset: string[] = []

    //For each boolean input, check and add relevant chars to charset
    if (uppercase) {
        charset = charset.concat([...Array(26)].map((value, i) => String.fromCharCode(i + 65)))
    }
    if (lowercase) {
        charset = charset.concat([...Array(26)].map((value, i) => String.fromCharCode(i + 97)))
    }
    if (numbers) {
        charset = charset.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    }
    if (symbols) {
        charset = charset.concat(["!", "@", "#", "$", "%", "^", "&", "*", "?", ";", "+", "-"])
    }

    //Handling in case the function is called with no options selected
    if (!uppercase && !lowercase && !numbers && !symbols) return ""

    return [...Array(length)].map((value) => {
        return charset[Math.floor(Math.random() * (charset.length))]
    }).join("")
}