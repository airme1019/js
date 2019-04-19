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
<div><a href="questions.html" target="_blank">111Some JS Questions</a></div>
<div>
  <ul>
    <?php foreach ($js_files as $key => $value) {
      //echo "<li><a href=\"src/$value\" target=\"_blank\">$value</a></li>";
    }?>

  </ul>
</div>


<?php foreach ($js_files as $key => $value) {
  //echo "<script src=\"src/$value\"></script>";
}?>
<script src="src/reverseArrayWithoutAffectingSpecialChar.js"></script>
<!--<script src="build/main.bundle.js"></script>-->
<script src="src/closures.js"></script>
<script>
// calculated the sum of upVotes
const posts = [
  {id: 1, upVotes: 2},
  {id: 2, upVotes: 18},
  {id: 3, upVotes: 1},
  {id: 4, upVotes: 30},
  {id: 5, upVotes: 50}
];
let sum = 0;
//console.time('reduce');
sum = posts.reduce((s, p)=> s+=p.upVotes,0);
//console.timeEnd('reduce')
sum = 0;
//console.time('for loop');
for(let i=0; i<posts.length; i++) {
    sum += posts[i].upVotes;
}
//console.timeEnd('for loop');
sum = 0;
//console.time('for each');
posts.forEach(element => {
    sum += element.upVotes;
});
//console.timeEnd('for each');
function makeSize(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  }
}
document.getElementById('size-12').onclick = makeSize(12);
document.getElementById('size-14').onclick = makeSize(14);
document.getElementById('size-16').onclick = makeSize(16);

</script>
</body>
</html>
