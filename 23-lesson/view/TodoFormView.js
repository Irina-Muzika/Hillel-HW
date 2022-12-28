class TodoFormView extends FormView {
    init() {
        return $(`
          <form id="contactForm">
            <input id="id" type="hidden" />
        
            <div>
              <label for="title">To Do</label>
              <input id="title" type="text"/>
            </div>
        
            <button>Add To Do</button>
          </form>
        `)
            .on('submit', e => this.onFormSubmit(e));
    }
}