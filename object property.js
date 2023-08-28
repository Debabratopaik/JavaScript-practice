const students = [
    {id: 21, Name: 'Turjo'},
    {id: 25, Name: 'Mathun'},
    {id: 33, Name: 'Sabuj'},
    {id: 72, Name: 'Anndo'},

];
const Name = students.map( s => s.Name);
const ids = students.map(s => s.id);
console.log(ids)