<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
	public function getExample(Request $request)
	{

		$fichero = base_path() . '/public/uploads/' . $request['name'];

		if (file_exists($fichero)) {
			return 'si existe la imagen';
		} else {
			return json_encode('no existe imagen');
		}
	}
	public function getimg(Request $request){

		$fichero = base_path() . '/public/uploads/' . $request['name'];
		header('Content-Description: File Transfer');
		header('Content-Type: application/octet-stream');
		header('Content-Disposition: attachment; filename="' . basename($fichero) . '"');
		header('Expires: 0');
		header('Cache-Control: must-revalidate');
		header('Pragma: public');
		header('Content-Length: ' . filesize($fichero));
		readfile($fichero);
		exit;
	}

	public function store(Request $request)
	{
		if (!$request->hasFile('file')) {
			return response()->json(['upload_file_not_found'], 400);
		}
		$file = $request->file('file');
		if (!$file->isValid()) {
			return response()->json(['invalid_file_upload'], 400);
		}
		$path = base_path() . '/public/uploads/';
		$file->move($path, $file->getClientOriginalName());
		return response()->json(compact('path'));
	}
}
