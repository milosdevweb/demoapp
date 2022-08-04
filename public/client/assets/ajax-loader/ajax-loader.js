class AjaxLoader {
    show(form_id = 'body', button_text = false, loader_text = '') {
        var form = $(form_id);
        var loader = form.find(".ajaxLoader");

        if (loader.length === 0) {
            form.append(`<div class="ajaxLoader" style=""><div class="lds-ripple lds-dual-ring"><div></div><div></div></div><span class="ajaxLoaderText">` + loader_text + `</span></div>`);
        }

        if (button_text) {
            form.find("button").html(button_text);
        }

        form.find(".ajaxLoader").show();
    }

    hide(form_id = 'body', button_text) {
        if (button_text) {
            $(form_id).find("button").html(button_text);
        }

        $(form_id).find(".ajaxLoader").remove();
    }
}

var ajaxLoader = new AjaxLoader();
