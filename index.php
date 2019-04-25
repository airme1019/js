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
function generateUtil(&$A, &$B, &$C, $i, $j,
                       $m, $n, $len, $flag)
{
    if ($flag) // Include valid element from A
    {
        // Print output if there is at least
        // one 'B' in output array 'C'
        if ($len)
            printArr($C, $len + 1);

        // Recur for all elements of A
        // after current index
        for ($k = $i; $k < $m; $k++)
        {
            if (!$len)
            {
                /* this block works for the very
                first call to include the first
                element in the output array */
                $C[$len] = $A[$k];

                // don't increment lem as B
                // is included yet
                generateUtil($A, $B, $C, $k + 1,
                             $j, $m, $n, $len, !$flag);
            }
            else     /* include valid element
                        from A and recur */
            {
                if ($A[$k] > $C[$len])
                {
                    $C[$len + 1] = $A[$k];
                    generateUtil($A, $B, $C, $k + 1, $j,
                                 $m, $n, $len + 1, !$flag);
                }
            }
        }
    }
    else /* Include valid element
            from B and recur */
    {
        for ($l = $j; $l < $n; $l++)
        {
            if ($B[$l] > $C[$len])
            {
                $C[$len + 1] = $B[$l];
                generateUtil($A, $B, $C, $i, $l + 1,
                             $m, $n, $len + 1, !$flag);
            }
        }
    }
}
/* Wrapper function */
function generate(&$A, &$B, $m, $n)
{
    $C = array_fill(0, ($m + $n), NULL); /* output array */
    generateUtil($A, $B, $C, 0, 0, $m, $n, 0, true);
}

// A utility function to print an array
function printArr(&$arr, $n)
{
    for ($i = 0; $i < $n; $i++)
        echo $arr[$i] . " ";
    echo "<br>";
}

// Driver Code
$A = array(10, 15, 25);
$B = array(15, 25, 30, 45);
$n = sizeof($A);
$m = sizeof($B);
generate($A, $B, $n, $m);
?>
<div id="container">
  <h2>JS Play Ground</h2>

  <p>Change font size: </p>
  <a href="#" id="size-12">12</a>
  <a href="#" id="size-14">14</a>
  <a href="#" id="size-16">16</a>
  <a href="#" id="size-20">20</a>

</div>
<div><a href="questions.html" target="_blank">111Some JS Questions</a></div>
<div>
  <ul>
    <?php foreach ($js_files as $key => $value) {
      echo "<li><a href=\"src/$value\" target=\"_blank\">$value</a></li>";
    }?>

  </ul>
</div>

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
document.getElementById('size-20').onclick = makeSize(20);

</script>
</body>
</html>
