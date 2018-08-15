<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \App\Traits\Uuids;

class File extends Model
{
    use Uuids;

    public $incrementing = false;
    protected $table = 'files';
    protected $hidden = array('path');
    protected $fillable = ['id', 'name', 'path', 'created_at', 'updated_at'];
}
