export default class List {
    constructor() {
        this.myList = []; // Lista/array vacia
    }

    render() {
        let myList = "<ul>";

        // escribir el for que recorra los elementos de la lista.
        for (let index = 0; index < this.myList.length; index++) {
            const element = this.myList[index];

            myList += "<li>";

            // hacer algo

            myList += "</li>"

        }
        
        myList += "</ul>";

        return myList;
    }
}