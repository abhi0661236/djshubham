<?php

namespace App\Controllers;

use CodeIgniter\Files\File;
use CodeIgniter\HTTP\Files\UploadedFile;

class apiController extends BaseController
{

    public function __construct()
    {
        $this->db = \Config\Database::connect();
        $session = \Config\Services::session();
    }

    public function generate_otp() {
		$OTP 	=	rand(1,9);
		$OTP 	.=	rand(0,9);
		$OTP 	.=	rand(0,9);
		$OTP 	.=	rand(0,9);
		$OTP 	.=	rand(0,9);
		$OTP 	.=	rand(0,9);
		return $OTP;
	} 


    public function responce($statuscode="200",$msg="msg",$data="data"){

        $resp = json_encode(
            array(
                'Status_code' => $statuscode,
                'message' => $msg,
                'Result' => $data
                // 'token' => $token
            )
        );

        return $this->response
            ->setStatusCode(200)
            ->setJSON($resp);

    }

    

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


    public function userVerify()
    {
        if(isset($_POST['mobile'])){
         $mobile = $_POST['mobile'];
        // $otp= $_POST['otp'];
    
        $where=[
            'mobile'=>$mobile,
            // 'otp'=>$otp
        ];
    }

    //print_r($mobile);
        $builder=$this->db->table('usertbl');
        $builder=$builder->where($where);
        $query   = $builder->get();
        $numrow=$builder->countAllResults();
        $data=$query->getResult();

        if($numrow > 0){

            
            //  print_r($data);
            
            $resp = json_encode(
                array(
                    'Status_code' => "200",
                    'message' => "Record Found",
                    'Result' => $data
                    // 'token' => $token
                )
            );
            

        }else{

            $data = [
                "message"=> "user not verified",
            ];

            $this->responce("200","User not verified",$data);

        }
        return $this->response
        ->setStatusCode(200)
        ->setJSON($resp);
    }

    public function userPlan()
    {
        $mobile = $_POST['mobile'];
        $plan = $_POST['planname'];
        $day=$_POST['days']." day";
        $days=" + ".$_POST['days']. " day";
        $price=$_POST['price'];

        $where = [
            'mobile'=>$mobile
        ];

        //get userid
        $builder=$this->db->table('usertbl');
        $builder=$builder->where($where);
        $query   = $builder->get();
        $data=$query->getResult();

          $startdate = date('Y-m-d'); // current date
        
        $enddate = date('Y-m-d', strtotime($days)); // date 1 week

        // $diff = date_diff($startdate,$enddate);

// //count days
// echo 'Days Count - '.$diff->format("%a");

   if($data)
   {
    $id =$data[0]->id;
     if(!$data[0]->id){
            $data = [
                "message"=> "user Not Available",
            ];


            // $this->responce("200","User Not Available",$data);
        }


        $where = [
            'userid'=>$data[0]->id
        ];
        // print_r($where);

        $builder=$this->db->table('plantbl');
    
        $result = $builder->select('*')
             // ->where('id', $id)
             ->where($where)
             ->get()->getResult();
 
             $numrow = $builder->countAllResults();

             
        //  print_r($plandata[0]->id);
        $data = [
            // 'userid'=>$plandata->id,
            'plan'=>$plan,
            'validity_days'=>$day,
            'price'=>$price,
            'status'=>1,
            'mobile'=>$mobile,
            
        ];

    //   print_r($result);
        if($numrow > 0 &&count($result) !=0){
           $builder=$this->db->table('plantbl');


           $builder->where('userid', $id);


           // print_r($plandata->id);
            $builder->update($data);
            
            $result = $builder->select('*')
             // ->where('id', $id)
             ->where($where)
             ->get()->getResult();
            $resp = json_encode(
                array(
                    'Status_code' => "200",
                    'message' => "Plan Updated",
                    'status'=>1,
                    'Result' => $result
                    // 'token' => $token
                )
            );
        }
        else{


            $data = [
                'userid'=>$id,
                'plan'=>$plan,
                'validity_days'=>$day,
                'price'=>$price,
                'plan_ends'=>$enddate,
                 'mobile'=>$mobile,

                
            ];
            $builder=$this->db->table('plantbl');
            $builder->insert($data);

            $resp = json_encode(
                array(
                    'Status_code' => "200",
                    'message' => "Plan Inserted",
                    'status'=>1,
                    'Result' => $data
                    // 'token' => $token
                )
            );
    

        }
   }else{
            
            $resp = json_encode(
                array(
                    'Status_code' => "200",
                    'message' => "User Not Exist",
                    
                    // 'token' => $token
                )
            );
   }
   
   return $this->response
   ->setStatusCode(200)
   ->setJSON($resp);

 }


    public function sendPushNotification($otp,$id,$devicetype)
    {  
         
//        $notification_id = $this->request->getVar('nId');
        $notification_id = $id;
        $title = 'Otp'; 
        $message = $otp;
        // $d_type    = $this->request->getVar('device_type');  // for android or IOS
        $d_type    = $devicetype;  // for android or IOS
 
        $accesstoken = 'YOUR FCM KEY';
 
        $URL = 'https://fcm.googleapis.com/fcm/send';
 
 
            $post_data = '{
                "to" : "' . $notification_id . '",
                "data" : {
                  "body" : "",
                  "title" : "' . $title . '",
                  "type" : "' . $d_type . '",
                  "id" : "' . $id . '",
                  "message" : "' . $message . '",
                },
                "notification" : {
                     "body" : "' . $message . '",
                     "title" : "' . $title . '",
                      "type" : "' . $d_type . '",
                     "id" : "' . $id . '",
                     "message" : "' . $message . '",
                    "icon" : "new",
                    "sound" : "default"
                    },
 
              }';
            // print_r($post_data);die;
 
        $crl = curl_init();
 
        $headr = array();
        $headr[] = 'Content-type: application/json';
        $headr[] = 'Authorization: ' . $accesstoken;
        curl_setopt($crl, CURLOPT_SSL_VERIFYPEER, false);
 
        curl_setopt($crl, CURLOPT_URL, $URL);
        curl_setopt($crl, CURLOPT_HTTPHEADER, $headr);
 
        curl_setopt($crl, CURLOPT_POST, true);
        curl_setopt($crl, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
 
        $rest = curl_exec($crl);
 
        if ($rest === false) {
            // throw new Exception('Curl error: ' . curl_error($crl));
            //print_r('Curl error: ' . curl_error($crl));
            return $result_noti = 0;
        } else {
 
            return $result_noti = 1;
        }
 
       
    }

    public function userPlanVerify(){

        $mobile = $_POST['mobile'];

        $where=[
            'mobile'=>$mobile
        ];

        $builder=$this->db->table('usertbl');
        $builder=$builder->where($where);
        $query   = $builder->get();
        $plandata=$query->getResult();

// print_r($plandata);
        $builder=$this->db->table('plantbl');
        $builder->where('id', $plandata->id);

        $query   = $builder->get();
        $plandata = $query->getRow();



         $this->responce("200","User Plan Check",$plandata);

    }

   

}    