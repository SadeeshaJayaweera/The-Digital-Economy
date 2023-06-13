function loadSideNav() {
    const navDiv = document.getElementById("navDiv");
    navDiv.innerHTML = "<div class=\"sideLinks\"><h3 class=\"text-center navTitle mt-5\">The Digital Economy</h3><a href=\"../Pages/Home.html\" class=\" sideBtn text-center\"><b>Home</b></a><a href=\"#\" onclick=\"loadReader('../Documents/Ecommerce.pdf')\" class=\" sideBtn text-center\">eCommerce</a><a href=\"#\" onclick=\"loadReader('../Documents/Diagrams.pdf')\" class=\" sideBtn text-center\">Diagrams</a><a href=\"#\" onclick=\"loadReader('../Documents/Security.pdf')\" class=\" sideBtn text-center\">Security</a><a href=\"#\" onclick=\"loadReader('../Documents/Database.pdf')\" class=\" sideBtn text-center\">Database</a><a href=\"#\" onclick=\"loadReader('../Documents/Evaluation.pdf')\" class=\" sideBtn text-center\">Evaluation</a></div>";
}

function loadReader(filee) {
    window.location.href = "../Pages/Reader.html?file=" + filee;
}

function loadFile(path) {

    const reader = document.getElementById("reader");
    reader.innerHTML = "<object data=\"" + path + "\" type=\"application/pdf\" id=\"vv\" width=\"100%\" height=\"570\"\"><p>Alternative text - include a link <a href=\"" + path + "\">to the PDF!</a></p></object>"

}