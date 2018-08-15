<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \App\Traits\Uuids;

class File extends Model
{
    use Uuids;

    public $incrementing = false;
    protected $table = 'files';
    protected $fillable = ['id', 'name', 'extension', 'mime', 'size'];
}
