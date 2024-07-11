document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const aadhaar = document.getElementById('aadhaar').value;
        const password = document.getElementById('password').value;

        // Simple client-side authentication
        if (aadhaar === '123456789012' && password === 'password123') {
            document.getElementById('status').innerHTML = '<p>Login successful!</p>';
            showDashboard();
        } else {
            document.getElementById('status').innerHTML = '<p>Invalid Aadhaar number or password</p>';
        }
    });
});

function showDashboard() {
    document.body.innerHTML = `
        <div class="background">
            <img src="indian_flag.jpg" alt="Indian Flag" class="flag">
            <div class="container">
                <h1>Dashboard</h1>
                <div class="navbar">
                    <a href="#" onclick="showVote()">Cast Vote</a>
                    <a href="#" onclick="showDates()">Election Dates</a>
                    <a href="#" onclick="showStatus()">Election Status</a>
                    <a href="#" onclick="showResults()">Results</a>
                    <a href="#" onclick="logout()">Logout</a>
                </div>
                <div id="content"></div>
            </div>
        </div>
    `;
}

function showVote() {
    document.getElementById('content').innerHTML = '<p>Vote casting page coming soon!</p>';
}

function showDates() {
    document.getElementById('content').innerHTML = '<p>Election dates page coming soon!</p>';
}

function showStatus() {
    document.getElementById('content').innerHTML = '<p>Election status page coming soon!</p>';
}

function showResults() {
    document.getElementById('content').innerHTML = '<p>Election results page coming soon!</p>';
}

function logout() {
    document.body.innerHTML = `
        <div class="background">
            <img src="indian_flag.jpg" alt="Indian Flag" class="flag">
            <div class="container">
                <h1>Welcome to Online Election System</h1>
                <form id="loginForm">
                    <label for="aadhaar">Aadhaar Number:</label>
                    <input type="text" id="aadhaar" name="aadhaar" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Login</button>
                </form>
                <div id="status"></div>
            </div>
        </div>
    `;
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const aadhaar = document.getElementById('aadhaar').value;
            const password = document.getElementById('password').value;

            if (aadhaar === '123456789012' && password === 'password123') {
                document.getElementById('status').innerHTML = '<p>Login successful!</p>';
                showDashboard();
            } else {
                document.getElementById('status').innerHTML = '<p>Invalid Aadhaar number or password</p>';
            }
        });
    });
}
