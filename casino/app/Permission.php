<?php 
namespace VanguardLTE
{
    class Permission extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'w_permissions';
        protected $fillable = [
            'name', 
            'display_name', 
            'description', 
            'group_id', 
            'rank'
        ];
        protected $casts = ['removable' => 'boolean'];
        public static function boot()
        {
            parent::boot();
        }
    }

}
