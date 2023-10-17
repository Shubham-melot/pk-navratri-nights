import './style.css'

const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => {
    const tabButtons = tab.querySelectorAll(':scope > .tab-header > button');
    const tabContents = tab.querySelectorAll(':scope > .tab-content');
    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', () => {
            // Toggle between tab buttons
            tabButtons.forEach(button => button.classList.remove('active'))
            tabButton.classList.add('active')

            // Toggle between tab contents
            const tabLabel = tabButton.getAttribute('data-tab')
            const tabContent = tab.querySelector(`.tab-content[data-tab="${tabLabel}"]`)
            tabContents.forEach(content => content.classList.remove('active'))
            tabContent.classList.add('active')
        })
    })
})

const modalButtons = document.querySelectorAll('.modal-btn')
modalButtons.forEach(modalButton => {
    modalButton.addEventListener('click', (e) => {
        e.stopPropagation()

        function hideModal() {
            modal.close()
            document.body.removeEventListener('click', hideModal)
            document.body.style.overflow = "auto"
        }

        const modalName = modalButton.getAttribute('data-modal')
        const modal = document.querySelector(`dialog[data-modal="${modalName}"]`)
        modal.showModal()
        modal.querySelector('.modal-container').addEventListener('click', e => e.stopPropagation())

        document.body.style.overflow = "hidden"
        document.body.addEventListener('click', hideModal)
    })
})
