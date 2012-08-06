var grunt = require("grunt");

exports.jst = {
  main: function(test) {
    test.expect(3);

    var expectA = "this['JST'] = this['JST'] || {};\n\nthis['JST']['fixtures/jst/template.html'] = function(obj){\nvar __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\nwith(obj||{}){\n__p+='<head><title>'+\n( title )+\n'</title></head>';\n}\nreturn __p;\n};";
    var resultA = grunt.file.read("fixtures/output/jst_a.js");
    test.equal(expectA, resultA, "should compile underscore templates into JST");

    var expectB = "this['JST'] = this['JST'] || {};\n\nthis['JST']['fixtures/jst/template.html'] = _.template(\"<head><title><%= title %></title></head>\");"
    var resultB = grunt.file.read("fixtures/output/jst_b.js");
    test.equal(expectB, resultB, "should compile underscore templates into JST, using `_.template`");

    var expectC = "this['JST'] = this['JST'] || {};\n\nthis['JST']['jst/template.html'] = function(obj){\nvar __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\nwith(obj||{}){\n__p+='<head><title>'+\n( title )+\n'</title></head>';\n}\nreturn __p;\n};";
    var resultC = grunt.file.read("fixtures/output/jst_c.js");
    test.equal(expectC, resultC, "should compile underscore templates into JST, with a modified filepath");

    test.done();
  }
};
