<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\user;
use Validator;

class UserController extends Controller
{
    //CRUD
    public function store(Request $request)
    {
      $user= new user;
  		$user->nama=$request->input('nama');
      $user->alamat=$request->input('alamat');
      $user->telepon=$request->input('telepon');
  		if($user->save()){
        return user::latest()->first();
      }else{
        return 'gagal menambah';
      }

    }
    public function update($id,Request $request)
    {
      $user = user::findOrFail($id);
      $user->nama=$request->input('nama');
      $user->alamat=$request->input('alamat');
      $user->telepon=$request->input('telepon');
  		if($user->save()){
        return 'berhasil mengupdate';
      }else{
        return 'gagal mengupdate';
      }
    }

    public function index()
    {
        return user::latest()->get();
    }
    public function show($id){
      return user::find($id);
    }
    public function destroy($id)
    {
        $user = user::findOrFail($id);
        $user->delete();
        return 204;
    }
}
