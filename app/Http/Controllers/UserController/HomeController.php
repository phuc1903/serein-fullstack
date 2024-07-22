<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $productSellers = Product::orderBy('bestseller', 'desc')->limit(10)->get();

        $productNews = Product::latest()->limit(10)->get();
        // dd($productNews);
        return inertia('Home/Home', ['productNews' => $productNews, 'productBestsellers' => $productSellers]); 
    }
}
