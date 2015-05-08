<!DOCTYPE html>
<html>
<head>
<title>Title of the document</title>
<meta charset="UTF-8">
</head>

<body>
<form method="POST" action="hello.php">name:
<input type="text" name="name" soze="15" />
<input type="submit" name="submit" value="send" />
</form>

<?php
if($_REQUEST['submit'] != null){
  sleep(3);
  print('hello, '.$_REQUEST['name'].'さん');
}
?>
</body>
</html>

