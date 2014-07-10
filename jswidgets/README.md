JavaScript Widgets
------------------

**The concept**

  * A collection of one-line HTML tags that automagically turn into more complex widgets
  * Example: ```<div data-widget="loginform"/>``` turns into a complete login form
  * Example: ```<div data-widget="accountdetails"/>``` turns into a display of account info
  * Building blocks of functionality that can be copy-pasted into pages 
  * Very easy to create customised user interfaces by re-assembling widgets
  * Rather than re-skinning a one-size-fits-all product, allow per-customer, custom reconfigurations

**Early examples**
   * Coursera: http://blog.pamelafox.org/2013/05/frontend-architectures-server-side-html.html
   * London Design Museum: http://alexmarandon.com/articles/web_widget_jquery/

**Related efforts**
   * W3C web components specification
   * Polymer
   * Angular has the idea of re-usable components
  
Example
-------

**demo.html**

A page using a javascript widget.

```html
<!DOCTYPE html>
<html>
  <body>
    <div widget="loginform"></div>
    <script src="widgets.js"/>
  </body>
</html>
```

**loginform.html**

The widget itself, packaged in an HTML file. Normally this could include a template, some JavaScript, an AJAX query, etc.

```html
<form action="login" method="POST">
  <input name="userid"><br/>
  <input type="password" name="password"><br/>
  <input type="submit" type="submit">Sign in</input>
</form>

```

**widgets.js**

The script that does the loading. This example uses jQuery to do it.

```javascript
// Populate widgets
function widgetLoader() {
  $('[data-widget]').each(function () {
    var widget = $(this).attr('data-widget');
    $(this).load(widget + '.html');
  });
}

// run widgetLoader when page has loaded
$(document).ready(widgetLoader);
```    
