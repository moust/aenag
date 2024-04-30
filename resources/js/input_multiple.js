const addButtonTemplate = document.createElement('template')
addButtonTemplate.innerHTML = `
  <div class="label">
    <button type="button" class="btn btn-primary">
      Ajouter
    </button>
  </div>
`

class InputMultipleElement extends HTMLElement {
  static formAssociated = true
  static observedAttributes = ['value']

  #internals

  constructor() {
    super()
    this.#internals = this.attachInternals()

    this.values = []
    this.#internals.setFormValue(this.values, this.values)

    this.input = this.querySelector('input')
    this.input.name = `${this.input.name}[]`
    this.input.addEventListener('change', this.#updateValues)

    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('grid', 'gap-y-2')
    this.input.insertAdjacentElement('afterend', this.wrapper)
    this.wrapper.appendChild(this.input)
  }

  #updateValues = () => {
    this.values = []
    this.querySelectorAll('input').forEach((input) => {
      if (input.value) {
        this.values.push(input.value)
      }
    })
    // set form value with form data
    this.#internals.setFormValue(this.values, this.values)
  }

  #onAdd = (event) => {
    const newInput = this.input.cloneNode(true)
    newInput.value = ''

    const inputs = this.querySelectorAll('input')
    inputs[inputs.length - 1].insertAdjacentElement('afterend', newInput)
  }

  connectedCallback() {
    const addButtonNode = addButtonTemplate.content.cloneNode(true)
    const addButton = addButtonNode.querySelector('button')
    addButton.title = this.title
    addButton.addEventListener('click', this.#onAdd)
    this.wrapper.insertAdjacentElement('afterend', addButtonNode.querySelector('*'))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log('attributeChangedCallback', name, oldValue, newValue)
    if (oldValue === newValue) return
    this[name] = newValue
  }

  formStateRestoreCallback(state, reason) {
    // console.log('formStateRestoreCallback', state, reason)
  }
}

window.customElements.define('input-multiple', InputMultipleElement)
