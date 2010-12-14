**Author:** Stephen Korecky <br />
**Website:** http://stephenkorecky.com <br />
**Plugin Website:** http://github.com/skorecky/Add-Clear <br />
----
**Contributers:** <a href="https://github.com/scoman81">scoman81</a> <br />

## About

**Version 1.1**

Add Clear is a jQuery plugin that adds a input clearing button on any input you apply it to. It clears the value, and returns focus to that field.

## How to use
    
- Load jQuery into your project
- Load Add Clear plugin into your project
- Setup which elements you would like to apply this plugin to.

### Usage

    <script type="text/javascript" charset="utf-8">
  	  $(document).ready(function(){
  	    $("input").addClear();
  	  });
  	  
  	  // Example onClear option usage
  	  $("input").addClear({
        onClear: function(){
          alert("call back!");
        }
      });
  	</script>
  	
### Available Options

<table>
  <tr>
    <th>Option</th>
    <th>Default</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>closeImage</td>
    <td>clear.png</td>
    <td>string</td>
  </tr>
  <tr>
    <td>top</td>
    <td>0</td>
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
    <td>onClear</td>
    <td>null</td>
    <td>function</td>
  </tr>
</table>

#### Using Options
    $("input").addClear({closeImage : "/image/path/close.png",top : -2, right : 6});