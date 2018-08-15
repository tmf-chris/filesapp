<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Str;

trait Uuids {

    protected static function boot() {

        parent::boot();

        /**
         * Add the UUID before persisting the model
         */
        static::creating(function (Model $model) {
            $uuidCol = config('app.default_uuid_column', 'id');
            if (empty($model->attributes[$uuidCol])) {
                $model->attributes[$uuidCol] = (string) Str::uuid();
            }
        });
    }

    /**
     * Add UUID scope to model
     * So you can query like Model::Uuid('uuid string');
     * @param string Uuid
     *
     */
    public function scopeUuid($query, $uuid, $first = TRUE) {
        if (!is_string($uuid)) {
            throw (new ModelNotFoundException)->setModel(get_class($this));
        }
        $results = $query->where(config('app.default_uuid_column', 'id'), $uuid);
        return $first ? $results->firstOrFail() : $results;
    }

}