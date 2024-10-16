document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h1, h2, h3");
    const sidebarLinks = document.querySelectorAll("#sidebar a");
  
    headers.forEach(header => {
      header.addEventListener("click", () => {
        toggleSection(header);
      });
    });
  
    sidebarLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute("href").substring(1); 
        const targetHeader = document.getElementById(targetId);
  
        targetHeader.scrollIntoView({ behavior: "smooth" });
        openSection(targetHeader);
      });
    });

    function toggleSection(header) {
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    }
  
    function openSection(header) {
      if (!header.classList.contains("active")) {
        header.classList.add("active");
        const content = header.nextElementSibling;
        content.style.display = "block";
      }
    }
    
    const toc = document.getElementById('toc');
    headers.forEach(header => {
        const anchor = document.createElement('a');
        anchor.textContent = header.textContent;
        anchor.href = `#${header.parentElement.id}`;
        anchor.classList.add(header.tagName.toLowerCase());
        toc.appendChild(anchor);
    });
  });
  