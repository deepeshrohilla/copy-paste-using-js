var copied = document.getElementById("copied")
var btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    var copy = document.getElementById("copy")

    copy.select()
    copy.setSelectionRange(0, 99999)
    document.execCommand("copy")

    copied.style.top = "-55px"
    copied.style.opacity = "1"
    setTimeout(() => {
        copied.style.top = "-40px"
        copied.style.opacity = "0"
    }, 1000);
})