<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return Product::all();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        return Product::find($id);
    }
}
