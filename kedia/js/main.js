if(localStorage.getItem('popState') != 'shown'){
    $("#disclaimer").modal({backdrop: "static"});
    $("#disclaimer").modal("show");
    console.log(localStorage.getItem('popState'));
    localStorage.setItem('popState','shown');
}

