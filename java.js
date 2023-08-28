function getFullName(firstName, lastName){
    let fullName = '';
    // const fullName = firstName + lastName;
    
    for (let i = 0; i < arguments.length; i++) {
    const namePart = arguments[i];
    fullName = fullName + ' ' + namePart;
}
    return fullName;

}
const Name = getFullName('Hanif', 'boni', 'roni', 'Poribohon');
console.log(Name);

