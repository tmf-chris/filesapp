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
        $file = File::Uuid($id);
        return response()->json(['status' => 'success', 'file' => $file], 200);
    }

    public function edit($id){
        $file = File::Uuid($id);
        return response()->json($file, 200);
    }

    public function update($id, Request $request)
    {
        $file = File::Uuid($id);
        $file->update([
            'name' => $request->input('name'),
            'extension' => $request->input('extension'),
            'mime' => $request->input('mime'),
            'size' => $request->input('size')
        ]);
        return response()->json(['status' => 'success'], 200);
    }

    public function destroy($id)
    {
        $file = File::Uuid($id);
        $file->delete();
        return response()->json(['status' => 'success'], 200);
    }
}
