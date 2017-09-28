<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    //
    protected $table = 'user';
    public static $rules = [
  			'nama'               => 'required',
  			'alamat'                 => 'required',
        'telepon'            => 'required|unique:user',
  	];
    public static $messages = [
        'nama.required'     => 'nama harus terisi',
  			'alamat.required'			=> 'alamat harus terisi',
  			'telepon.required'			=> 'telepon harus terisi',
        'telepon.unique'			=> 'nomor telepon sudah didaftarkan, gunakan nomor yang berbeda'
    ];
}
