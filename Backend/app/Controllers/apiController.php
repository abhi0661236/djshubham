<?php

namespace App\Controllers;

use CodeIgniter\Files\File;
use CodeIgniter\HTTP\Files\UploadedFile;

class apiController extends BaseController
{

   
    public function userRegister(){

        if(isset($_POST['mobile'])){

            $mobile = $_POST['mobile'];
            $username = isset($_POST['username']) ? $_POST['username'] : $_POST['mobile'];
            $device_id=$_POST['device_id'];
    
            $where=[
                'mobile'=>$mobile 
            ];

            $otp = $this->generate_otp();
    

       
            
            $builder= $this->db->table('usertbl');
       
            $result = $builder->select('*')
           
            ->where($where)
            ->get()->getResult();

            $numrow = $builder->countAllResults();
            $numrow = $builder->countAllResults();
           
            if($numrow > 0 &&count($result) !=0){

               $where = [
                'userid'=>$result[0]->id
            ];
            // print_r($where);
    
            $builder=$this->db->table('plantbl');
        
            $data = $builder->select('*')
                 // ->where('id', $id)
                 ->where($where)
                 ->get()->getResult();
     
            $numrow = $builder->countAllResults();
            // print_r($numrow);
           if($numrow >0 && count($data) != 0){
            $resp = json_encode(
                array(
                    'Status_code' => "200",
                    'message' => "Record Already Exist",
                    "Status"=>true,
                    'otp'=>$otp,
                    'mobile'=>$mobile,
                    'data'=>$data,
                    
                )
            );
           }else{
  $resp = json_encode(
                array(
                    'Status_code' => "200",
                    'message' => "User Exist",
                    'otp'=>$otp,
                    'mobile'=>$mobile,
                    'Status'=>"No Active Plan!"
                )
            );
           }
           
            }else{

                $data = [
                    "plan_id"=>0,
                    "username"=>$username,
                    "mobile"=>$mobile,
                    "status"=>0,
                    "otp"=>$otp,
                    "devideid"=>$device_id,
                ];

                $builder=$this->db->table('usertbl');
                $builder->insert($data);
                


                   $resp = json_encode(
                    array(
                        'Status_code' => "200",
                        'message' => "Record Inserted",
                        'Result' => $data
                        // 'token' => $token
                    )
                );
        
              
            }

    
        }  
        return $this->response
        ->setStatusCode(200)
        ->setJSON($resp);

    }


   

   

}    