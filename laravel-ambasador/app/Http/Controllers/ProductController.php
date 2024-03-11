<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

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
     * @param int $id
     * @return Product|null
     */
    public function show(int $id): ?Product
    {
        return Product::find($id);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function store(Request $request): Response
    {
        $product = Product::create($request->only(['title', 'image']));

        return response($product, Response::HTTP_CREATED);
    }

    /**
     * @param int $id
     * @param Request $request
     * @return Response
     */
    public function update(int $id, Request $request): Response
    {
        $product = Product::find($id);

        $product->update($request->only(['title', 'image']));

        return response($product, Response::HTTP_ACCEPTED);
    }

    /**
     * @param int $id
     * @return Response
     */
    public function destroy(int $id): Response
    {
        Product::destroy($id);

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
