import OptionClass from "./Option"

const generatePassword = (options: OptionClass[], length: number): string => {
    const validCharacters = options.filter((option) => option.checked)?.map((option) => option.characters).join('')
    if (validCharacters.length === 0) {
        return 'No options selected :('
    }
    let password = ''
    for (let i = 0; i < length; i++) {
        password += validCharacters[Math.floor(Math.random() * validCharacters.length)];
    }
    return password
}

export default generatePassword