class Button {
    
    // Params:
    // Texto: cadena de Texto en Formato string
    // color: cadena de texto de color en formato hexadecimal sin #

    constructor(texto, css_class){
        this.text = texto;
        this.css_class = css_class;
    }

    render() {
        //let myHTML = "<Button>"+this.text+"</Button>";

        // Comillas alt 96

        let myHTML = `<Button class=${this.css_class}>${this.text}</Button>`;

        return myHTML;
    }
}


const myApp = document.getElementById("myApp");

let myButton = new Button("Signing","btn btn-outline-primary myButton");

myApp.innerHTML = myButton.render();