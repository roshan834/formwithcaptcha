<?php

// Check if the form was submitted

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Check if file was uploaded without errors

	if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
		
		$file_name	 = $_FILES["file"]["name"];
		$file_type	 = $_FILES["file"]["type"];
		$file_size	 = $_FILES["file"]["size"];
		$file_tmp_name = $_FILES["file"]["tmp_name"];
		$file_error = $_FILES["file"]["error"];
		//we use temp variable name in move uploaded file name parameter 

		$path_of_file="imp/";
		move_uploaded_file($file_tmp_name,$path_of_file.$file_name);

		
	}
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Thank You</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            animation: zoomIn 1s;
        }

        h1 {
            font-size: 36px;
            color: #333;
        }

        p {
            font-size: 18px;
            color: #666;
        }

        @keyframes zoomIn {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You for Your Action</h1>
        <p> We appreciate your input .</p>
    </div>
</body>
</html>

