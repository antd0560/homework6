class BaseComponent extends HTMLElement {
    props;
    state;
    
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this.props = {};
        this.state = {};
    }

    connectedCallback() {
        this.render();
        this.componentDidMount();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }

    disconnectedCallback() {
        this.componentWillUnmount();
    }

    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }
    /**
     *  in HTML ra ngoài màn hình
     *  gán sự kiện cho các thẻ bên trong component
     */
    render() {

    }
    /**
     * Được gọi sau khi component sinh ra, sau khi render
     * gọi 1 lần duy nhất
     */
    componentDidMount() {

    }

    /**
     * được gọi sau khi props, state thay đổi, sau khi render
     */
    componentDidUpdate() {

    }

    /**
     *  được gọi trước khi conponent biến mất
     */
    componentWillUnmount() {

    }
}

export{BaseComponent};