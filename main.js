
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  const tabButtons = tab.querySelectorAll(":scope > .tab-header > button");
  const tabContents = tab.querySelectorAll(":scope > .tab-content");
  tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      // Toggle between tab buttons
      tabButtons.forEach((button) => button.classList.remove("active"));
      tabButton.classList.add("active");

      // Toggle between tab contents
      const tabLabel = tabButton.getAttribute("data-tab");
      const tabContent = tab.querySelector(
        `.tab-content[data-tab="${tabLabel}"]`
      );
      tabContents.forEach((content) => content.classList.remove("active"));
      tabContent.classList.add("active");
    });
  });
});

const modalButtons = document.querySelectorAll(".modal-btn");
modalButtons.forEach((modalButton) => {
  modalButton.addEventListener("click", (e) => {
    e.stopPropagation();

    function hideModal() {
      modal.close();
      document.body.removeEventListener("click", hideModal);
      document.body.style.overflow = "auto";
    }

    const modalName = modalButton.getAttribute("data-modal");
    const modal = document.querySelector(`dialog[data-modal="${modalName}"]`);
    modal.showModal();
    modal
      .querySelector(".modal-container")
      .addEventListener("click", (e) => e.stopPropagation());

    document.body.style.overflow = "hidden";
    document.body.addEventListener("click", hideModal);
  });
});

const generateRandomPlayerId = () => Math.floor(100000 + Math.random() * 900000)

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
];
const scheduleData = [];
for (let i = 0; i < players.length / 2; i++) {
  scheduleData.push({
    player1: players[i],
    player1Id: generateRandomPlayerId(),
    player2: players[i + 1],
    player2Id: generateRandomPlayerId(),
  });
}
const garbaScheduleTable = document.querySelector(".garba-container .table");
const scheduleTableItemTemplate = document.querySelector("#table-desc");
scheduleData.forEach((schedule) => {
  const scheduleTableItem = scheduleTableItemTemplate.content.cloneNode(true);
  const player1Name = scheduleTableItem.querySelector(".player-1-name");
  const player1ID = scheduleTableItem.querySelector(".player-1-id");
  const player2Name = scheduleTableItem.querySelector(".player-2-name");
  const player2ID = scheduleTableItem.querySelector(".player-2-id");

  player1Name.innerText = schedule.player1;
  player1ID.innerText = "ID " + schedule.player1Id;
  player2Name.innerText = schedule.player2;
  player2ID.innerText = "ID " + schedule.player2Id;

  garbaScheduleTable.appendChild(scheduleTableItem);
});

async function getWinnerData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
getWinnerData().then((winnerData) => {

    const toppers = document.querySelectorAll('.top')
    toppers.forEach((topper, i) => {
        const name = topper.querySelector('.name')
        const id = topper.querySelector('.id')
        const beans = topper.querySelector('.beans')

        name.innerHTML = winnerData[i].name.split(" ")[0]
        id.innerHTML = generateRandomPlayerId()
        beans.innerText = generateRandomPlayerId()
    })

  const winnerContainer = document.querySelector(".winner-container");
  const winnerStripTemplate = document.querySelector("#winner-strip");

  for (let i = 3; i < winnerData.length; i++) {
    const data = winnerData[i]
    const winnerStrip = winnerStripTemplate.content.cloneNode(true);
    const position = winnerStrip.querySelector('.position')
    position.innerHTML = data.id

    const name = winnerStrip.querySelector('.name')
    name.innerHTML = data.name.split(' ')[0]

    const id = winnerStrip.querySelector('.id')
    id.innerHTML = generateRandomPlayerId()

    const beans = winnerStrip.querySelector('.beans')
    beans.innerHTML = generateRandomPlayerId()
    winnerContainer.appendChild(winnerStrip)
  }
});

const slides = document.querySelectorAll('.slides')
slides.forEach(slide => {
    const sliderButtons = slide.querySelectorAll(':scope > .slider-buttons button')
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
            sliderButtons.forEach(b => b.classList.remove('active'))
            button.classList.add('active')
        })
    })
})