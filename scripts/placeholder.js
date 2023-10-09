$.get("/elements/navbar.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("/elements/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});

$.get("/elements/share.html", function(data){
    $("#share-placeholder").replaceWith(data);
});

$.get("/elements/grid-right.html", function(data){
    $("#grid-right-placeholder").replaceWith(data);
});