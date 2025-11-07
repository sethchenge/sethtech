// SethAI JavaScript
(function() {
    'use strict';

    // Knowledge Base
    const knowledgeBase = {
        services: {
            keywords: ['service', 'services', 'offer', 'provide', 'do', 'help', 'install', 'fix', 'repair'],
            response: `<p>We offer comprehensive IT services including:</p>
                <ul>
                    <li><strong>Operating System Installation:</strong> Professional installation of Windows, Linux, Ubuntu, and other OS with driver setup and optimization</li>
                    <li><strong>Troubleshooting & Repairs:</strong> Fast diagnosis and resolution of hardware and software issues, including BSOD errors, boot problems, and virus removal</li>
                    <li><strong>Technical Support & Maintenance:</strong> 24/7 remote and on-site support, regular updates, and system monitoring</li>
                    <li><strong>Network Setup & Configuration:</strong> Wireless network setup, router configuration, VPN setup, and network security</li>
                    <li><strong>Data Recovery & Backup:</strong> Hard drive recovery, automated backup setup, cloud backup, and disaster recovery planning</li>
                    <li><strong>Hardware Upgrades:</strong> RAM upgrades, SSD installation, graphics card upgrades, and performance optimization</li>
                </ul>
                <p>Would you like to know more about any specific service?</p>`
        },
        
        team: {
            keywords: ['team', 'staff', 'employees', 'people', 'members'],
            response: `<p>Meet our expert team at SethChenge IT Services:</p>
                <p><strong>Seth Chenge - Founder & CEO</strong><br>
                Seth is the visionary founder who started SethChenge in 2019. He holds certifications from CISCO, AWS, and Microsoft Azure. Under his leadership, we've completed over 1000 projects and built a reputation for excellence in IT solutions.</p>
                
                <p><strong>Purity Kyalo - Senior Cybersecurity Specialist</strong><br>
                With 5+ years of cybersecurity expertise, Purity specializes in threat assessment, penetration testing, and security architecture. She's certified as an Ethical Hacker (CEH) and has secured over 200 enterprise networks.</p>
                
                <p><strong>Webster Onsando - Cloud Solutions Architect</strong><br>
                Webster brings 6+ years of experience in cloud infrastructure design. He's AWS and Azure certified and has successfully migrated 150+ systems to the cloud, reducing infrastructure costs by 40%.</p>
                
                <p>Our combined 15+ years of experience ensure you receive top-tier IT solutions!</p>`
        },
        
        seth_chenge: {
            keywords: ['seth chenge', 'founder', 'ceo', 'who is seth', 'about seth'],
            response: `<p><strong>🌟 Seth Chenge - Founder & CEO of SethChenge IT Services</strong></p>
                <p>Seth Chenge is a visionary IT entrepreneur and the driving force behind SethChenge IT Services. His journey in technology is marked by dedication, innovation, and a passion for solving complex technical challenges.</p>
                
                <p><strong>Professional Background:</strong></p>
                <ul>
                    <li>🎓 <strong>Certifications:</strong> CISCO Certified, AWS Expert, Microsoft Azure Certified</li>
                    <li>💼 <strong>Experience:</strong> 5+ years in IT services and solutions</li>
                    <li>🚀 <strong>Founder:</strong> Established SethChenge IT Services in 2019</li>
                    <li>📊 <strong>Achievement:</strong> Successfully completed over 1000 projects</li>
                    <li>👥 <strong>Leadership:</strong> Built a team of expert IT professionals</li>
                </ul>
                
                <p><strong>The Journey:</strong><br>
                Starting as a solo entrepreneur with just a laptop and unwavering determination, Seth faced numerous challenges in the competitive IT landscape. His breakthrough came in 2020 during the pandemic when he helped businesses rapidly transition to remote work and cloud solutions. Today, SethChenge IT Services has served 500+ happy clients and continues to grow.</p>
                
                <p><strong>Vision & Mission:</strong><br>
                Seth's mission is to democratize IT solutions for businesses of all sizes, making enterprise-level technology accessible and affordable. He believes that every organization deserves reliable, professional IT support to thrive in the digital age.</p>
                
                <p><strong>Contact Seth:</strong><br>
                📞 Phone: +254 721 156 350<br>
                📧 Email: chengeseth25@gmail.com<br>
                📍 Location: Nairobi, Kenya</p>`
        },
        
        company: {
            keywords: ['history', 'story', 'founded', 'started', 'about', 'company', 'background', 'sethchenge'],
            response: `<p><strong>The SethChenge Story</strong></p>
                <p>Founded in 2019 by Seth Chenge, our company emerged from a vision to bridge the gap between complex IT solutions and business needs. What started as a solo entrepreneur with just a laptop and determination has grown into a trusted IT solutions provider.</p>
                
                <p><strong>Key Milestones:</strong></p>
                <ul>
                    <li><strong>2019 - The Beginning:</strong> Founded with a mission to democratize IT solutions for businesses of all sizes</li>
                    <li><strong>2020 - Breakthrough:</strong> Successfully pivoted during the pandemic to help businesses transition to remote work and cloud solutions</li>
                    <li><strong>2021 - Certifications:</strong> Earned multiple industry certifications including CISCO, AWS, and Microsoft Azure</li>
                    <li><strong>2024 - Team Growth:</strong> Expanded our team to include specialized experts in cybersecurity and cloud architecture</li>
                </ul>
                
                <p>Today, we've completed over 1000 projects and served 500+ happy clients across various industries.</p>`
        },
        
        contact: {
            keywords: ['contact', 'reach', 'call', 'email', 'phone', 'address', 'location', 'touch'],
            response: `<p><strong>Get in Touch with Us!</strong></p>
                <p>We're here to help you with all your IT needs. Here's how you can reach us:</p>
                <ul>
                    <li><strong>Phone:</strong> +254 721 156 350</li>
                    <li><strong>Email:</strong> chengeseth25@gmail.com</li>
                    <li><strong>Location:</strong> Nairobi, Kenya</li>
                    <li><strong>Availability:</strong> 24/7 Support Available</li>
                </ul>
                <p>You can also visit our Contact page to send us a message directly. We typically respond within 24 hours!</p>`
        },
        
        pricing: {
            keywords: ['price', 'cost', 'pricing', 'rate', 'charge', 'fee', 'affordable', 'cheap', 'expensive'],
            response: `<p><strong>Transparent Pricing</strong></p>
                <p>We offer competitive and affordable pricing for all our services. Our rates vary depending on the specific service and complexity of the work required.</p>
                <p><strong>Why Choose Our Pricing:</strong></p>
                <ul>
                    <li>No hidden fees - transparent pricing structure</li>
                    <li>Competitive rates without compromising quality</li>
                    <li>Free initial consultation and quote</li>
                    <li>Flexible payment options available</li>
                </ul>
                <p>For a detailed quote tailored to your specific needs, please contact us at +254 721 156 350 or chengeseth25@gmail.com</p>`
        },
        
        os_installation: {
            keywords: ['windows', 'linux', 'ubuntu', 'install', 'installation', 'operating system', 'os'],
            response: `<p><strong>Operating System Installation Services</strong></p>
                <p>We provide expert OS installation services including:</p>
                <ul>
                    <li><strong>Windows Installation:</strong> Windows 10, Windows 11, with all drivers and updates</li>
                    <li><strong>Linux Distributions:</strong> Ubuntu, Fedora, Debian, Linux Mint, and more</li>
                    <li><strong>Dual Boot Setup:</strong> Run multiple operating systems on one computer</li>
                    <li><strong>Driver Installation:</strong> All necessary drivers for optimal performance</li>
                    <li><strong>System Optimization:</strong> Performance tuning and configuration</li>
                    <li><strong>Data Migration:</strong> Safe transfer of your files and settings</li>
                </ul>
                <p>We ensure a smooth installation process with minimal downtime!</p>`
        },
        
        troubleshooting: {
            keywords: ['problem', 'issue', 'error', 'bug', 'crash', 'slow', 'freeze', 'troubleshoot', 'fix', 'broken'],
            response: `<p><strong>Troubleshooting & Repair Services</strong></p>
                <p>We diagnose and fix various computer issues including:</p>
                <ul>
                    <li><strong>System Performance Issues:</strong> Slow computers, freezing, and lag</li>
                    <li><strong>Blue Screen Errors (BSOD):</strong> Quick diagnosis and resolution</li>
                    <li><strong>Boot Problems:</strong> Computer won't start or boot issues</li>
                    <li><strong>Virus & Malware Removal:</strong> Complete system cleaning and protection</li>
                    <li><strong>Hardware Diagnostics:</strong> Testing and repair of faulty components</li>
                    <li><strong>Software Conflicts:</strong> Resolving application compatibility issues</li>
                </ul>
                <p>We offer fast turnaround times and get your system back to optimal performance!</p>`
        },
        
        security: {
            keywords: ['security', 'cybersecurity', 'virus', 'malware', 'hack', 'protection', 'antivirus', 'firewall'],
            response: `<p><strong>Cybersecurity Services</strong></p>
                <p>Our Senior Cybersecurity Specialist, Purity Kyalo, provides:</p>
                <ul>
                    <li><strong>Network Security:</strong> Firewall configuration and management</li>
                    <li><strong>Vulnerability Assessment:</strong> Identifying security weaknesses</li>
                    <li><strong>Penetration Testing:</strong> Ethical hacking to test your defenses</li>
                    <li><strong>Incident Response:</strong> Quick action on security breaches</li>
                    <li><strong>Digital Forensics:</strong> Investigation and recovery</li>
                    <li><strong>Security Training:</strong> Educating your team on best practices</li>
                </ul>
                <p>We've secured over 200 enterprise networks and reduced security incidents by 90%!</p>`
        },
        
        cloud: {
            keywords: ['cloud', 'aws', 'azure', 'google cloud', 'cloud computing', 'migration', 'hosting'],
            response: `<p><strong>Cloud Solutions</strong></p>
                <p>Our Cloud Solutions Architect, Webster Onsando, specializes in:</p>
                <ul>
                    <li><strong>Cloud Architecture:</strong> AWS and Azure infrastructure design</li>
                    <li><strong>Cloud Migration:</strong> Seamless transition to cloud platforms</li>
                    <li><strong>DevOps & CI/CD:</strong> Automated deployment pipelines</li>
                    <li><strong>Database Management:</strong> Optimization and scaling</li>
                    <li><strong>Cost Optimization:</strong> Reducing infrastructure expenses</li>
                    <li><strong>24/7 Monitoring:</strong> Ensuring optimal performance</li>
                </ul>
                <p>We've migrated 150+ systems to the cloud and reduced costs by 40%!</p>`
        },
        
        support: {
            keywords: ['support', 'help', 'assistance', 'maintenance', 'hours', 'available', '24/7'],
            response: `<p><strong>Technical Support & Maintenance</strong></p>
                <p>We provide comprehensive ongoing support:</p>
                <ul>
                    <li><strong>24/7 Availability:</strong> Round-the-clock support when you need it</li>
                    <li><strong>Remote Support:</strong> Quick assistance via remote desktop</li>
                    <li><strong>On-site Support:</strong> We come to you when needed</li>
                    <li><strong>Regular Updates:</strong> Keeping your systems current</li>
                    <li><strong>Performance Monitoring:</strong> Proactive issue detection</li>
                    <li><strong>User Training:</strong> Helping your team use technology effectively</li>
                </ul>
                <p>Our goal is to keep your systems running smoothly with minimal downtime!</p>`
        },
        
        network: {
            keywords: ['network', 'wifi', 'router', 'internet', 'connection', 'networking'],
            response: `<p><strong>Network Setup & Configuration</strong></p>
                <p>We provide complete networking solutions:</p>
                <ul>
                    <li><strong>Wireless Network Setup:</strong> WiFi configuration and optimization</li>
                    <li><strong>Router Configuration:</strong> Proper setup for optimal performance</li>
                    <li><strong>Network Security:</strong> Protecting your network from threats</li>
                    <li><strong>File Sharing:</strong> Setting up shared resources</li>
                    <li><strong>VPN Setup:</strong> Secure remote access solutions</li>
                    <li><strong>Network Troubleshooting:</strong> Resolving connectivity issues</li>
                </ul>
                <p>We ensure reliable and secure connectivity for your home or business!</p>`
        },
        
        data_recovery: {
            keywords: ['data', 'recovery', 'backup', 'lost', 'deleted', 'restore'],
            response: `<p><strong>Data Recovery & Backup Solutions</strong></p>
                <p>Protect and recover your valuable data:</p>
                <ul>
                    <li><strong>Hard Drive Recovery:</strong> Retrieving data from failed drives</li>
                    <li><strong>Deleted File Recovery:</strong> Recovering accidentally deleted files</li>
                    <li><strong>Automated Backups:</strong> Setting up regular backup schedules</li>
                    <li><strong>Cloud Backup:</strong> Secure off-site data storage</li>
                    <li><strong>Disaster Recovery:</strong> Planning for worst-case scenarios</li>
                    <li><strong>Data Migration:</strong> Safe transfer between systems</li>
                </ul>
                <p>Don't risk losing your important data - let us protect it!</p>`
        },
        
        hardware: {
            keywords: ['hardware', 'upgrade', 'ram', 'ssd', 'graphics', 'component'],
            response: `<p><strong>Hardware Upgrades & Installation</strong></p>
                <p>Boost your system's performance with:</p>
                <ul>
                    <li><strong>RAM Upgrades:</strong> Increase memory for better multitasking</li>
                    <li><strong>SSD Installation:</strong> Dramatically improve boot and load times</li>
                    <li><strong>Graphics Card Upgrades:</strong> Enhanced gaming and visual performance</li>
                    <li><strong>Compatibility Check:</strong> Ensuring components work together</li>
                    <li><strong>Professional Installation:</strong> Expert component installation</li>
                    <li><strong>Performance Testing:</strong> Verifying optimal operation</li>
                </ul>
                <p>We'll help you get the most out of your hardware investment!</p>`
        }
    };

    // General knowledge definitions
    const generalKnowledge = {
        'os installation': 'OS Installation (Operating System Installation) is the process of installing an operating system like Windows, Linux, or macOS on a computer. It involves formatting the hard drive, copying system files, installing drivers, and configuring the system for optimal performance.',
        
        'operating system': 'An Operating System (OS) is the main software that manages computer hardware and software resources. It acts as an intermediary between users and computer hardware. Common examples include Windows, macOS, Linux, Android, and iOS.',
        
        'troubleshooting': 'Troubleshooting is the systematic process of diagnosing and solving problems in a computer system or network. It involves identifying the issue, finding the root cause, and implementing solutions to fix the problem.',
        
        'cybersecurity': 'Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It includes measures like firewalls, encryption, antivirus software, and security protocols.',
        
        'cloud computing': 'Cloud computing is the delivery of computing services (servers, storage, databases, networking, software) over the internet. It allows users to access resources on-demand without managing physical infrastructure. Examples include AWS, Azure, and Google Cloud.',
        
        'network': 'A network is a group of interconnected computers and devices that can communicate and share resources. Networks can be local (LAN), wide area (WAN), or global (Internet).',
        
        'firewall': 'A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between trusted and untrusted networks.',
        
        'vpn': 'VPN (Virtual Private Network) is a technology that creates a secure, encrypted connection over a less secure network like the internet. It protects your privacy and allows secure remote access to networks.',
        
        'backup': 'A backup is a copy of data stored separately from the original to protect against data loss. Regular backups are essential for disaster recovery and protecting against hardware failures, viruses, or accidental deletion.',
        
        'malware': 'Malware (Malicious Software) is any software intentionally designed to cause damage to a computer, server, or network. Types include viruses, trojans, ransomware, spyware, and worms.',
        
        'ram': 'RAM (Random Access Memory) is a type of computer memory that temporarily stores data and programs currently being used by the processor. More RAM allows better multitasking and faster performance.',
        
        'ssd': 'SSD (Solid State Drive) is a storage device that uses flash memory to store data. SSDs are much faster than traditional hard drives, resulting in quicker boot times and faster file access.',
        
        'cpu': 'CPU (Central Processing Unit) is the primary component of a computer that performs most of the processing. Often called the "brain" of the computer, it executes instructions from programs.',
        
        'gpu': 'GPU (Graphics Processing Unit) is a specialized processor designed to handle graphics and visual computing. Modern GPUs are also used for machine learning and complex calculations.',
        
        'bandwidth': 'Bandwidth refers to the maximum data transfer rate of a network or internet connection. Higher bandwidth means faster data transmission and better performance for downloads, streaming, and online activities.',
        
        'encryption': 'Encryption is the process of converting data into a coded format to prevent unauthorized access. It\'s essential for protecting sensitive information during storage and transmission.',
        
        'ip address': 'An IP Address (Internet Protocol Address) is a unique numerical label assigned to each device connected to a network. It identifies the device and enables communication over the internet.',
        
        'router': 'A router is a networking device that forwards data packets between computer networks. It connects multiple devices to the internet and manages traffic between them.',
        
        'driver': 'A driver is software that allows the operating system to communicate with hardware devices like printers, graphics cards, or keyboards. Updated drivers ensure optimal device performance.',
        
        'bios': 'BIOS (Basic Input/Output System) is firmware that initializes hardware during the boot process and provides runtime services for operating systems. Modern systems use UEFI instead of traditional BIOS.'
    };

    // Math evaluation function
    function evaluateMath(expression) {
        try {
            // Remove spaces and validate
            const cleaned = expression.replace(/\s/g, '');
            
            // Only allow numbers and basic operators
            if (!/^[0-9+\-*/().\s]+$/.test(cleaned)) {
                return null;
            }
            
            // Evaluate the expression safely
            const result = Function('"use strict"; return (' + cleaned + ')')();
            
            if (isNaN(result) || !isFinite(result)) {
                return null;
            }
            
            return result;
        } catch (e) {
            return null;
        }
    }

    // Check if message is a math question
    function isMathQuestion(message) {
        const mathPatterns = [
            /what\s+is\s+([0-9+\-*/().\s]+)/i,
            /calculate\s+([0-9+\-*/().\s]+)/i,
            /solve\s+([0-9+\-*/().\s]+)/i,
            /^([0-9+\-*/().\s]+)=?\??$/,
            /([0-9+\-*/().\s]+)\s+equals?\s+what/i
        ];
        
        for (const pattern of mathPatterns) {
            const match = message.match(pattern);
            if (match) {
                const expression = match[1] || match[0];
                return expression.replace(/[=?]/g, '').trim();
            }
        }
        return null;
    }

    // AI Response Generator
    function generateResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Check for math questions
        const mathExpression = isMathQuestion(message);
        if (mathExpression) {
            const result = evaluateMath(mathExpression);
            if (result !== null) {
                return `<p><strong>Calculation Result:</strong></p>
                    <p>${mathExpression} = <strong>${result}</strong></p>
                    <p>Is there anything else you'd like me to calculate or help you with?</p>`;
            }
        }
        
        // Check for general knowledge definitions
        for (const [term, definition] of Object.entries(generalKnowledge)) {
            if (message.includes(term) && (message.includes('what') || message.includes('define') || message.includes('explain'))) {
                return `<p><strong>${term.charAt(0).toUpperCase() + term.slice(1)}:</strong></p>
                    <p>${definition}</p>
                    <p>Would you like to know more about this topic or our related services?</p>`;
            }
        }
        
        // Check each category in knowledge base
        for (const [category, data] of Object.entries(knowledgeBase)) {
            if (data.keywords.some(keyword => message.includes(keyword))) {
                return data.response;
            }
        }
        
        // Default response for unrecognized queries
        return `<p>I'm here to help you with information about Seth Chenge IT Services! I can answer questions about:</p>
            <ul>
                <li>Our services (OS installation, troubleshooting, support, etc.)</li>
                <li>Our team members and expertise</li>
                <li>Company history and background</li>
                <li>Contact information and pricing</li>
                <li>Specific services like security, cloud, networking</li>
                <li>General IT definitions and concepts</li>
                <li>Basic calculations</li>
            </ul>
            <p>Please feel free to ask me anything about these topics, or try one of the suggested questions below!</p>`;
    }

    // Type writer effect for bot messages
    function typeWriter(element, html, speed = 20) {
        return new Promise((resolve) => {
            // Create a temporary div to parse HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            let charIndex = 0;
            const text = tempDiv.innerText || tempDiv.textContent;
            element.innerHTML = '';
            
            // Create the structure based on original HTML
            const hasHTML = html.includes('<p>') || html.includes('<ul>') || html.includes('<strong>');
            
            if (hasHTML) {
                // For HTML content, type character by character but maintain structure
                let currentHTML = '';
                
                function typeNextChar() {
                    if (charIndex < text.length) {
                        currentHTML += text.charAt(charIndex);
                        
                        // Create temporary div with current text
                        const displayDiv = document.createElement('div');
                        displayDiv.innerHTML = html;
                        
                        // Replace text content progressively
                        const textNodes = getTextNodes(displayDiv);
                        let charCount = 0;
                        
                        for (let node of textNodes) {
                            const nodeLength = node.textContent.length;
                            if (charCount + nodeLength <= charIndex + 1) {
                                charCount += nodeLength;
                            } else {
                                node.textContent = node.textContent.substring(0, charIndex + 1 - charCount);
                                // Clear remaining text nodes
                                let next = textNodes[textNodes.indexOf(node) + 1];
                                while (next) {
                                    next.textContent = '';
                                    next = textNodes[textNodes.indexOf(next) + 1];
                                }
                                break;
                            }
                        }
                        
                        element.innerHTML = displayDiv.innerHTML;
                        charIndex++;
                        setTimeout(typeNextChar, speed);
                    } else {
                        resolve();
                    }
                }
                
                typeNextChar();
            } else {
                // For plain text
                function typeNextChar() {
                    if (charIndex < text.length) {
                        element.textContent += text.charAt(charIndex);
                        charIndex++;
                        setTimeout(typeNextChar, speed);
                    } else {
                        resolve();
                    }
                }
                
                typeNextChar();
            }
        });
    }

    // Helper function to get all text nodes
    function getTextNodes(node) {
        const textNodes = [];
        
        function traverse(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                if (node.textContent.trim() !== '') {
                    textNodes.push(node);
                }
            } else {
                for (let child of node.childNodes) {
                    traverse(child);
                }
            }
        }
        
        traverse(node);
        return textNodes;
    }

    // Initialize when DOM is loaded
    function init() {
        const button = document.getElementById('sethAI-button');
        const chat = document.getElementById('sethAI-chat');
        const closeBtn = document.getElementById('sethAI-close');
        const input = document.getElementById('sethAI-input');
        const sendBtn = document.getElementById('sethAI-send');
        const messagesContainer = document.getElementById('sethAI-messages');
        const suggestionsContainer = document.getElementById('sethAI-suggestions');

        if (!button || !chat) return;

        let isTyping = false;

        // Toggle chat window
        button.addEventListener('click', () => {
            chat.classList.toggle('sethAI-hidden');
            if (!chat.classList.contains('sethAI-hidden')) {
                input.focus();
            }
        });

        closeBtn.addEventListener('click', () => {
            chat.classList.add('sethAI-hidden');
        });

        // Handle message sending
        async function sendMessage() {
            const message = input.value.trim();
            if (!message || isTyping) return;

            // Add user message
            addMessage(message, 'user');
            input.value = '';

            // Disable input while typing
            input.disabled = true;
            sendBtn.disabled = true;

            // Show typing indicator
            showTypingIndicator();

            // Simulate AI thinking time
            await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
            
            hideTypingIndicator();
            
            const response = generateResponse(message);
            await addMessageWithTyping(response, 'bot');
            
            // Re-enable input
            input.disabled = false;
            sendBtn.disabled = false;
            input.focus();
        }

        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !isTyping) {
                sendMessage();
            }
        });

        // Handle suggestion clicks
        suggestionsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('sethAI-suggestion-btn') && !isTyping) {
                const suggestion = e.target.dataset.suggestion;
                input.value = suggestion;
                sendMessage();
            }
        });

        // Add message to chat (instant for user)
        function addMessage(content, type) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `sethAI-message sethAI-${type}`;
            
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'sethAI-message-avatar';
            avatarDiv.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'sethAI-message-content';
            contentDiv.innerHTML = `<p>${content}</p>`;
            
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(contentDiv);
            messagesContainer.appendChild(messageDiv);
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Add message with typing effect (for bot)
        async function addMessageWithTyping(content, type) {
            isTyping = true;
            
            const messageDiv = document.createElement('div');
            messageDiv.className = `sethAI-message sethAI-${type}`;
            
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'sethAI-message-avatar';
            avatarDiv.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'sethAI-message-content';
            
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(contentDiv);
            messagesContainer.appendChild(messageDiv);
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            // Type the message
            await typeWriter(contentDiv, content, 15);
            
            // Scroll to bottom after typing
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            isTyping = false;
        }

        // Typing indicator
        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'sethAI-message sethAI-bot';
            typingDiv.id = 'sethAI-typing-indicator';
            
            typingDiv.innerHTML = `
                <div class="sethAI-message-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="sethAI-message-content">
                    <div class="sethAI-typing">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            `;
            
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function hideTypingIndicator() {
            const indicator = document.getElementById('sethAI-typing-indicator');
            if (indicator) {
                indicator.remove();
            }
        }

        // Draggable button
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        button.addEventListener('mousedown', dragStart);
        button.addEventListener('touchstart', dragStart);
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchend', dragEnd);

        function dragStart(e) {
            if (e.type === 'touchstart') {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }

            if (e.target === button || button.contains(e.target)) {
                isDragging = true;
            }
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                
                if (e.type === 'touchmove') {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                } else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, button);
            }
        }

        function dragEnd(e) {
            if (isDragging) {
                initialX = currentX;
                initialY = currentY;
                isDragging = false;
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
// Draggable Button Functionality for SethAI (Hold 1+ seconds to Drag, Click to Open)
(function() {
    const button = document.getElementById('sethAI-button');
    if (!button) return;

    let isDragging = false;
    let dragEnabled = false;
    let holdTimer = null;
    let clickStartTime = 0;
    let startX = 0;
    let startY = 0;
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;
    let xOffset = 0;
    let yOffset = 0;
    let hasMoved = false;

    const HOLD_DURATION = 1000; // 1 second in milliseconds

    function handleStart(e) {
        clickStartTime = Date.now();
        hasMoved = false;
        dragEnabled = false;
        
        const touch = e.type === 'touchstart' ? e.touches[0] : e;
        startX = touch.clientX;
        startY = touch.clientY;
        
        const rect = button.getBoundingClientRect();
        initialX = touch.clientX - rect.left;
        initialY = touch.clientY - rect.top;

        // Start hold timer
        holdTimer = setTimeout(() => {
            if (!hasMoved) {
                dragEnabled = true;
                button.style.opacity = '0.7';
                button.style.transform = 'scale(1.05)';
            }
        }, HOLD_DURATION);
    }

    function handleMove(e) {
        const touch = e.type === 'touchmove' ? e.touches[0] : e;
        const moveX = Math.abs(touch.clientX - startX);
        const moveY = Math.abs(touch.clientY - startY);
        
        if (moveX > 5 || moveY > 5) {
            hasMoved = true;
        }

        if (dragEnabled && hasMoved) {
            e.preventDefault();
            isDragging = true;
            
            currentX = touch.clientX - initialX;
            currentY = touch.clientY - initialY;

            setPosition(currentX, currentY);
        }
    }

    function handleEnd(e) {
        clearTimeout(holdTimer);
        
        const holdTime = Date.now() - clickStartTime;
        
        // Reset visual feedback
        button.style.opacity = '1';
        button.style.transform = '';

        if (isDragging) {
            // Was dragging - save position
            xOffset = currentX;
            yOffset = currentY;
            constrainToViewport();
            e.preventDefault();
            e.stopPropagation();
        } else if (!hasMoved && holdTime < HOLD_DURATION) {
            // Quick click - allow normal click to fire
            // Do nothing, let click event handle it
        } else if (hasMoved && holdTime < HOLD_DURATION) {
            // Moved but didn't hold long enough - prevent click
            e.preventDefault();
            e.stopPropagation();
        }

        isDragging = false;
        dragEnabled = false;
    }

    function setPosition(xPos, yPos) {
        const rect = button.getBoundingClientRect();
        const buttonWidth = rect.width;
        const buttonHeight = rect.height;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        xPos = Math.max(0, Math.min(xPos, maxX));
        yPos = Math.max(0, Math.min(yPos, maxY));

        button.style.left = xPos + 'px';
        button.style.top = yPos + 'px';
        button.style.right = 'auto';
        
        currentX = xPos;
        currentY = yPos;
    }

    function constrainToViewport() {
        const rect = button.getBoundingClientRect();
        const buttonWidth = rect.width;
        const buttonHeight = rect.height;
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        xOffset = Math.max(0, Math.min(xOffset, maxX));
        yOffset = Math.max(0, Math.min(yOffset, maxY));

        button.style.left = xOffset + 'px';
        button.style.top = yOffset + 'px';
        button.style.right = 'auto';
    }

    // Mouse events
    button.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    // Touch events
    button.addEventListener('touchstart', handleStart, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);

    // Click handler
    button.addEventListener('click', (e) => {
        if (hasMoved || isDragging) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, true);

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (xOffset > 0 || yOffset > 0) {
                constrainToViewport();
            } else {
                initializePosition();
            }
        }, 250);
    });

    // Initialize position (right-center)
    function initializePosition() {
        const rect = button.getBoundingClientRect();
        const buttonWidth = rect.width;
        xOffset = window.innerWidth - buttonWidth - 20;
        yOffset = window.innerHeight / 2 - rect.height / 2;
        
        button.style.left = xOffset + 'px';
        button.style.top = yOffset + 'px';
        button.style.right = 'auto';
    }

    // Initialize after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initializePosition, 100);
        });
    } else {
        setTimeout(initializePosition, 100);
    }
})();