
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});


$("#id_nome").blur(function() { validaNomeFunction() });
$("#id_email").blur(function() { validaEmailFunction() });
$("#id_faixa_etaria").blur(function() { validaFaixaEtariaFunction() });

$("#formulario").submit(function(e) {
    e.preventDefault();
    let nomeValido = validaNomeFunction();
    let emailValido = validaEmailFunction();
    let faixaValido = validaFaixaEtariaFunction();

    if (nomeValido && emailValido && faixaValido) {
        alert('Tudo OK.');

        console.log($("#id_nome").val());
        console.log($("#id_email").val());
    }
    else {
        alert('Deu erro!');
    }
});

function validaNomeFunction() {
    // console.log(e.charCode);
    // return e.charCode >= 48 && e.charCode <= 57;
    let nome = $("#id_nome");
    console.log(nome.val());
    if (nome.val() === '') {
        nome.addClass('is-invalid');
        nome.removeClass('is-valid');
        $("#idNomeRequired").removeClass('d-none');
        return false;
    }
    else {
        nome.removeClass('is-invalid');
        nome.addClass('is-valid');
        $("#idNomeRequired").addClass('d-none');
        return true;
    }
}

function validaEmailFunction() {
    let email = $("#id_email");
    if (email.val() === '') {
        email.addClass('is-invalid');
        email.removeClass('is-valid');
        $("#idEmailRequired").removeClass('d-none')
        return false;
    }
    else {
        $("#idEmailRequired").addClass('d-none');
        if (emailValido(email.val())) {
            email.removeClass('is-invalid');
            email.addClass('is-valid');
            $("#idEmailRequired").addClass('d-none');
            $("#idEmailValido").addClass('d-none');
            return true;
        }
        else {
            email.removeClass('is-valid');
            email.addClass('is-invalid');
            $("#idEmailRequired").addClass('d-none');
            $("#idEmailValido").removeClass('d-none');
            return false;
        }
    }
}

function emailValido(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validaFaixaEtariaFunction() {
    let faixa_etaria = $("#id_faixa_etaria");
    console.log(faixa_etaria.val())
    if (faixa_etaria.val() === '0') {
        faixa_etaria.addClass('is-invalid');
        faixa_etaria.removeClass('is-valid');
        $("#id_faixa_etaria_required").removeClass("d-none");
        return false;
    }
    else {
        faixa_etaria.removeClass('is-invalid');
        faixa_etaria.addClass('is-valid');
        $("#id_faixa_etaria_required").addClass("d-none");
        return true;
    }
}




