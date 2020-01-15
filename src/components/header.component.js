import {Component} from "../core/component";


export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        const btn = this.$el.querySelector('.js-btn');
        const btnBack = document.querySelector('.back-btn');
        btn.addEventListener('click', (event) => {
                event.preventDefault();
                this.hide();
                document.querySelector('.w-container').classList.remove('hide');
            }
        );

        btnBack.addEventListener('click', () => {
            this.show();
            this.$el.classList.remove('hide');
            document.querySelector('.w-container').classList.add('hide')
        })
    }
}
