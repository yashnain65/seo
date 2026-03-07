// Tab Switching Logic
function openTab(tabName) {
    let i;
    let x = document.getElementsByClassName("tab-content");
    let buttons = document.getElementsByClassName("tab-btn");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.remove("active");
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 1. Keyword Research Logic
function generateKeywords() {
    let input = document.getElementById('keywordInput').value;
    let resultDiv = document.getElementById('keywordResult');
    
    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a keyword.</p>";
        return;
    }

    let suggestions = [
        `${input} tutorial`,
        `${input} for beginners`,
        `best ${input} 2024`,
        `${input} review`,
        `how to use ${input}`,
        `${input} vs competition`,
        `free ${input} online`
    ];

    let html = "";
    suggestions.forEach(keyword => {
        html += `
            <div class="result-item">
                <span>${keyword}</span>
                <button class="copy-btn" onclick="copyText('${keyword}')">Copy</button>
            </div>
        `;
    });
    resultDiv.innerHTML = html;
}

// 2. Title Generator Logic
function generateTitles() {
    let input = document.getElementById('titleInput').value;
    let resultDiv = document.getElementById('titleResult');

    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a topic.</p>";
        return;
    }

    let titles = [
        `How to Master ${input} in 10 Minutes`,
        `The TRUTH About ${input} Nobody Tells You`,
        `Top 10 ${input} Tips You Need to Know`,
        `I Tried ${input} and This Happened...`,
        `Stop Doing ${input}! Do This Instead`
    ];

    let html = "";
    titles.forEach(title => {
        html += `
            <div class="result-item">
                <span>${title}</span>
                <button class="copy-btn" onclick="copyText('${title}')">Copy</button>
            </div>
        `;
    });
    resultDiv.innerHTML = html;
}

// 3. Tag Generator Logic
function generateTags() {
    let input = document.getElementById('tagInput').value;
    let resultDiv = document.getElementById('tagResult');

    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a keyword.</p>";
        return;
    }

    let tags = [
        input,
        `${input} tutorial`,
        `learn ${input}`,
        `${input} guide`,
        `best ${input}`,
        `${input} tips`,
        `viral ${input}`,
        `trending ${input}`
    ];

    let commaSeparated = tags.join(", ");
    
    resultDiv.innerHTML = `
        <div class="result-item">
            <span>${commaSeparated}</span>
            <button class="copy-btn" onclick="copyText('${commaSeparated}')">Copy All</button>
        </div>
    `;
}

// Copy to Clipboard Function
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
}

// script.js mein add karein
function generateDescriptions() {
    let input = document.getElementById('descInput').value;
    let resultDiv = document.getElementById('descResult');

    let descriptions = [
        `Learn about ${input} in this comprehensive guide!`,
        `In this video, we explore ${input} and its benefits.`,
        `Discover the secrets of ${input} with our expert tips.`,
        `Join us as we dive deep into ${input}.`,
        `Everything you need to know about ${input} is here!`
    ];

    let html = "";
    descriptions.forEach(desc => {
        html += `
            <div class="result-item">
                <span>${desc}</span>
                <button class="copy-btn" onclick="copyText('${desc}')">Copy</button>
            </div>
        `;
    });
    resultDiv.innerHTML = html;
}

// script.js mein add karein
function exportToCSV(data, filename) {
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(row => {
        csvContent += row + "\n";
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
}
// Tab Switching Logic (Updated)
function openTab(tabName) {
    let i;
    let x = document.getElementsByClassName("tab-content");
    let buttons = document.getElementsByClassName("tab-btn");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.remove("active");
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 1. Keyword Research Logic
function generateKeywords() {
    let input = document.getElementById('keywordInput').value;
    let resultDiv = document.getElementById('keywordResult');
    
    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a keyword.</p>";
        return;
    }

    let suggestions = [
        `${input} tutorial`,
        `${input} for beginners`,
        `best ${input} 2024`,
        `${input} review`,
        `how to use ${input}`,
        `${input} vs competition`,
        `free ${input} online`
    ];

    let html = "";
    suggestions.forEach(keyword => {
        html += `
            <div class="result-item">
                <span>${keyword}</span>
                <button class="copy-btn" onclick="copyText('${keyword}')">Copy</button>
            </div>
        `;
    });
    resultDiv.innerHTML = html;
}

// 2. Title Generator Logic
function generateTitles() {
    let input = document.getElementById('titleInput').value;
    let resultDiv = document.getElementById('titleResult');

    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a topic.</p>";
        return;
    }

    let titles = [
        `How to Master ${input} in 10 Minutes`,
        `The TRUTH About ${input} Nobody Tells You`,
        `Top 10 ${input} Tips You Need to Know`,
        `I Tried ${input} and This Happened...`,
        `Stop Doing ${input}! Do This Instead`
    ];

    let html = "";
    titles.forEach(title => {
        html += `
            <div class="result-item">
                <span>${title}</span>
                <button class="copy-btn" onclick="copyText('${title}')">Copy</button>
            </div>
        `;
    });
    resultDiv.innerHTML = html;
}

// 3. Tag Generator Logic
function generateTags() {
    let input = document.getElementById('tagInput').value;
    let resultDiv = document.getElementById('tagResult');

    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a keyword.</p>";
        return;
    }

    let tags = [
        input,
        `${input} tutorial`,
        `learn ${input}`,
        `${input} guide`,
        `best ${input}`,
        `${input} tips`,
        `viral ${input}`,
        `trending ${input}`
    ];

    let commaSeparated = tags.join(", ");
    
    resultDiv.innerHTML = `
        <div class="result-item">
            <span>${commaSeparated}</span>
            <button class="copy-btn" onclick="copyText('${commaSeparated}')">Copy All</button>
        </div>
    `;
}

// 4. Description Generator Logic (NEW)
function generateDescriptions() {
    let input = document.getElementById('descInput').value;
    let resultDiv = document.getElementById('descResult');

    if(input.trim() === "") {
        resultDiv.innerHTML = "<p>Please enter a topic.</p>";
        return;
    }

    let descriptions = [
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

    let html = "";
    descriptions.forEach((desc, index) => {
        html += `
            <div class="result-item">
                <span>${desc.substring(0, 100)}...</span>
                <button class="copy-btn" onclick="copyText('${desc.replace(/'/g, "\\'")}')">Copy</button>
            </div>
        `;
    });
    resultDiv.innerHTML = html;
}

// 5. Copy to Clipboard Function
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
}

// 6. Export to CSV Function (NEW)
function exportToCSV(data, filename) {
    let csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(row => {
        csvContent += row + "\n";
    });
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
}
// Dark Mode Toggle Function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    let isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    // Update icon
    let icon = document.querySelector('.dark-mode-toggle i');
    if (isDark) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

// Load Dark Mode Preference on Page Load
window.addEventListener('DOMContentLoaded', () => {
    let savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('.dark-mode-toggle i').textContent = '☀️';
    }
});
