<?php

namespace App\Http\Controllers;

use App\Models\panasz_models;
use Illuminate\Http\Request;

class panasz_controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allComplain = panasz_models::all();
        return response()->json($allComplain);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showComplain = panasz_models::find($id);
        if (empty($showComplain)) {
            return response()->json(["message" => "Panasz nem található!"], 404);
        }
        else{

        }
        return response()->json($showComplain);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deleteComplain = panasz_models::find($id);
        if (empty($deleteComplain)) {
            return response()->json(["message" => "Panasz nem található!"], 404);
        }
       else {
        return response()->json(["message" => "Panasz kezelve!"], 202);
       }
    }
}
