<?php

namespace App\Http\Controllers;

use App\File;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function index()
    {
        $files = File::all();
        return response()->json(['status' => 'success', 'files' => $files], 200);
    }

    public function store(Request $request)
    {
        $file = $request->file('file');
        $name = $file->getClientOriginalName();
        $path = Storage::disk('public')->putFile('uploads', $file);
        $file = File::create([
            'name' => $name,
            'path' => $path
        ]);
        return response()->json(['status' => 'success'], 200);
    }

    public function show($id){
        $file = File::find($id);
        return response()->file(storage_path('app/public/'.$file->path));
    }

    public function edit($id){
        $file = File::find($id);
        return response()->json($file, 200);
    }

    public function update($id, Request $request)
    {
        return response()->json(['status' => 'success'], 200);
    }

    public function destroy($id)
    {
        $file = File::find($id);
        $file->delete();
        return response()->json(['status' => 'success'], 200);
    }
}
