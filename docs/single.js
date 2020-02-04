let userinfo;

function api(path) {
    // lol api
    return fetch('/api/' + path).then(x => x.json());
}

window.addEventListener('load', function () {
    api('/userinfo').then(function (x) {
        userinfo = x;

        let showControls = userinfo.uid ?
            ['tab_profile', 'tab_logout'] :
            ['tab_login', 'tab_register'];

        for (let c of showControls)
            document.getElementById(c).style.display = '';

        if (window['contentInit'])
            contentInit();
    }).catch(alert);
});