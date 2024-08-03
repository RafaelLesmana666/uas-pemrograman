function goTo(target){
    const section = document.getElementById(`${target}`);
    console.log(section)
    if (section) {
        const sectionTop = section.offsetTop;
        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });
    }
}
