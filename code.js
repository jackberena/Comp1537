recieved_data = null;

function process_res(data) {
    recieved_data = data
    console.log(data)
    $("#result").html(JSON.stringify(data))
}

function findUnicornByName() {
    console.log("findUnicornByName()" + "got called")
    console.log($("#unicornName").val())

    $.ajax({
        url: "https://pure-taiga-18795.herokuapp.com/findUnicornByName",
        type: "POST",
        data: {
            "unicornName": $("#unicornName").val()
        },
        success: process_res
    })
}


function findUnicornByWeight() {
    console.log("findUnicornByName()" + "got called")
    console.log($("#lowerWeight").val())
    console.log($("#higherWeight").val())

    $.ajax({
        url: "https://pure-taiga-18795.herokuapp.com/findUnicornByWeight",
        type: "POST",
        data: {
            "lowerWeight": $("#lowerWeight").val(),
            "higherWeight": $("#higherWeight").val()
        },
        success: process_res
    })
}

function findUnicornByFood() {
    carrotIsChecked = "unchecked"
    appleIsChecked = "unchecked"
    if ($("#carrot").is(":checked"))
        carrotIsChecked = "checked"

    if ($("#apple").is(":checked"))
        appleIsChecked = "checked"

    $.ajax({
        url: "https://pure-taiga-18795.herokuapp.com/findUnicornByFood",
        type: "POST",
        data: {
            "appleIsChecked": appleIsChecked,
            "carrotIsChecked": carrotIsChecked,
        },
        success: process_res
    })
}

function filterUnicorn() {
    unicorn_name = "unchecked"
    unicorn_weight = "unchecked"

    if ($("#unicornNameFilter").is(":checked")) {
        unicorn_name = "checked"
    }

    if ($("#unicornWieghtFilter").is(":checked")) {
        unicorn_weight = "checked"
    }

    filtered = recieved_data.map((content) => {
        unicorns = []
        if (unicorn_name == "checked") {
            unicorns.push(content["name"])
            return unicorns
        } else if (unicorn_weight == "checked") {
            unicorns.push(content["weight"])
            return unicorns
        } else if (unicorn_weight == "checked" && unicorn_name == "checked") {
            unicorns.push(content["weight"])
            unicorns.push(content["name"])
            return unicorns
        } else {
            unicorns.push(JSON.stringify(content))
            return unicorns
        }
    })
    $("#result").html(filtered)
}


function setup() {
    $("#findUnicornByName").click(findUnicornByName)
    $("#findUnicornByFood").click(findUnicornByFood)
    $("#findUnicornByWeight").click(findUnicornByWeight)
    $("#filterUnicorn").click(filterUnicorn)
}


$(document).ready(setup)