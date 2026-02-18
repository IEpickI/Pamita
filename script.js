async function openTodayLetter() {
    const statusMsg = document.getElementById('status-message');
    //statusMsg.textContent = "Checking the mailbox... 💌";

    // 1. Get the current time in Mexico City
    const cdmxDateString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'America/Mexico_City',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date());

    // cdmxDateString will be in "DD/MM/YYYY" format because of 'en-GB'
    // 2. Remove the slashes to get "DDMMYYYY"
    const filename = "letters/" + cdmxDateString.replace(/\//g, '') + ".html";

    console.log("Looking for letter:", filename); // Debugging

    try {
        // 3. Smart Check
        const response = await fetch(filename, { method: 'HEAD' });
        
        if (response.ok) {
            window.location.href = filename;
        } else {
            statusMsg.textContent = "It's not quite time for today's letter in Mexico yet! ❤️";
        }
    } catch (error) {
        // Fallback for local testing
        window.location.href = filename;
    }
}

function createAxolotl() {
    const axolotl = document.createElement("img");
	axolotl.src = 'storage/images/axolotl.png'
	axolotl.className = "axolotl";
	
	const size = Math.random() * 40 + 40;
    axolotl.style.width = `${size}px`;
	axolotl.style.height = `${size*0.7}px`;
	const startX = Math.random() * window.innerWidth;
	axolotl.style.left = `${startX}px`;
	axolotl.dx = (Math.random() - 0.25) * 2; // -1 to 1 speed
    axolotl.dy = (Math.random() - 0.25) * 2; // -1 to 1 speed
	  
    axolotl.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(axolotl);
    setTimeout(() => axolotl.remove(), 8000);
	  
    }

setInterval(createAxolotl, 650);