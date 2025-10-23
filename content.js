function Page(name, content) {
    this.name = name,
    this.content = content
}


function displayContent(index) {

    var page = pages[index];

    var oe = document.getElementById("open-editors");
    var p = document.getElementById("portfolio");
    var tabs = document.getElementById("tabs");

    oe.innerHTML = "";
    p.innerHTML = "";
    tabs.innerHTML = "";

    for (var i = 0; i < pages.length; i ++) {
        var element = pages[i]
        oe.innerHTML += `<li style="${element == page ? "background-color: #37373c;" : ""}" onclick="displayContent(${i})"><i class="fa-solid fa-align-left"></i> ${element.name}</li>`
        p.innerHTML += `<li style="${element == page ? "background-color: #37373c;" : ""}" onclick="displayContent(${i})"><i class="fa-solid fa-align-left"></i> ${element.name}</li>`
        tabs.innerHTML += `<div style="${element == page ? "background-color: #1e1e1e; border: 1px solid #1e1e1e;" : ""}" onclick="displayContent(${i})"><i class="fa-solid fa-align-left"></i> ${element.name}</div>`
    }

    var ele = document.getElementById("content");
    var text = page.content.split("\n");

    ele.innerHTML = "";
    
    for (var i = 0; i < text.length; i++) {
        ele.innerHTML += `<div class="line">
                            <div class="index">${i + 1}</div>
                            <div class="text">${text[i]}</div>
                                
                        </div>`
    }


}

const pages = [
new Page("welcome.txt", `Welcome to my portfolio!
I'm Finn Rose.
I'm a second-year student of Computing Science at the University of Dundee.
I'm extremely passionate about all aspects of technology and computing.
I prefer to work in the back-end but have experience throughout the stack in various group projects.
I aspire to use my computing skills to make a tangible positive impact on the world.

Please use the side bar or the tabs above to navigate the various pages.
<a href="./CV.pdf" download>Click here to download my CV!</a>

Email: <a href="mailto:finnmrose2@gmail.com">finnmrose2@gmail.com</a>
Linkedin: <a href="https://www.linkedin.com/in/finn-rose-1776b4389/">https://www.linkedin.com/in/finn-rose-1776b4389/</a>
Github: <a href="https://github.com/finnmrose/">https://github.com/finnmrose/</a>`),
new Page('skills.txt', `Programming Language Proficiencies:
    - Python, 5 years experience, taught during GCSEs
    - C/C++, currently learning in second-year
    - C#, 1 year experience, self-taught
    - Java, 1 year experience, taught during first-year
    - JavaScript, 5 years experience, taught during GCSEs
    - PHP, 1 year experience, taught during A Levels
    - Swift, currently experimenting with, self-taught
    - 6502 Assembly, previously experimented with, self-taught

Web Technology Proficiencies:
    - HTML, 5 years experience, taught during GCSEs
    - CSS, 5 years experience, taught during GCSEs
    - Bootstrap, 1 year experience, taught during first-year
    
I have experience throughout the stack although I prefer to work in the back-end.
I have done several projects involving embedded systems and am familiar with working within the constraints applied by a limited system.`),
new Page(`projects.txt`, `2023 - Present: An ever-extending library of Bad Apple!!! representations
I am a big fan of this classic programming challenge and have thrown my own hat into the ring several times.
"Platforms" include the <span class="hover_img"><a href="./screenshots/wikipedia.jpeg">Wikipedia page for Bad Apple!!!<span><img src="./screenshots/wikipedia.jpeg" height="1080"></span></a></span>, the <span class="hover_img"><a href="./screenshots/scryfall.jpeg">MTG card database Scryfall<span><img src="./screenshots/scryfall.jpeg" height="1080"></span></a></span> and the <span class="hover_img"><a href="./screenshots/nes.png">Nintendo Entertainment System.<span><img src="./screenshots/nes.png" height="646"></span></a></span>
I end up learning all sorts of technologies like OpenCV or 6502 assembly.

2025: <span class="hover_img"><a href="https://pastebin.com/vZkJ9rA7">Rosebox contollers<span><img src="./screenshots/rosebox.jpg" height="1080"></span></a></span>
I build "boxx-style" controllers to use when playing Super Smash Bros. Melee.
Sold to various players around the UK.
I also create less practical controllers for the fun and challenge of it (e.g. the <span class="hover_img"><a href="./screenshots/gdk.jpg">GDK Boss Boxx<span><img src="./screenshots/gdk.jpg" height="2252"></span></a></span>).

2025 Introduction to Data Structures and Algorithms Group Project: <a href="https://github.com/finnmrose/CS12002-socialmedia">Unnamed Social Media</a>
I worked as project manager and UI lead.
Scheduled regular meetings and unified big picture focus, leaving the specific implementations to individual members.
Created a user-friendly interface using Swing.

2024 Introduction to Software Development Project: <a href="https://github.com/finnmrose/CS11002-scrabble">Text-Based Scrabble Implementation</a>
I created a Scrabble program that supported every rule in the official tournament ruleset.
Build in Java and used dictionaryapi.dev to get word definitions. 

2023 Advanced Higher Project: Video to ASCII Converter
A python-based tool for converting and playing back video files into an ASCII representation.
Integrated with YouTube using pytube to get and convert videos from YouTube links.
Used OpenCV for image processing.`)
]

// change heights on images and use css instead




displayContent(0)