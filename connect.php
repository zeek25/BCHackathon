<?php

putenv("ORACLE_HOME=:tempPathName");

$conn = oci_connect('user', 'password');
/*
if($conn){
	echo "\nConnected Successfully";
} else {
	echo "\nCould Not Connect";
	return;
}
*/

?>