import { Router } from 'director'
import contents from './data'
import Hogan from 'hogan.js'
import $ from 'npm-zepto'

import templates from './templates'

console.log(111, templates);

var populate = (pageName) => {
	if(!contents.hasOwnProperty(pageName)) {
		pageName = '404'
	}
	var pageData = contents[pageName]
	var template = $('#' + pageName).html()
	///var rendered = Mustache.render(template, pageData)
	//$('.content').html(rendered)
}

// Router
var router = Router({
	'/:page': populate
});

export default router