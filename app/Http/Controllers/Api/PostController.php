<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post; 

class PostController extends Controller
{
     public function fetchPosts()
     {
         $posts = Post::all();
         return response()->json($posts, 200);
     }

     public function createPost(Request $request)
    {
        $post = new Post;
        $post->name = $request->name;
        $post->content = $request->content;
        $post->save();
        return response()->json($post, 200);
    }
}
