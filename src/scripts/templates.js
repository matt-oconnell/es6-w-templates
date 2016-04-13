import Hogan from 'hogan.js'

var templates = {};
templates['404'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>404</h1>");t.b("\n" + i);t.b("<p>");t.b("\n" + i);t.b("    ");t.b(t.v(t.f("content",c,p,0)));t.b("\n" + i);t.b("</p>");return t.fl(); },partials: {}, subs: {  }});
templates['page1'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>Page1</h1>");t.b("\n" + i);t.b("<p>");t.b("\n" + i);t.b("    ");t.b(t.v(t.f("content",c,p,0)));t.b("\n" + i);t.b("</p>");return t.fl(); },partials: {}, subs: {  }});
templates['page2'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>Page2</h1>");t.b("\n" + i);t.b("<p>");t.b("\n" + i);t.b("    ");t.b(t.v(t.f("content",c,p,0)));t.b("\n" + i);t.b("</p>");return t.fl(); },partials: {}, subs: {  }});

export default templates