block('attach').elem('control')(

    tag()('input'),

    addAttrs()(function() {
        var attrs = { type : 'file' },
            attach = this._attach;

        // в js генерим html для attach__control без самого attach
        if(attach) {
            attrs.name = attach.name;
            attach.mods && attach.mods.disabled && (attrs.disabled = 'disabled');
            attach.tabIndex && (attrs.tabindex = attach.tabIndex);
            attach.accept && (attrs.accept = attach.accept);
        }

        return attrs;
    })

);
