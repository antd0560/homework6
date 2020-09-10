import{BaseComponent} from "./BaseComponent.js";

class MemeCollection extends BaseComponent {
    constructor() {
        super();

        this.state = {
            memes: [
                {"name": "MJ cry", 
                 "image":"https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg",
                 "description": "hãy khóc đi khóc đi đừng ngại ngần",
                 "date-modified": "2020/09/09"
                },
                {"name": "MJ cry",
                 "image":"https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg",
                 "description": "hãy khóc đi khóc đi đừng ngại ngần",
                 "date-modified": "2020/09/09" },
                {"name": "MJ cry",
                 "image":"https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg",
                 "description": "hãy khóc đi khóc đi đừng ngại ngần",
                 "date-modified": "2020/09/09" }
            ]
        }
    }
    render() {
        let html = "";
        for (let meme of this.state.memes) {
            html += `<meme-container name="${meme.name}" image="${meme.image}" description="${meme.description}" date-modified="${meme["date-modified"]}"></meme-container>`
        }
        this._shadowRoot.innerHTML = `
        <form class="form-add-meme">
            <input name="name" placeholder="meme"><br>
            <input name="image" placeholder="link meme"><br>
            <input name="description" placeholder="mo tả"><br>
            <input type="datetime-local" name="dateModified" placeholder="Date modified"><br>
            <button>Add Meme</button>
        </form>
    
    <div class="list">
        ${html}
    </div>
        `;

        this.$formAddMeme = this._shadowRoot.getElementById('form-add-meme');
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                "name": this.$formAddMeme.name.value,
                "image": this.$formAddMeme.image.value,
                "description": this.$formAddMeme.description.value,
                "date-modified": this.$formAddMeme.dateModified.value
            };
            this.state.memes.push(newMeme);
            this.render();
            this.componentDidUpdate();
        }
    }
}

window.customElements.define('list-container', MemeCollection);