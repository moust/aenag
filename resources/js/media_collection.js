const addButtonTemplate = document.createElement('template')
addButtonTemplate.innerHTML = `
<div id="add-button" class="w-full card card-compact bg-base-200 not-prose">
  <div class="card-body">
    <button
      type="button"
      class="w-full h-full align-middle content-center transition-all flex justify-center flex-wrap ease-out hover:text-accent hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"/></svg>
    </button>
  </div>
</div>
`

const cardTemplate = document.createElement('template')
cardTemplate.innerHTML = `
<div class="w-full card card-compact bg-base-200 not-prose">
  <figure id="url" class="w-full h-32 object-cover"></figure>
  <div class="card-body">
    <p id="description"></p>
  </div>
</div>
`

const dialogTemplate = document.createElement('template')
dialogTemplate.innerHTML = `
<dialog class="modal modal-bottom sm:modal-middle prose">
  <div class="modal-box">
    <h3 class="mt-0"></h3>
    <p></p>
    <form method="dialog" class="modal-backdrop">
      <div id="form-content" class="grid grid-cols-1 gap-y-5"></div>
      <div class="modal-action">
        <button type="button" class="btn" id="closeBtn">Close</button>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </div>
    </form>
  </div>
</dialog>
`

class MediaCollectionElement extends HTMLElement {
  static formAssociated = true
  static observedAttributes = ['type', 'name', 'title', 'description', 'value']

  #internals

  constructor() {
    super()
    this.#internals = this.attachInternals()
  }

  #onAdd = (event) => {
    // extract form data
    const formData = new FormData(event.target)

    // add new entry
    const entry = {}
    for (let [name, value] of formData.entries()) {
      entry[name] = value
    }
    this.values.push(entry)

    // build form data
    const value = new FormData()
    this.values.forEach((row, i) => {
      value.append(`${this.name}[${i}][url]`, row.url)
      value.append(`${this.name}[${i}][description]`, row.description)
    })
    // set form value with form data
    this.#internals.setFormValue(value, this.values)

    // add new entry to view
    this.addCard(formData.get('url'), formData.get('description'))
  }

  addCard = (url, description) => {
    const card = cardTemplate.content.cloneNode(true)

    if (this.type === 'video') {
      const img = document.createElement('div')
      img.classList.add(
        'max-w-none',
        'w-full',
        'h-full',
        'object-cover',
        'align-middle',
        'content-center',
        'flex',
        'justify-center',
        'flex-wrap'
      )
      img.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"
          />
        </svg>
      `
      card.querySelector('#url').appendChild(img)
    } else {
      const img = document.createElement('img')
      img.classList.add('max-w-none', 'w-full', 'h-full', 'object-cover')
      img.src = url
      card.querySelector('#url').appendChild(img)
    }

    card.querySelector('#description').innerText = description

    const addButton = this.querySelector('#add-button')
    this.insertBefore(card, addButton)
  }

  connectedCallback() {
    this.modelId = `modal_${this.name}`
    this.values = []

    this.classList.add('grid', 'grid-cols-4', 'gap-4')

    const form = this.querySelector('[slot="form"]')
    this.innerHTML = ''

    const dialog = dialogTemplate.content.cloneNode(true)
    dialog.querySelector('.modal').id = this.modelId
    dialog.querySelector('h3').innerText = this.title
    dialog.querySelector('p').innerText = this.description
    dialog.querySelector('#closeBtn').addEventListener('click', () => {
      document.querySelector(`#${this.modelId}`).close()
    })
    dialog.querySelector('#form-content').appendChild(form)

    this.form = dialog.querySelector('form')
    this.form.addEventListener('submit', this.#onAdd)

    document.body.appendChild(dialog)

    const addButtonNode = addButtonTemplate.content.cloneNode(true)
    const addButton = addButtonNode.querySelector('button')
    addButton.title = this.title
    addButton.addEventListener('click', () => {
      document.querySelector(`#${this.modelId}`).showModal()
    })
    this.appendChild(addButtonNode)
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

window.customElements.define('media-collection', MediaCollectionElement)
