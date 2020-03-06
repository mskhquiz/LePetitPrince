function check(q, a) {
    document.getElementsByClassName("answer" + q)[0].style.background = "#29a329";
    document.getElementsByClassName("answer" + q)[0].style.borderColor = "#29a329";
    document.getElementsByClassName("answer" + q)[0].style.color = "#fff";
    document.getElementsByClassName("answer" + q)[0].innerText = a;
}
