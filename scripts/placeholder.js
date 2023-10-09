$.get("/elements/navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("/elements/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});

$.get("/elements/subscribe.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});

$.get("/elements/share.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});

$.get("/elements/contact.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});