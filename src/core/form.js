export class Form {
    constructor(dom, state) {
        this.domData = dom;
        this.stateData = state;
    }

    gettindFormValues() {
        const values = {};
        Object.keys(this.stateData).forEach(el => {
            values[el] = this.domData[el].value;
        });
        return values;
    }
    clear() {
        Object.keys(this.domData).forEach(el=>this.domData[el].value = '')
    }

    isFormValid() {
        let globalFlag = true;

        Object.keys(this.stateData).forEach(stateItem => {
            let localFlag = true;
            const validators = this.stateData[stateItem];
            validators.forEach(validItem => {
                localFlag = localFlag && validItem(this.domData[stateItem].value);
            });
            if(!localFlag) {
                setError(this.domData[stateItem]);
            } else {
                clearError(this.domData[stateItem]);
            }
            globalFlag = globalFlag && localFlag;
        });

        return globalFlag;
    }

}

function setError(el) {
    clearError(el);
    const error = `<p class="">Введите данные в поле</p>`;
    el.classList.add('invalid');
    el.insertAdjacentHTML("afterend", error)
}

function clearError(el) {
    el.classList.remove('invalid');
    el.nextSibling && el.nextSibling.remove();
}