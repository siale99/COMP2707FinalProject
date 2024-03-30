<?php
// Check if file upload form is submitted
if(isset($_POST["submit"])) {
    $target_dir = "uploads/"; // Directory where files will be uploaded
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }

    // Check file size (limit to 5MB)
    if ($_FILES["fileToUpload"]["size"] > 5000000) {
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }

    // Allow only certain file formats (e.g., PDF, slides)
    if($fileType != "pdf" && $fileType != "ppt" && $fileType != "pptx") {
        echo "Sorry, only PDF, PPT, and PPTX files are allowed.";
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    } else {
        // If everything is ok, try to upload file
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "The file ". basename($_FILES["fileToUpload"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}

// Delete uploaded file if requested
if(isset($_GET['delete'])) {
    $fileToDelete = $_GET['delete'];
    
    // Check if the file exists
    if (file_exists($fileToDelete)) {
        // Attempt to delete the file
        if (unlink($fileToDelete)) {
            echo "File deleted successfully.";
        } else {
            echo "Unable to delete the file.";
        }
    } else {
        echo "File does not exist.";
    }
}

// Display list of uploaded files with download links
echo "<h2>Uploaded Files</h2>";
$files = glob("uploads/*");
if ($files) {
    echo "<ul>";
    foreach ($files as $file) {
        if (is_file($file)) {
            $fileName = basename($file);
            echo "<li><a href='$file' target='_blank'>$fileName</a></li>";
        }
    }
    echo "</ul>";
} else {
    echo "No files uploaded yet.";
}
?>