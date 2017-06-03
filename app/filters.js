app.filter('capitalize', function() {
    return function(input, param) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    };
});

app.filter('firstLetter', function() {
    return function(input, param) {
        return input.substring(0,1);
    };
});

app.filter('displayName', function() {
    return function(name) {
      return name.first + " " + name.last;
    };
});

app.filter('displaySurname', function() {
    return function(name) {
      return name.last + ", " + name.first;
    };
});

app.filter('doctorName', function() {
    return function(physician) {
      return physician.first + " " + physician.middle + ". " + physician.last;
    };
});

app.filter('doctorSurname', function() {
    return function(physician) {
      return physician.last + ", " + physician.first + " " + physician.middle + "., MD";
    };
});



