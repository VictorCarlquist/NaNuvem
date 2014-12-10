<html>
<head>
<title>Upload Form</title>
</head>
<body>

<?php echo $error;?>

<?php echo form_open_multipart('upload/do_upload');?>
	<input type="file" name="fileuser"/>
	<input type="submit" value="Enviar"/>
</form>

</body>
</html>