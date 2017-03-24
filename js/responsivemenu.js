function responsiveMenu() {
    $(".menu-movil-boton").click(function(event) {
        $('#navegacion-movil').toggle();
    });
    $(".has-submenu").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        //obtenemos el index del li en el que clicamos
        var index = $(this).parent().index();

        //escondemos todos los li menos el que hemos clicado
        $(this).parent().parent().children("li").each(function() {
            if (index == $(this).index()) {
                $(this).removeClass("menumobil-li-esconde");
                $(this).addClass("menumobil-li-muestra");
            } else {
                $(this).removeClass("menumobil-li-muestra");
                $(this).addClass("menumobil-li-esconde");
            }
        });

        //escondemos la cabecera del li que hemos clicado
        $(this).addClass('esconder-cabecera');
        //añadimos la clase mostrar-subcategoria al submenu que queremos mostrar
        $(this).next().addClass("menumobil-subcategoria-muestra");
    });
    $(".volver").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().parent().removeClass("menumobil-subcategoria-muestra");
        $(this).parent().parent().parent().parent().find("li").removeClass("menumobil-li-esconde");
        $(this).parent().parent().prev().removeClass('esconder-cabecera');
        console.log($(this).parent().parent().parent().parent());
    });;
}
