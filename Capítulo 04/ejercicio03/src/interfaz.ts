interface Person {
    ssn: string;
    firstName: string;
    lastName: string; 
    age: number;
    married: boolean;   
}

let interfazPropiedades = () => {

	//Defina la variable person de acuerdo con la interfaz Person

	/* Inicio */
	let person: Person = {
        ssn: "251",
        firstName: "xdx",
        lastName: "xd",
        age: 15,
        married: true
    }
	/* Fin */

	return person
}

console.log(interfazPropiedades())

export {interfazPropiedades}