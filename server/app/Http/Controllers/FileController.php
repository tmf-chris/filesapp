<?php

namespace App\Http\Controllers;

use App\File;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Storage;
use Validator;


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
        $acceptedMimes = implode(',', config('app.mimes'));

        $validator = Validator::make($request->all(), [
            'file' => 'required|max:10240|mimetypes:'.$acceptedMimes
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => $validator->messages()], 400);
        }

        $name = $file->getClientOriginalName();
        $path = Storage::disk('public')->putFile('uploads', $file);
        $file = File::create([
            'name' => $name,
            'path' => $path,
            'type' => $file->getMimeType(),
            'size' => $file->getClientSize()
        ]);
        return response()->json(['status' => 'success'], 200);
    }

    public function show($id){
        $file = File::find($id);
        return response()->file(storage_path('app/public/'.$file->path));
    }

    public function edit($id){
        return response()->json(['status' => 'success'], 200);
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

    public function destroyMany(Request $request)
    {
        File::whereIn('id', $request->ids)->delete();
        return response()->json(['status' => 'success'], 200);
    }

    public function allowed(){
        $mimes = config('app.mimes');
        $acceptedMimes = implode(',', $mimes);
        return response()->json($acceptedMimes, 200);
    }
}
