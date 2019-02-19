document.addEventListener("DOMContentLoaded", function () {
    let url = location.href;
    let params = url.substr(url.indexOf('?'), url.length);
    let searchParams = new URLSearchParams(params);
    let element;
    if(searchParams.has("firstName")) {
        element = document.getElementById("first-name");
        element.value = searchParams.get("firstName");
    }

    if(searchParams.has("lastName")) {
        element = document.getElementById("last-name");
        element.value = searchParams.get("lastName");
    }

    if(searchParams.has("email")) {
        element = document.getElementById("email");
        element.value = searchParams.get("email");
    }


    if(searchParams.has("gender")) {
        let gender = searchParams.get("gender");
        if (gender === "male") {
            element = document.getElementById("gender-male");
            element.checked="checked"
        }
        if (gender === "female") {
            element = document.getElementById("gender-female");
            element.checked="checked"
        }
    }
});