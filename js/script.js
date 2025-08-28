const timeData = [];
document
  .getElementById("emergency-number-container")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.className.includes("heart-btn")) {
      const heartCount = document.getElementById("heart-count").innerText;
      const heartTotal = Number(heartCount) + 1;
      document.getElementById("heart-count").innerText = heartTotal;
    }
    if (event.target.className.includes("call-btn")) {
      const emergencyNumberBtn = event.target;
      const cardTitle =
        event.target.parentNode.parentNode.childNodes[3].innerText;
      const cardNumber =
        event.target.parentNode.parentNode.childNodes[7].innerText;
        const coinCount = document.getElementById("coin-count").innerText;
        const coinTotal = coinCount - 20;
        if (coinTotal < 0) {
          alert("You have not suficient balance, you must have minimum 20 coin");
          return;
        }
        alert("Calling " + cardTitle + " " + cardNumber);
      document.getElementById("coin-count").innerText = coinTotal;
      const data = {
        time: new Date().toLocaleTimeString(),
      };
      timeData.push(data);

      const callHistoryContainer = document.getElementById(
        "call-history-container"
      );
      const div = document.createElement("div");
      div.innerHTML = `
        
        <div class="flex items-center justify-between p-4 bg-[#fafafa] mt-4 rounded-lg">
                        <div>
                            <h3 class="text-[#111111] font-bold md:text-2xl text-xl">${cardTitle}</h3>
                            <p class="text-[#5c5c5c] font-normal text-lg">${cardNumber}</p>
                        </div>
                        <p class="text-[#111111] font-normal text-lg">${data.time}</p>
                    </div>
        
        `;
      callHistoryContainer.appendChild(div);
    }

    if (event.target.className.includes("copy-btn")) {
      const cardNumber =
        event.target.parentNode.parentNode.childNodes[7].innerText;

      const copyCount = document.getElementById("copy-count").innerText;
      const copyTotal = Number(copyCount) + 1;
      document.getElementById("copy-count").innerText = copyTotal;
      try {
        navigator.clipboard.writeText(cardNumber);
        alert("Content copied to clipboard " + cardNumber);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  });
document.getElementById('clear-btn').addEventListener('click', function(event){
    event.preventDefault();
    const callHistoryContainer = document.getElementById("call-history-container");
    callHistoryContainer.innerHTML = '';

})