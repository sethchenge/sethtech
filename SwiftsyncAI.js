// ===== SWIFTSYNCAI KNOWLEDGE BASE =====
const SWIFTSYNC_KNOWLEDGE = {
    company: {
        name: "Swiftsync",
        tagline: "Synchronizing technology with human ambition",
        founded: "2019",
        location: "Kenya",
        mission: "To democratize enterprise-grade IT solutions and build the infrastructure that powers ambition"
    },
    
    services: {
        "os_architecture": {
            name: "OS Architecture",
            description: "Seamless deployment of Windows, Linux (Ubuntu, Fedora, Kali), and dual-boot environments optimized for zero-latency performance",
            features: ["Kernel Optimization", "Driver Synchronization", "Custom Shell Configs"],
            keywords: ["windows", "linux", "ubuntu", "fedora", "kali", "dual-boot", "operating system", "os"]
        },
        "cybersecurity": {
            name: "Cybersecurity",
            description: "Proactive threat hunting and firewall architecture securing your digital perimeter against evolving cyber threats",
            features: ["Penetration Testing", "Malware Elimination", "Network Hardening"],
            keywords: ["security", "cyber", "firewall", "threat", "malware", "penetration", "hacking"]
        },
        "cloud_network": {
            name: "Cloud & Network",
            description: "Enterprise-grade network topology design and cloud integration services (AWS/Azure) for scalable growth",
            features: ["VPN Tunneling", "Server Configuration", "Cloud Migration"],
            keywords: ["cloud", "aws", "azure", "network", "vpn", "server", "migration"]
        },
        "data_recovery": {
            name: "Data Recovery",
            description: "Advanced forensic data retrieval from damaged drives and corrupted partitions. We recover what others can't",
            features: ["Partition Repair", "RAID Recovery", "Encrypted Backups"],
            keywords: ["data", "recovery", "backup", "partition", "raid", "forensic"]
        },
        "hardware_ops": {
            name: "Hardware Operations",
            description: "Precision hardware upgrades and component diagnostics from SSD migration to GPU optimization",
            features: ["Component Logic", "Thermal Management", "System Overclocking"],
            keywords: ["hardware", "upgrade", "ssd", "gpu", "thermal", "overclock"]
        },
        "support": {
            name: "24/7 Intel Support",
            description: "Round-the-clock technical troubleshooting with remote and on-site assistance for critical system failures",
            features: ["Remote Debugging", "Live Diagnostics", "Priority Response"],
            keywords: ["support", "help", "troubleshoot", "remote", "assistance", "24/7"]
        }
    },
    
    team: {
        ceo: {
            name: "Seth Chenge",
            role: "Founder & CEO",
            expertise: ["CISCO Certified", "AWS Certified", "Linux Expert"],
            bio: "Founded Swiftsync in 2019 with a vision to democratize enterprise-grade IT solutions. Transformed technical challenges into seamless solutions during the digital shift of 2020."
        },
        members: [
            {
                name: "Purity Kyalo",
                role: "Security Lead",
                expertise: ["Ethical Hacking", "Encryption", "Network Forensics"],
                description: "Cybersecurity architect specializing in threat elimination and zero-trust networks"
            },
            {
                name: "Webster Onsando",
                role: "Cloud Architect",
                expertise: ["AWS Certified", "DevOps", "Big Data"],
                description: "Cloud infrastructure engineer focused on scalability and AWS/Azure integration"
            }
        ]
    },
    
    process: [
        { step: "Diagnostic", description: "Deep system scan and requirement analysis" },
        { step: "Strategy", description: "Architecting the optimal solution path" },
        { step: "Execution", description: "Precision deployment of software/hardware" },
        { step: "Sync", description: "Final optimization and performance testing" }
    ],
    
    technologies: ["Linux", "Windows", "Ubuntu", "Kali", "Android", "AWS", "Docker", "Cisco", "Python", "Git"],
    
    values: [
        { name: "Precision", description: "We don't guess. We engineer solutions with mathematical accuracy" },
        { name: "Continuity", description: "Systems designed for uptime. Support that never sleeps" },
        { name: "Velocity", description: "Rapid deployment and optimization for high-speed workflows" }
    ],
    
    stats: {
        experience: "15+ years",
        projects: "500+ deployed",
        uptime: "100% record"
    }
};

// ===== AI RESPONSE GENERATOR =====
class SwiftsyncAI {
    constructor() {
        this.knowledge = SWIFTSYNC_KNOWLEDGE;
    }
    
    generateResponse(userQuery) {
        const query = userQuery.toLowerCase();
        
        // Greetings
        if (this.matchesPattern(query, ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"])) {
            return "Hello! I'm SwiftsyncAI, your intelligent IT consultation assistant. I can help you learn about our services, team, technologies, or answer any questions about Swiftsync. What would you like to know?";
        }
        
        // Services Overview
        if (this.matchesPattern(query, ["services", "what do you offer", "what can you do", "capabilities"])) {
            return `Swiftsync offers six core services:\n\n🔧 **OS Architecture** - Windows, Linux deployment & optimization\n🛡️ **Cybersecurity** - Threat hunting & network hardening\n☁️ **Cloud & Network** - AWS/Azure integration & VPN solutions\n💾 **Data Recovery** - Forensic retrieval & RAID recovery\n⚙️ **Hardware Operations** - Precision upgrades & diagnostics\n🎯 **24/7 Intel Support** - Round-the-clock technical assistance\n\nWhich service interests you most?`;
        }
        
        // Specific Service Queries
        for (const [key, service] of Object.entries(this.knowledge.services)) {
            if (this.matchesPattern(query, service.keywords)) {
                return `**${service.name}**\n\n${service.description}\n\n✓ ${service.features.join("\n✓ ")}\n\nWould you like to know more about this service or get a quote?`;
            }
        }
        
        // Team Questions
        if (this.matchesPattern(query, ["team", "staff", "who", "people", "members", "employees"])) {
            let response = "**Meet the Swiftsync Team:**\n\n";
            response += `👔 **${this.knowledge.team.ceo.name}** - ${this.knowledge.team.ceo.role}\n`;
            response += `${this.knowledge.team.ceo.bio}\n\n`;
            this.knowledge.team.members.forEach(member => {
                response += `👤 **${member.name}** - ${member.role}\n${member.description}\n\n`;
            });
            return response + "Our team has 15+ years of combined experience and has deployed 500+ projects with a 100% uptime record.";
        }
        
        // CEO/Founder Questions
        if (this.matchesPattern(query, ["seth", "ceo", "founder", "owner"])) {
            const ceo = this.knowledge.team.ceo;
            return `**${ceo.name}** - ${ceo.role}\n\n${ceo.bio}\n\n**Certifications:**\n• ${ceo.expertise.join("\n• ")}\n\nSeth founded Swiftsync in 2019 and has led the company through significant milestones including CISCO & AWS certifications in 2021 and team expansion in 2024.`;
        }
        
        // Process Questions
        if (this.matchesPattern(query, ["process", "how do you work", "workflow", "methodology", "approach"])) {
            let response = "**The Swiftsync Protocol:**\n\n";
            this.knowledge.process.forEach((phase, index) => {
                response += `${index + 1}. **${phase.step}** - ${phase.description}\n`;
            });
            return response + "\nThis systematic approach ensures precision deployment and optimal performance for every project.";
        }
        
        // Technology Stack
        if (this.matchesPattern(query, ["technology", "tech", "stack", "tools", "platforms"])) {
            return `**Technology Arsenal:**\n\n${this.knowledge.technologies.join(" • ")}\n\nWe work with industry-leading technologies to deliver enterprise-grade solutions. From Linux systems to cloud platforms like AWS, we've mastered the tools that power modern infrastructure.`;
        }
        
        // Pricing/Quote
        if (this.matchesPattern(query, ["price", "cost", "quote", "how much", "pricing"])) {
            return "Our pricing is customized based on your specific needs and project scope. Each solution is tailored to deliver maximum value.\n\nTo get an accurate quote:\n1. Visit our Contact page\n2. Describe your requirements\n3. Our team will provide a detailed proposal within 24 hours\n\nWould you like me to guide you to the contact form?";
        }
        
        // Getting Started
        if (this.matchesPattern(query, ["start", "begin", "get started", "hire", "work with you"])) {
            return "**Getting Started with Swiftsync:**\n\n1. 📋 **Initial Consultation** - Tell us your requirements\n2. 🔍 **System Diagnostic** - We analyze your current setup\n3. 📊 **Strategy Proposal** - Custom solution architecture\n4. 🚀 **Deployment** - Precision implementation\n\nReady to upgrade your infrastructure? Click 'Get Quote' in the navigation or visit our Contact page to initiate your project!";
        }
        
        // Contact Information
        if (this.matchesPattern(query, ["contact", "reach", "email", "phone", "location"])) {
            return "**Contact Swiftsync:**\n\n📍 Location: Kenya\n🌐 Operating globally with remote and on-site support\n\nVisit our Contact page to:\n• Send us a message\n• Request a consultation\n• Get a custom quote\n\nWe typically respond within 24 hours and offer 24/7 support for urgent issues.";
        }
        
        // Company Info
        if (this.matchesPattern(query, ["about", "company", "swiftsync", "who are you", "background"])) {
            return `**About Swiftsync**\n\n${this.knowledge.company.tagline}\n\nFounded in ${this.knowledge.company.founded} and based in ${this.knowledge.company.location}, Swiftsync provides world-class IT solutions globally.\n\n**Our Mission:** ${this.knowledge.company.mission}\n\n**Key Stats:**\n• ${this.knowledge.stats.experience} of experience\n• ${this.knowledge.stats.projects}\n• ${this.knowledge.stats.uptime}\n\nWe've evolved from a solo operation to a powerhouse team of certified engineers and security specialists.`;
        }
        
        // Thanks
        if (this.matchesPattern(query, ["thank", "thanks", "appreciate"])) {
            return "You're welcome! I'm here anytime you need assistance with IT solutions. Feel free to explore our services or reach out if you have more questions. Ready to synchronize with the future? 🚀";
        }
        
        // Default response for unmatched queries
        return "I'm here to help you learn about Swiftsync's services, team, and capabilities. You can ask me about:\n\n• Our six core services\n• The Swiftsync team\n• Our process and methodology\n• Technology stack\n• Getting started or pricing\n\nWhat would you like to know?";
    }
    
    matchesPattern(query, keywords) {
        return keywords.some(keyword => query.includes(keyword.toLowerCase()));
    }
}

// ===== CHAT INTERFACE LOGIC =====
class ChatInterface {
    constructor() {
        this.ai = new SwiftsyncAI();
        this.chatContainer = document.getElementById('chatContainer');
        this.userInput = document.getElementById('userInput');
        this.chatForm = document.getElementById('chatForm');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.floatButton = document.getElementById('swiftsyncAI-button');
        this.chatWindow = document.getElementById('swiftsyncAI-window');
        this.closeBtn = document.getElementById('closeBtn');
        this.minimizeBtn = document.getElementById('minimizeBtn');
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Float button toggle
        this.floatButton.addEventListener('click', () => this.toggleChat());
        
        // Close button
        this.closeBtn.addEventListener('click', () => this.closeChat());
        
        // Minimize button
        this.minimizeBtn.addEventListener('click', () => this.minimizeChat());
        
        // Form submission
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserMessage();
        });
        
        // Quick action buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-btn') || e.target.closest('.quick-btn')) {
                const btn = e.target.classList.contains('quick-btn') ? e.target : e.target.closest('.quick-btn');
                const query = btn.dataset.query;
                this.sendMessage(query);
            }
        });
    }
    
    toggleChat() {
        this.chatWindow.classList.toggle('active');
        if (this.chatWindow.classList.contains('active')) {
            this.chatWindow.classList.remove('minimized');
            this.userInput.focus();
        }
    }
    
    closeChat() {
        this.chatWindow.classList.remove('active');
    }
    
    minimizeChat() {
        this.chatWindow.classList.toggle('minimized');
    }
    
    handleUserMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;
        
        this.sendMessage(message);
        this.userInput.value = '';
    }
    
    sendMessage(message) {
        // Remove welcome message if present
        const welcomeMsg = this.chatContainer.querySelector('.welcome-message');
        if (welcomeMsg) welcomeMsg.remove();
        
        // Add user message
        this.addMessage(message, 'user');
        
        // Show typing indicator
        this.showTyping();
        
        // Generate AI response with delay
        setTimeout(() => {
            const response = this.ai.generateResponse(message);
            this.hideTyping();
            this.addMessageWithTyping(response, 'ai');
        }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <span class="material-icons">${sender === 'ai' ? 'smart_toy' : 'person'}</span>
            </div>
            <div class="message-content">
                <div class="message-bubble">${this.formatMessage(text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        this.chatContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    addMessageWithTyping(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'message-bubble';
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <span class="material-icons">smart_toy</span>
            </div>
            <div class="message-content">
                <div class="message-bubble"></div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        this.chatContainer.appendChild(messageDiv);
        const bubble = messageDiv.querySelector('.message-bubble');
        
        // Typing animation
        let i = 0;
        const speed = 20; // ms per character
        const typeWriter = () => {
            if (i < text.length) {
                bubble.innerHTML = this.formatMessage(text.substring(0, i + 1));
                i++;
                this.scrollToBottom();
                setTimeout(typeWriter, speed);
            }
        };
        
        typeWriter();
    }
    
    formatMessage(text) {
        // Convert markdown-style formatting
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
        text = text.replace(/\n/g, '<br>'); // Line breaks
        return text;
    }
    
    showTyping() {
        this.typingIndicator.classList.add('active');
        this.scrollToBottom();
    }
    
    hideTyping() {
        this.typingIndicator.classList.remove('active');
    }
    
    scrollToBottom() {
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
    }
}

// ===== INITIALIZE ON DOM LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    new ChatInterface();
});