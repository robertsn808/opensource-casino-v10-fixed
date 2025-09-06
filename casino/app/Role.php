<?php 
namespace VanguardLTE
{
    class Role extends \jeremykenedy\LaravelRoles\Models\Role
    {
        protected $table = 'roles';
        public function hasOnePermission($permission)
        {
            return $this->permissions()->where(['permission_id' => $permission])->first();
        }
    }

}
