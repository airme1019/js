<!DOCTYPE html>
<html>
<head>
<title>JS</title>
<link rel="stylesheet" href="styles.css">

</head>
<body>
<?php
$dir = 'src';
function dirToArray($dir) {
 $result = array();
 $cdir = scandir($dir);
 foreach ($cdir as $key => $value)
 {
    if (!in_array($value,array(".","..")))
    {
       if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
       {
          //$result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
       }
       else
       {
         if(strpos($value, '.js') > 0) {
          $result[] = $value;
        }
       }
    }
 }

 return $result;
}
$js_files = dirToArray($dir);

?>
<div id="container">
  <h2>JS Play Ground</h2>

  <p>Change font size: </p>
  <a href="#" id="size-12">12</a>
  <a href="#" id="size-14">14</a>
  <a href="#" id="size-16">16</a>
</div>
<div><a href="questions.html" target="_blank">Some JS Questions</a></div>
<div>
  <ul>
    <?php foreach ($js_files as $key => $value) {
      echo "<li><a href=\"src/$value\" target=\"_blank\">$value</a></li>";
    }?>
    <li><a href="addDigits.js">Add Digits (Hash)</a></li>
    <li><a href="sumOfTwo.js">Sum of Two (while modulus)</a></li>
    <li><a href="reverseString.js">Reverse String (recursive)</a></li>
    <li><a href="isParantheseValid.js">Flatten Array</a></li>
  </ul>
</div>


<?php foreach ($js_files as $key => $value) {
  echo "<script src=\"src/$value\"></script>";
}?>

</body>
</html>
