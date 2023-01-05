function getmarks() {


    var days = Number(document.getElementById("days").value);
    var attendence = Number(document.getElementById("attendence").value);
    var other = Number(document.getElementById("other").value);
    var leave = Number(document.getElementById("off").value);
    var establishment = Number(document.getElementById("establishment").value)
    var projected = days * 6.5 * establishment;
    var productive = (attendence * 6.5);
    var achievement = (productive / projected) * 100;
    achievement = Math.round(achievement)
    var others = 6.5 * other;
    var offs = 6.5 * leave;
    offs = Math.round(offs)
    others = Math.round(others)
    productive = Math.round(productive)
    document.getElementById("percentage").innerHTML = projected
    document.getElementById("productive").innerHTML = productive
    document.getElementById("aod").innerHTML = others
    document.getElementById("leave").innerHTML = offs
    document.getElementById("achieve").innerHTML = achievement + "%"

}



function fun() {
    document.getElementById("days").value = "";
    document.getElementById("attendence").value = "";
    document.getElementById("other").value = "";
    document.getElementById("off").value = "";
    document.getElementById("establishment").value = "";
    document.getElementById("percentage").innerHTML = "";
    document.getElementById("productive").innerHTML = "";
    document.getElementById("aod").innerHTML = "";
    document.getElementById("leave").innerHTML = "";
    document.getElementById("achieve").innerHTML = "";
}