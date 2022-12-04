class FormView extends View {
    static INPUT_SELECTOR = 'input';

    #$inputs;

    constructor(options) {
        super()
        this.options = options;
        this.$table = this.init();
        this.#$inputs = this.$table.find(FormView.INPUT_SELECTOR);
    }

    init() {
        throw new Error('You mast implement this method in child class');
    }

    onFormSubmit(e) {
        e.preventDefault();

        const data = this.getFormData();

        this.options.onSubmit(data);
    }

    setFormData(data) {
        for (const input of this.#$inputs) {
            if (data[input.id]) {
                input.value = data[input.id];
            }
        }
    }

    getFormData() {
        const data = {};

        for (const input of this.#$inputs) {
            data[input.id] = input.value;
        }

        return data;
    }

    clear() {
        this.#$inputs.val('');
    }
}