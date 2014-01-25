$(function () {
    if (supports_html5_storage) {
        if (sessionStorage.Swatch) {
            changeSwatch();
        }

        if (sessionStorage.FluidLayout) {
            changeFluidLayout();
        }

        if (sessionStorage.InverseNav) {
            changeInverseNav();
        }

        if (sessionStorage.NavSearch) {
            changeNavSearch();
        }
        else {
            $('#navsearch').prop('checked', true);
        }

        if (sessionStorage.HoverMenus) {
            changeHoverMenus();
        }
    }

    $('.skin-chooser-toggle').click(function () {
        $('.skin-chooser-wrap').toggleClass('show');
    });

    $('#swatches').change(function (e) {
        if (supports_html5_storage) {
            sessionStorage.Swatch = $(this).val();

            changeSwatch();
        }
        else {
            alert('Your browser does not support HTML5 Session Storage');
        }
    });

    $('#fluidlayout').change(function () {
        if (supports_html5_storage) {
            sessionStorage.FluidLayout = $(this).is(':checked');

            changeFluidLayout();
        }
        else {
            alert('Your browser does not support HTML5 Session Storage');
        }
    });

    $('#inversenav').change(function () {
        if (supports_html5_storage) {
            sessionStorage.InverseNav = $(this).is(':checked');

            changeInverseNav();
        }
        else {
            alert('Your browser does not support HTML5 Session Storage');
        }
    });

    $('#navsearch').change(function () {
        if (supports_html5_storage) {
            sessionStorage.NavSearch = $(this).is(':checked');

            changeNavSearch();
        }
        else {
            alert('Your browser does not support HTML5 Session Storage');
        }
    });

    $('#hovermenus').change(function () {
        if (supports_html5_storage) {
            sessionStorage.HoverMenus = $(this).is(':checked');

            changeHoverMenus();

            location.reload();
        }
        else {
            alert('Your browser does not support HTML5 Session Storage');
        }
    });
});

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}

function changeSwatch() {
    setTimeout(function () {
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/bootstrap.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/amelia.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/cerulean.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/cosmo.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/cyborg.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/flatly.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/journal.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/readable.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/simplex.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/slate.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/spacelab.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/united.min.css"]').remove();
        $('link[rel=stylesheet][href="/Themes/PJS.Bootstrap/Styles/yeti.min.css"]').remove();

        $('body').removeClass('swatch-bootstrap');
        $('body').removeClass('swatch-amelia');
        $('body').removeClass('swatch-cerulean');
        $('body').removeClass('swatch-cosmo');
        $('body').removeClass('swatch-cyborg');
        $('body').removeClass('swatch-flatly');
        $('body').removeClass('swatch-journal');
        $('body').removeClass('swatch-readable');
        $('body').removeClass('swatch-simplex');
        $('body').removeClass('swatch-slate');
        $('body').removeClass('swatch-spacelab');
        $('body').removeClass('swatch-united');
        $('body').removeClass('swatch-yeti');

        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", "/Themes/PJS.Bootstrap/Styles/" + sessionStorage.Swatch + ".min.css");
        document.getElementsByTagName("head")[0].appendChild(fileref);

        $('body').addClass('swatch-' + sessionStorage.Swatch);

        $('#swatches').val(sessionStorage.Swatch);
    }, 500);
}

function changeFluidLayout() {
    if (sessionStorage.FluidLayout == 'true') {
        $('.container').removeClass('container').addClass('fluid-layout');
        $('#fluidlayout').prop('checked', true);
    }
    else {
        $('.fluid-layout').removeClass('fluid-layout').addClass('container');
        $('#fluidlayout').prop('checked', false);
    }
}

function changeInverseNav() {
    if (sessionStorage.InverseNav == 'true') {
        $('.navbar-fixed-top').removeClass('navbar-default').addClass('navbar-inverse');
        $('#inversenav').prop('checked', true);
    }
    else {
        $('.navbar-fixed-top').removeClass('navbar-inverse').addClass('navbar-default');
        $('#inversenav').prop('checked', false);
    }
}

function changeNavSearch() {
    if (sessionStorage.NavSearch == 'true') {
        $('.navbar-form').toggle(true);
        $('#navsearch').prop('checked', true);
    }
    else {
        $('.navbar-form').toggle(false);
        $('#navsearch').prop('checked', false);
    }
}

function changeHoverMenus() {
    if (sessionStorage.HoverMenus == 'true') {
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", "/Themes/PJS.Bootstrap/Scripts/hovermenus.js")
        document.getElementsByTagName("body")[0].appendChild(fileref)

        $('#hovermenus').prop('checked', true);
    }
    else {
        $("script[src='/Themes/PJS.Bootstrap/Scripts/hovermenus.js']").remove()

        $('#hovermenus').prop('checked', false);
    }
}