// ============================================
// USER AUTHENTICATION SYSTEM
// ============================================

// Check if user is logged in on page load
window.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    loadDarkMode();
});

// Show Login Modal
function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Show Signup Modal
function showSignup() {
    document.getElementById('signupModal').style.display = 'flex';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Login Function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email && password) {
        // Save user data to localStorage
        const userData = {
            email: email,
            name: email.split('@')[0],
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Close modal and update UI
        closeModal('loginModal');
        checkLoginStatus();
        alert('Login Successful! Welcome back!');
    } else {
        alert('Please enter email and password');
    }
}

// Signup Function
function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        // Save user data to localStorage
        const userData = {
            email: email,
            name: name,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));
        
        // Close modal and update UI
        closeModal('signupModal');
        checkLoginStatus();
        alert('Account Created Successfully! Welcome!');
    } else {
        alert('Please fill all fields');
    }
}

// Check Login Status
function checkLoginStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const userProfile = document.getElementById('userProfile');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const userName = document.getElementById('userName');

    if (currentUser) {
        const user = JSON.parse(currentUser);
        userProfile.style.display = 'flex';
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        userName.textContent = user.name;
        updateDashboard();
    } else {
        userProfile.style.display = 'none';
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('currentUser');
    checkLoginStatus();
    alert('Logged out successfully!');
}

// Show Dashboard
function showDashboard() {
    const dashboard = document.getElementById('userDashboard');
    const toolsContent = document.getElementById('toolsContent');
    
    dashboard.style.display = 'block';
    toolsContent.style.display = 'none';
    updateDashboard();
    window.scrollTo(0, 0);
}

// Update Dashboard Stats
function updateDashboard() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        const toolsUsed = localStorage.getItem('toolsUsed') || 0;
        const savedResults = localStorage.getItem('savedResults') || 0;
        const memberSince = new Date(user.loginTime).toLocaleDateString();

        document.getElementById('toolsUsed').textContent = toolsUsed;
        document.getElementById('savedResults').textContent = savedResults;
        document.getElementById('memberSince').textContent = memberSince;
    }
}

// ============================================
// TOOL GENERATION FUNCTIONS
// ============================================

// Tab Switching
function openTab(tabName) {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please login to use tools!');
        showLogin();
        return;
    }

    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Scroll to tools section
    document.getElementById('toolsContent').scrollIntoView({ behavior: 'smooth' });
}

// Generate Keywords
function generateKeywords() {
    const input = document.getElementById('keywordInput').value;
    const resultDiv = document.getElementById('keywordResult');

    if (!input.trim()) {
        resultDiv.innerHTML = '<p style="color: #dc3545;">Please enter a keyword</p>';
        return;
    }

    const suggestions = [
        `${input} tutorial`,
        `${input} for beginners`,
        `best ${input} 2024`,
        `${input} review`,
        `how to use ${input}`,
        `${input} vs competition`,
        `free ${input} online`,
        `${input} tips and tricks`,
        `${input} explained`,
        `${input} guide`
    ];

    let html = '';
    suggestions.forEach(keyword => {
        html += `
            <div class="result-item">
                <span>${keyword}</span>
                <button class="copy-btn" onclick="copyText('${keyword}')">Copy</button>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
    saveToolUsage('keywords');
}

// Generate Titles
function generateTitles() {
    const input = document.getElementById('titleInput').value;
    const resultDiv = document.getElementById('titleResult');

    if (!input.trim()) {
        resultDiv.innerHTML = '<p style="color: #dc3545;">Please enter a topic</p>';
        return;
    }

    const titles = [
        `How to Master ${input} in 10 Minutes`,
        `The TRUTH About ${input} Nobody Tells You`,
        `Top 10 ${input} Tips You Need to Know`,
        `I Tried ${input} and This Happened...`,
        `Stop Doing ${input}! Do This Instead`,
        `${input} in 2024: Complete Guide`,
        `Why ${input} is Going Viral`,
        `${input} Secrets Revealed`,
        `The Ultimate ${input} Tutorial`,
        `${input} Mistakes to Avoid`
    ];

    let html = '';
    titles.forEach(title => {
        html += `
            <div class="result-item">
                <span>${title}</span>
                <button class="copy-btn" onclick="copyText('${title}')">Copy</button>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
    saveToolUsage('titles');
}

// Generate Tags
function generateTags() {
    const input = document.getElementById('tagInput').value;
    const resultDiv = document.getElementById('tagResult');

    if (!input.trim()) {
        resultDiv.innerHTML = '<p style="color: #dc3545;">Please enter a keyword</p>';
        return;
    }

    const tags = [
        input,
        `${input} tutorial`,
        `learn ${input}`,
        `${input} guide`,
        `best ${input}`,
        `${input} tips`,
        `viral ${input}`,
        `trending ${input}`,
        `${input} 2024`,
        `${input} review`
    ];

    const commaSeparated = tags.join(', ');

    let html = `
        <div class="result-item">
            <span>${commaSeparated}</span>
            <button class="copy-btn" onclick="copyText('${commaSeparated.replace(/'/g, "\\'")}')">Copy All</button>
        </div>
    `;

    resultDiv.innerHTML = html;
    saveToolUsage('tags');
}

// Generate Descriptions
function generateDescriptions() {
    const input = document.getElementById('descInput').value;
    const resultDiv = document.getElementById('descResult');

    if (!input.trim()) {
        resultDiv.innerHTML = '<p style="color: #dc3545;">Please enter a topic</p>';
        return;
    }

    const descriptions = [
        `🎬 Welcome to our channel! In this video, we explore ${input} and share valuable insights. Don't forget to LIKE, SUBSCRIBE, and hit the BELL icon for more content!

📌 TIMESTAMPS:
0:00 - Introduction
1:30 - Key Points
3:45 - Tips & Tricks
5:00 - Conclusion

🔗 RESOURCES:
[Add your links here]

📱 FOLLOW US:
Instagram: @yourhandle
Twitter: @yourhandle
Facebook: /yourpage

#${input.replace(/\s+/g, '')} #YouTube #Tutorial`,

        `🚀 In this comprehensive guide about ${input}, we cover everything you need to know!

📖 WHAT YOU'LL LEARN:
✅ Key concepts explained
✅ Practical examples
✅ Pro tips & tricks
✅ Common mistakes to avoid

👍 If you found this helpful, please:
- Subscribe for more
- Share with friends
- Leave a comment below

🔔 Turn on notifications to never miss a video!

#${input.replace(/\s+/g, '')} #Guide #Tips`,

        `💡 Discover the secrets of ${input} in this detailed tutorial!

🎯 KEY TAKEAWAYS:
- Understanding the basics
- Advanced techniques
- Real-world applications
- Expert recommendations

📞 CONTACT:
Email: your@email.com
Website: yourwebsite.com

📢 SUPPORT US:
Patreon: patreon.com/yourchannel
Buy Me a Coffee: buymeacoffee.com/yourchannel

#${input.replace(/\s+/g, '')} #HowTo #Education`
    ];

    let html = '';
    descriptions.forEach((desc, index) => {
        const preview = desc.substring(0, 100) + '...';
        html += `
            <div class="result-item">
                <span>${preview}</span>
                <button class="copy-btn" onclick="copyText('${desc.replace(/'/g, "\\'")}')">Copy</button>
            </div>
        `;
    });

    resultDiv.innerHTML = html;
    saveToolUsage('descriptions');
}

// Save Tool Usage
function saveToolUsage(toolName) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        let toolsUsed = parseInt(localStorage.getItem('toolsUsed') || '0');
        toolsUsed++;
        localStorage.setItem('toolsUsed', toolsUsed.toString());
        updateDashboard();
    }
}

// Copy to Clipboard
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ============================================
// DARK MODE TOGGLE
// ============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateDarkModeIcon();
}

function loadDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const icon = document.querySelector('.dark-mode-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// ============================================
// SAVE RESULT TO DASHBOARD
// ============================================

function saveResult(type, content) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        let savedResults = JSON.parse(localStorage.getItem('savedResults') || '[]');
        savedResults.push({
            type: type,
            content: content,
            date: new Date().toISOString()
        });
        localStorage.setItem('savedResults', JSON.stringify(savedResults));
        updateDashboard();
    }
}
