import {Component} from "../core/component";


export class NavigationComponent extends Component {
    constructor(id) {
        super(id);

        this.tabs = null;
    }

    init() {
        this.$el.addEventListener("click", (event) => {
            event.preventDefault();
            if (event.target.classList.contains('tab')) {
                const arr = Array.from(this.$el.querySelectorAll('.tab'));
                arr.forEach(tab => {
                    tab.classList.remove('active');
                });
                event.target.classList.contains('active') || event.target.classList.add('active');
                const currentTab = this.tabs.find(el => el.name === event.target.dataset.name);

                this.tabs.forEach(el => el.attribute.hide());
                currentTab.attribute.show();
            }
        })
    }

    switchTabs(array) {
        this.tabs = array;
    }
}