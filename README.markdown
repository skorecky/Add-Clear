**Author:** Stephen Korecky <br />
**Website:** http://stephenkorecky.com <br />
**Plugin Website:** http://github.com/skorecky/Add-Clear <br />
**Contributers:**
<a href="https://github.com/scoman81">scoman81</a>,
<a href="https://github.com/Steve887">Steve887</a>,
<a href="https://github.com/Deividy">Deividy</a>
<br />
**jQuery Plugin:** http://plugins.jquery.com/add-clear/

## About

**Version 2.0.1**

Add Clear is a jQuery plugin that adds a input clearing button on any input you
apply it to. It clears the value, and returns focus to that field.

### New in 2.0.0
- Code Cleanup
- Removed the clear image since most devices are going beyond 72PPI

## How to use

- Load jQuery into your project
- Load Add Clear plugin into your project
- Setup which elements you would like to apply this plugin to.

### Usage
```javascript
$(function(){
  $("input").addClear();
});

// Example onClear option usage
$("input").addClear({
  onClear: function(){
    alert("call back!");
  }
});
```
### Available Options

<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>closeSymbol</td>
    <td>&#10006;</td>
    <td>string</td>
  </tr>
  <tr>
    <td>top</td>
    <td>1</td>
    <td>number</td>
  </tr>
  <tr>
    <td>right</td>
    <td>4</td>
    <td>number</td>
  </tr>
  <tr>
    <td>returnFocus</td>
    <td>true</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>showOnLoad</td>
    <td>false</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>hideOnBlur</td>
    <td>false</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>clearOnEscape</td>
    <td>true</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>onClear</td>
    <td>null</td>
    <td>function</td>
  </tr>
</table>

#### Using Options
```javascript
$("input").addClear({top : -2, right : 6});
```
