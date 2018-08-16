<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \App\Traits\Uuids;
use Illuminate\Database\Eloquent\SoftDeletes;

class File extends Model
{
    use Uuids;
    use SoftDeletes;

    public $incrementing = false;
    protected $table = 'files';
    protected $hidden = ['path'];
    protected $fillable = ['id', 'name', 'path', 'type', 'size', 'created_at', 'updated_at'];
    protected $dates = ['deleted_at'];
}
