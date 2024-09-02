const home = document.querySelector("#home");
const about = document.querySelector("#about");
const price = document.querySelector("#price");
const contact = document.querySelector("#contact");

//
const basic = document.querySelector("#basic");
const standard = document.querySelector("#standard");
const premium = document.querySelector("#premium");

home.addEventListener("click", (h) =>{
    h.preventDefault();
    const sectionH = document.querySelector(".hero");
    sectionH.scrollIntoView({behavior:"smooth"});
})

about.addEventListener("click", (a) =>{
    a.preventDefault();
    const sectionA = document.querySelector(".about");
    sectionA.scrollIntoView({behavior:"smooth"});
})

price.addEventListener("click", (p) =>{
    p.preventDefault();
    const sectionP = document.querySelector(".membership");
    sectionP.scrollIntoView({behavior:"smooth"});
})

contact.addEventListener("click", (c) =>{
    c.preventDefault();
    const sectionC = document.querySelector(".contact");
    sectionC.scrollIntoView({behavior:"smooth"});
})

basic.addEventListener("click", (b) =>{
    b.preventDefault();
    const sectionB = document.querySelector(".basic");
    sectionB.scrollIntoView({behavior:"smooth"});
})

standard.addEventListener("click", (s) =>{
    s.preventDefault();
    const sectionS = document.querySelector(".standard");
    sectionS.scrollIntoView({behavior:"smooth"});
})

premium.addEventListener("click", (pr) =>{
    pr.preventDefault();
    const sectionP = document.querySelector(".premium");
    sectionP.scrollIntoView({behavior:"smooth"});
})