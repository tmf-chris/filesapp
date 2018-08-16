<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \App\Traits\Uuids;

class File extends Model
{
    use Uuids;

    public $incrementing = false;
    protected $table = 'files';
    protected $hidden = ['path'];
    protected $fillable = ['id', 'name', 'path', 'type', 'size', 'created_at', 'updated_at'];
}
