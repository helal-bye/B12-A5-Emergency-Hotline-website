const timeData = [];
document.getElementById('emergency-number-container').addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.className.includes('heart-btn')){
        const heartCount = document.getElementById('heart-count').innerText;
        const heartTotal = Number(heartCount) + 1;
        document.getElementById('heart-count').innerText = heartTotal;
    }
    if(event.target.className.includes('call-btn')){
        const emergencyNumberBtn = event.target;
        const cardTitle = event.target.parentNode.parentNode.childNodes[3].innerText;
        const cardNumber = event.target.parentNode.parentNode.childNodes[7].innerText;
        alert("Calling "+cardTitle+" "+cardNumber);
        const coinCount = document.getElementById('coin-count').innerText;
        const coinTotal = coinCount - 20;
        document.getElementById('coin-count').innerText = coinTotal;
        if(coinTotal < 0){
            alert('You have not suficient balance, you must minimum 20 coin');
            return;
        }
        const data = {
            time : new Date().toLocaleTimeString(),
        }
        timeData.push(data);
        
        const callHistoryContainer = document.getElementById('call-history-container');
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="flex items-center justify-between p-4 bg-[#fafafa] mt-4 rounded-lg">
                        <div>
                            <h3 class="text-[#111111] font-bold md:text-2xl text-xl">${cardTitle}</h3>
                            <p class="text-[#5c5c5c] font-normal text-lg">${cardNumber}</p>
                        </div>
                        <p class="text-[#111111] font-normal text-lg">${data.time}</p>
                    </div>
        
        `
        callHistoryContainer.appendChild(div);
        

    }
    
})