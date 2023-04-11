let indian1: {name: string  ,jhootiIndex : number } = {
name : "baghat singh",
jhootiIndex : 1,
};

let pakistani1 : {name: string  ,jhootiIndex : number , goliBaziIndex : number } =
{
    name : "ahmad",
    jhootiIndex : 2,
    goliBaziIndex : 1
};
console.log(indian1);
indian1 = pakistani1;
console.log(indian1);

// serach for nominal typing
// search index sign
var x:{id: number;[x:string]:any}
