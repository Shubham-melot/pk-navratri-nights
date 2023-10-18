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
const players = [
    "Hattie",
    "Winston",
    "Lena",
    "Jaxton",
    "Madilynn",
    "Emmanuel",
    "Alaya",
    "Donald",
    "Avalynn",
    "Khari",
    "Kora",
]
const scheduleData = []
for (let i = 0; i < players.length / 2; i++) {
    scheduleData.push({
        player1: players[i],
        player1Id: Math.floor(100000 + Math.random() * 900000),
        player2: players[i + 1],
        player2Id: Math.floor(200000 + Math.random() * 900000),
    })
}
const garbaScheduleTable = document.querySelector('.garba-container .table')
console.log(garbaScheduleTable)
const scheduleTableItemTemplate = document.querySelector('#table-desc')
scheduleData.forEach(schedule => {
    const scheduleTableItem = scheduleTableItemTemplate.content.cloneNode(true);
    const player1Name = scheduleTableItem.querySelector('.player-1-name')
    const player1ID = scheduleTableItem.querySelector('.player-1-id')
    const player2Name = scheduleTableItem.querySelector('.player-2-name')
    const player2ID = scheduleTableItem.querySelector('.player-2-id')

    player1Name.innerText = schedule.player1
    player1ID.innerText = "ID " + schedule.player1Id
    player2Name.innerText = schedule.player2
    player2ID.innerText = "ID " + schedule.player2Id
    
    garbaScheduleTable.appendChild(scheduleTableItem)
})