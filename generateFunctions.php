<?php
function generate(){
	$xml=simplexml_load_file("question.xml") or die("Error: Cannot create object");
	$index = 0;
	$html = "";
	$html .= "var lastIndex = ".(sizeof($xml->children())-1).";";
	foreach($xml->children() as $question) { 
		$html .= " function test".$index."(){var flag = false;";
		$test = $question->test;
		$code = $question->code;
		$entry = $question->entry;
	    foreach ($question->entry as $variableName) {
	    	$type = $variableName["type"];
	    	if($type == "int"){
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
				$html.= "if (".$variableName." == \"\") { flag = true;}";
				$html.= " var ".$variableName. " = Number(document.getElementById(\"txt".$variableName."\").value);";
				$html.= "if (isNaN(".$variableName.") || !Number.isInteger(".$variableName.")) { flag = true;}";
			}else if($type == "float"){
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
				$html.= "if (".$variableName." == \"\") { flag = true;}";
				$html.= " var ".$variableName. " = Number(document.getElementById(\"txt".$variableName."\").value);";
				$html.= "if (isNaN(".$variableName.")) { flag = true;}";
			}else if($type == "vector"){
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value.split(\" \"); ";
				$html.= " for(i = 0; i < ".$variableName.".length; i++){ ";
				$html.= " if(".$variableName."[i] == \" \" || ".$variableName."[i] == \"\"){ ";
				$html.= "flag = true; break;} ";
				$html.= $variableName."[i] = Number(".$variableName."[i]); ";
				$html.= " if(isNaN(".$variableName."[i])) { flag = true; break; } } ";
			}else{
				$html.= " var ".$variableName. " = document.getElementById(\"txt".$variableName."\").value;";
			}
	    }
	    $html.="if(flag){ window.alert(\"Entrada Invalida\"); initValues();}";

		$html.="else{ reactToAnswer(correct".$index."(";
		for ($i = 0; $i < sizeof($entry)-1; $i++) {
			$html.= " ".$entry[$i] . ", ";
		}
		$html.= $entry[sizeof($entry)-1] . ") != wrong".$index."(";
		for ($i = 0; $i < sizeof($entry)-1; $i++) {
			$html.= " ".$entry[$i] . ", ";
		}
		$html.= $entry[sizeof($entry)-1] . "),".$index." ); } }";

		$html .= $test;		
		
		$myfile = fopen("scriptQuestions.js", "w") or die("Unable to open file!");
		fwrite($myfile, $html);
		fclose($myfile);
		$index++;
	} 
}
?>