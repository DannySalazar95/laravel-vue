//
// ─── INPUT ──────────────────────────────────────────────────────────────────────
//

window.auto_focus = (name) => {
    setTimeout(() => {
        $(`input[name=${name}]`).focus()
        $(`textarea[name=${name}]`).focus()
    }, 500)
}

//
// ─── DATE AND TIME  ─────────────────────────────────────────────────────────────────────
//

window.get_current_year = () => {
    let today = new Date()
    return today.getFullYear()
}

window.get_current_date = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm

    return `${yyyy}-${mm}-${dd}`
}

window.get_current_hour = () => {
    let today = new Date()
    let hh = today.getHours();
    let mm = today.getMinutes();
    if (hh < 10) hh = '0' + hh
    if (mm < 10) mm = '0' + mm
    return `${hh}:${mm}`
}


//
// ─── ARRAY OBJECT ───────────────────────────────────────────────────────────────
//

window.sort_array_object = (items, name_field) => {
    return items.sort(function (a, b) {
        if (a[name_field] > b[name_field]) {
            return 1;
        }
        if (a[name_field] < b[name_field]) {
            return -1;
        }
        return 0;
    });
}

//
// ─── NUMBER ─────────────────────────────────────────────────────────────────────
//

window.is_float = function (n) {
    if (isNaN(n)) return false
    else {
        let p_f = parseFloat(n)
        return p_f - p_f.toFixedDown(0) > 0
    }
}


//
// ─── CONFIGURATION: message ─────────────────────────────────────────────────────────────────────
//

window.message = (type, content, title = null) => {
    console.log(`/resources/js/helpers/index.js: ${content}`)
    //window.Snotify[type](content, title)
}

