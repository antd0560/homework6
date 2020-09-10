import{BaseComponent} from "./BaseComponent.js";
class Meme extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "name": "",
            "image": "",
            "description": "",
            "date-modified": null
        }
    }
    static get observedAttribute() {
        return ['name', 'image', 'description','date-modified']
    }

    render() {
        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/meme.css">
        <div class="meme">
            <div id="name">${this.props["name"]}</div>
            <img id="image" src="${this.props["image"]}" alt=""> <br>
            <div id="description">${this.props["description"]}</div>
            <div id="date-modified">${this.props["date-modified"]}</div>
        </div>
        `
    }
}

window.customElements.define('meme-container', Meme);
