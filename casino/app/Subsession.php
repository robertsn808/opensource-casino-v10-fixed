<?php 
namespace VanguardLTE
{
    class Subsession extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'w_subsessions';
        protected $fillable = [
            'user_id', 
            'subsession', 
            'active'
        ];
        public $timestamps = true;
        public static function boot()
        {
            parent::boot();
        }
    }

}
