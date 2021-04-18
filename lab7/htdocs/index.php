<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php

//---------------2-----------------------
//      Работа с переменными

        echo '<h2>------2------</h2>';
        echo '<h1>Работа с переменными</h1>';
        $a = 3;
        echo '1) '.$a;
        echo "<br>";
    
        $a=10; $b=2;
        echo '2) '.$a + $b.' '.$a - $b.' '.$a * $b.' '.$a / $b;
        echo "<br>";

        $c=15; $d=2;
        $result = $c+$d;
        echo '3) '.$result;
        echo "<br>";

        $a=10; $b=2; $c=5;
        echo '4) '.$a+$b+$c;
        echo "<br>";

        $a=17; $b=10;
        $c = $a-$b;
        $d = 7;
        $result = $c+$d;
        echo '5) '.$result;
        echo "<br> <br>";
//--------------------------------------
//      Работа со строками

        echo '<h1>Работа со строками</h1>';

        $text = 'Hello, World!';
        echo '1) '.$text;
        echo "<br>";

        $text1 = 'Hello, ';
        $text2 = 'World!';
        echo '2) '.$text1.$text2;
        echo "<br>";

        $name = 'Shady';
        echo '3) '.'Hello, '.$name.'!';
        echo "<br>";

        $age = '20';
        echo '4) '."I'm ".$age.' y.o.';
        echo "<br> <br>";
    
//--------------------------------------
//      Обращение к символам строки

        echo '<h1>Обращение к символам строки</h1>';

        $text = 'abcde';
        echo '1) '.$text[0].$text[2].$text[4];
        echo "<br>";

        $text[0] = '!';
        echo '2) '.$text;
        echo "<br>";

        $num = '12345';
        echo '3) '.$num[0]+$num[1]+$num[2]+$num[3]+$num[4];
        echo "<br> <br>";

//--------------------------------------
//      ----
        echo '<h1>Time</h1>';

        $hourSeconds = 60*60;
        $daySeconds = $hourSeconds * 24;
        $monthSeconds = $daySeconds * 30;
        echo 'Hour Seconds = '.$hourSeconds.';<br> Day Seconds = '.$daySeconds.'; <br>Month Seconds = '.$monthSeconds.';';
        echo "<br>";

        date_default_timezone_set('Asia/Yekaterinburg');
        $currentHour = date('h');
        $curentMinute = date('i');
        $currentSecond = date('s');
        $currentTime = $currentHour.':'.$curentMinute.':'.$currentSecond.' '.date('A');
        echo $currentTime;
        echo "<br>";

        $toSquare = 4;
        $squared = $toSquare**2;
        echo $squared;
        echo "<br> <br>";

//---------------3-----------------------
//      Работа с массивами
        
        echo '<h2>------3------</h2>';
        echo '<h1>Работа с массивами</h1>';

        $arr=['a', 'b', 'c'];
        echo '1) ';
        echo var_dump($arr);
        echo "<br>";

        echo '2) '.$arr[0];
        echo "<br>";

        $arr=['a', 'b', 'c', 'd'];
        echo '3) '.$arr[0].'+'.$arr[1].'+'.$arr[2].'+'.$arr[3];
        echo "<br>";

        $arr=['2', '5', '3', '9'];
        echo '4) '.$arr[0]*$arr[1].' '.$arr[2]*$arr[3];
        echo "<br>";

        $arr2=[];
        $arr2[0] = '1';
        $arr2[1] = '2';
        $arr2[2] = '3';
        $arr2[3] = '4';
        $arr2[4] = '5';
        
        echo '5) ';
        echo var_dump($arr2);
        echo "<br><br>";


//--------------------------------------
//      Ассоциативные массивы
        echo '<h1>Ассоциативные массивы</h1>';

        $arr = ['a'=>1, 'b'=>2, 'c'=>3];
        echo '1) '.$arr['c'].'<br>';

        $arr = ['a'=>1, 'b'=>2, 'c'=>3];
        echo '2) '.$arr['a']+$arr['b']+$arr['c'].'<br>';

        $arr = ['Коля'=>'1000$', 'Вася'=>'500$', 'Петя'=>'200$'];
        echo '3) '.'Петя - '.$arr['Петя'].'; Коля - '.$arr['Коля'].'<br>'; 

        $arr = ['1'=>'Monday',
                '2'=>'Tuesday',
                '3'=>'Wednesday',
                '4'=>'Thursday',
                '5'=>'Friday',
                '6'=>'Saturday',
                '7'=>'Sunday',
        ];
        $daynum = date("N", strtotime(date("l")));
        echo '4) '.$arr[$daynum].'<br>';

        $day = 4;
        echo '5) '.$arr[$day].'<br><br>';

//--------------------------------------
//      Многомерные массивы
        echo '<h1>Многомерные массивы</h1>';

        $arr = [
                'cms'=>['joomla', 'wordpress', 'drupal'],
                'colors'=>['blue'=>'голубой', 'red'=>'красный', 'green'=>'зеленый']
        ];
        echo '1) '.$arr['cms'][0].' '.$arr['cms'][2].' '.$arr['colors']['green'].' '.$arr['colors']['red'].'<br>';

        $arr = [
                'ru'=>[1=>'пн', 2=>'вт', 3=>'ср', 4=>'чт', 5=>'пт', 6=>'сб', 7=>'вс'],
                'en'=>[1=>'mon', 2=>'tue', 3=>'wed', 4=>'thu', 5=>'fri', 6=>'sat', 7=>'sun'],
        ];
        echo '2) '.$arr['ru'][1].' '.$arr['en'][3].'<br>';

        $lang = 'ru';
        $day = 3;
        echo '3) '. $arr[$lang][$day].'<br><br>';

//----------------4---------------------
//      Задачи на конструкции if-else, switch-case в PHP
        echo '<h2>------4------</h2>';
        echo '<h1> Задачи на конструкции if-else, switch-case в PHP</h1>';

        $month = 7;
        $yearArr = ['winter','spring','summer','autumn'];

        if ($month == 1 || $month == 2 || $month == 12) {
                echo '1) '.$yearArr[0].'<br>';
        }
        elseif ($month >= 3 && $month <=5) {
                echo '1) '.$yearArr[1].'<br>';
        }
        elseif ($month >= 6 && $month <=8) {
                echo '1) '.$yearArr[2].'<br>';
        }
        elseif ($month >= 9 && $month <=11) {
                echo '1) '.$yearArr[3].'<br>';
        }

        $year = 1800;
        $isLeap = false;
        if ((($year % 4 == 0) && !($year % 100 == 0)) || ($year % 400 == 0)) {
                $isLeap = true;
        }
        else {
                $isLeap = false;
        }
        switch ($isLeap) {
                case false:
                        echo '2) '.$year.' is not a Leap year <br>';
                        break;
                
                case true:
                        echo '2) '.$year.' is a Leap year <br>';
                        break;
        }

        $str = 'abcde';
        $isFirstA = false;
        if ($str[0] == 'a'){
                $isFirstA = true;
        }
        switch ($isFirstA) {
                case true:
                        echo "3) First is 'a' <br>";
                        break;
                
                case false:
                        echo "3) First is not 'a' <br>";
                        break;
        }

        $str = '12345';
        switch ($str[0]) {
                case 1:
                        echo "4) True <br>";
                        break;
                case 2:
                        echo "4) True <br>";
                        break;
                case 3:
                        echo "4) True <br>";
                        break;
                
                default:
                        echo "4) False <br>";
                        break;
        }

        $str = '153';
        echo '5) '.$str[0]+$str[1]+$str[2].'<br>';

        $str = '153351';
        $sum1 = $str[0]+$str[1]+$str[2];
        $sum2 = $str[3]+$str[4]+$str[5];
        if ($sum1 == $sum2){
                echo '6) Same <br><br>';
        }
        else {
                echo '6) Different <br><br>';
        }

//----------------5---------------------
//      Задачи на циклы foreach, while, for в PHP
        echo '<h2>------5------</h2>';
        echo '<h1> Задачи на циклы foreach, while, for в PHP</h1><br>';

        echo '<h1>Работа с foreach</h1>';
        
        $arr = ['html','css','php','js','jq'];
        echo '1) ';
        foreach ($arr as &$value) {
                echo $value.' ';
        }
        unset($value);
        echo '<br>';

        $arr = [1,2,3,4,5];
        $result = 0;
        echo '2) ';
        foreach ($arr as &$value) {
                $result = $result + $value;
        }
        echo $result;
        unset($value);
        echo '<br>';

        $arr = [1,2,3,4,5];
        $result = 0;
        echo '3) ';
        foreach ($arr as $value) {
                $result = $result + $value**2;
        }
        echo $result;
        unset($value);
        echo '<br><br>';

//-----------------------------------------------
//      Работа с ключами

        echo '<h1>Работа с ключами</h1>';
        
        $arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
        echo '1) ';
        foreach ($arr as $key => $value) {
                echo $key.' - '.$value.'; ';
        }
        echo '<br>';

        echo '2) ';
        $arr = ['Kolya'=>'200', 'Vasya'=>'300','Petya'=>'400'];
        foreach ($arr as $key => $value) {
                echo $key.' - salary is '.$value.'$; ';
        }
        echo '<br><br>';

//-----------------------------------------------
//      Циклы while и for

        echo '<h1>Циклы while и for</h1>';
        echo 'while.1: <br> ';
        $a = 1;
        while ($a <= 100) {
                echo $a.'  ';
                $a++;
        }
        echo '<br><br>';

        echo 'while.2: <br> ';
        $a = 11;
        while ($a <= 33) {
                echo $a.'  ';
                $a++;
        }
        echo '<br><br>';

        echo 'while.3: <br> ';
        $a = 0;
        while ($a <= 100) {
                echo $a.'  ';
                $a = $a+2;
        }
        echo '<br><br>';

        echo 'while.4: <br> ';
        $a = 0;
        $sum = 0;
        while ($a <= 100) {
                $sum = $sum+$a;
                // echo $a.'  ';
                $a = $a+1;
        }
        echo $sum.'<br><br>';

//-----------------------------------------------

        echo 'for.1: <br> ';
        for ($i=0; $i <= 100; $i++) { 
                echo $i.'  ';
        }
        echo '<br><br>';

        echo 'for.2: <br> ';
        for ($i=11; $i <= 33; $i++) { 
                echo $i.'  ';
        }
        echo '<br><br>';

        echo 'for.3: <br> ';
        for ($i=0; $i <= 100; $i+=2) { 
                echo $i.'  ';
        }
        echo '<br><br>';

        echo 'for.4: <br> ';
        $a = 0;
        $sum = 0;
        for ($i=0; $i <= 100; $i++) { 
                $sum = $sum+$a;
                $a++;
        }
        echo $sum.'<br><br>';
//-----------------------------------------------
       
        echo '1) ';
        $arr = [2,5,9,15,0,4];
        foreach ($arr as $value) {
                if (($value >= 3)&&($value <= 10)){
                        echo $value.' ';
                }
        }
        echo '<br>';

        echo '2) ';
        $arr = [-2,5,-9,15,0,4,-8];
        $sum = 0;
        foreach ($arr as $value) {
                if ($value >= 0){
                        $sum+=$value;
                }
        }
        echo $sum.' ';
        echo '<br>';

        echo '3) ';
        $arr = [1,2,5,9,4,13,4,10];
        foreach ($arr as $value) {
                if ($value == 4){
                        echo '4 is present.';
                        break;
                }
        }

        echo '<br>';

        echo '4) ';
        $arr = ['10','20','30','50','235','3000'];
        foreach ($arr as $value) {
                if (($value[0] == 1) || ($value[0] == 2) || ($value[0] == 3) ){
                        echo $value.'  ';
                }
        }
        echo '<br>';

        echo '5) ';
        $arr = [1,2,3,4,5,6,7,8,9];
        foreach ($arr as $value) {
                if ($value == $arr[0]){
                        echo '-'.$value.'-';
                }
                else {
                        echo $value.'-';
                }
        }
        echo '<br>';

        echo '6) ';
        $arr = ['mon','tue','wed','thu','fri','sat','sun'];
        foreach ($arr as $key => $value) {
                if ($key > 4){
                        echo '<b class = boldTask >'.$value.' </b>';
                }
                else {
                        echo $value.' ';
                }
        }
        echo '<br>';

        echo '7) ';
        $arr = ['mon','tue','wed','thu','fri','sat','sun'];
        $day = date('N');
        foreach ($arr as $key => $value) {
                if ($key == $day-1){
                        echo '<b class = boldTask >'.$value.' </b>';
                }
                else {
                        echo $value.' ';
                }
        }
        echo '<br><br>';

//----------------8---------------------
//      SQL 
        echo '<h2>------8------</h2>';
        echo '<h1> SQL</h1><br>';
        echo '<h1> С помощь PHP выполните следующие запросы к таблице workers:
        </h1><br>';


        $host = 'localhost'; 
        $user = 'root'; 
        $password = ''; 
        $db_name = 'mytest'; 
        $link = mysqli_connect($host, $user, $password, $db_name);
        mysqli_connect($host, $user, $password, $db_name) or die(mysqli_error($link));
        mysqli_query($link, "SET NAMES 'utf8'");

//----------------8.0---------------------
        $delsql = "DELETE FROM workers WHERE id > 0";
        mysqli_query($link, $delsql);
        
        $sql = "INSERT INTO workers (id, name, age, salary) VALUES 
        ('1', 'Дима', '23', '400'),
        ('2', 'Петя', '25', '500'),
        ('3', 'Вася', '23', '500'),
        ('4', 'Коля', '30', '1000'),
        ('5', 'Иван', '27', '500'),
        ('6', 'Кирилл', '28', '1000')";
        mysqli_query($link, $sql);
        
//----------------8.1---------------------
        echo '<h2>---8.1---</h2>';
        echo '<h1>1) id = 3</h1>';
        $query = "SELECT * FROM workers WHERE id = 3";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>2) salary = 1000</h1>';
        $query = "SELECT * FROM workers WHERE salary = 1000";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>3) age = 23</h1>';
        $query = "SELECT * FROM workers WHERE age = 23";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>4) salary > 400</h1>';
        $query = "SELECT * FROM workers WHERE salary > 400";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>5) salary >= 500</h1>';
        $query = "SELECT * FROM workers WHERE salary >= 500";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>6) salary != 500</h1>';
        $query = "SELECT * FROM workers WHERE salary != 500";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>7) salary <= 900</h1>';
        $query = "SELECT * FROM workers WHERE salary <= 900";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>8) salary <= 900</h1>';
        $query = "SELECT * FROM workers WHERE name = 'Вася'";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

//----------------8.2---------------------
        echo '<h2>---8.2---</h2>';

        echo '<h1>1) age = {25...28]</h1>';
        $query = "SELECT * FROM workers WHERE age > 25 AND age <=28 ";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>2) name = Петя</h1>';
        $query = "SELECT * FROM workers WHERE name = 'Петя'";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>3) name = Петя & Вася</h1>';
        $query = "SELECT * FROM workers WHERE name = 'Петя' OR name = 'Вася'";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>4) name != Петя</h1>';
        $query = "SELECT * FROM workers WHERE name != 'Петя'";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>5) age = 27 or salary = 1000</h1>';
        $query = "SELECT * FROM workers WHERE age = 27 OR salary = 1000";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>6) age = [23...27} or salary = 1000</h1>';
        $query = "SELECT * FROM workers WHERE age >= 23 AND age < 27 OR salary = 1000";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>7) age = [23...27] or salary = [400...1000]</h1>';
        $query = "SELECT * FROM workers WHERE age >= 23 AND age <= 27 OR salary >= 400 AND salary <=1000";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>8) age = 27 or salary != 400</h1>';
        $query = "SELECT * FROM workers WHERE age = 27 OR salary != 400";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';
//----------------8.3---------------------
        echo '<h2>---8.3---</h2>';
        echo '<h2>Insert</h2>';

        echo '<h1>1) Insert Никита</h1>';
        $sql = "INSERT INTO workers (id, name, age, salary) VALUES ('7', 'Никита', '26', '300')";
        mysqli_query($link, $sql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>2) Insert Светлана</h1>';
        $sql = "INSERT INTO workers (id, name, age, salary) VALUES ('8', 'Светлана', 'null', '1200')";
        mysqli_query($link, $sql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>3) Insert Ярослав & Петр</h1>';
        $sql = "INSERT INTO workers (id, name, age, salary) VALUES ('9', 'Ярослав', '30', '1200'), ('10', 'Петр', '31', '1000')";
        mysqli_query($link, $sql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        //----------------8.4---------------------
        echo '<h2>---8.4---</h2>';
        echo '<h2>Delete</h2>';
        
        echo '<h1>1) Delete id = 7</h1>';
        $delsql = "DELETE FROM workers WHERE id = 7";
        mysqli_query($link, $delsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>2) Delete Коля</h1>';
        $delsql = "DELETE FROM workers WHERE name = 'Коля'";
        mysqli_query($link, $delsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>3) Delete age = 23</h1>';
        $delsql = "DELETE FROM workers WHERE age = 23";
        mysqli_query($link, $delsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        //----------------8.5---------------------
        echo '<h2>---8.5---</h2>';
        echo '<h2>Oops, Go Back</h2>';

        $delsql = "DELETE FROM workers WHERE id > 0";
        mysqli_query($link, $delsql);
        
        $sql = "INSERT INTO workers (id, name, age, salary) VALUES 
        ('1', 'Дима', '23', '400'),
        ('2', 'Петя', '25', '500'),
        ('3', 'Вася', '23', '500'),
        ('4', 'Коля', '30', '1000'),
        ('5', 'Иван', '27', '500'),
        ('6', 'Кирилл', '28', '1000')";
        mysqli_query($link, $sql);

        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        //----------------8.6---------------------
        echo '<h2>---8.6---</h2>';
        echo '<h2>Update</h2>';

        echo '<h1>1) Update Вася: salary = 200</h1>';
        $updsql = "UPDATE workers SET salary = '200' WHERE name = 'Вася'";
        mysqli_query($link, $updsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>2) Update id = 4: age = 35</h1>';
        $updsql = "UPDATE workers SET age = 35 WHERE id = 4";
        mysqli_query($link, $updsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>3) Update salary = 500 => salary = 700</h1>';
        $updsql = "UPDATE workers SET salary = 700 WHERE salary = 500";
        mysqli_query($link, $updsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>4) Update id = [2...5]: age = 23</h1>';
        $updsql = "UPDATE workers SET age = 23 WHERE id >=2 AND id <=5 ";
        mysqli_query($link, $updsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

        echo '<h1>5) Update Вася => Женя, salary = 900</h1>';
        $updsql = "UPDATE workers SET name = 'Женя' WHERE name ='Вася'";
        mysqli_query($link, $updsql);
        $query = "SELECT * FROM workers WHERE id > 0";
        $result = mysqli_query($link, $query) or die( mysqli_error($link) );
        for ($data = []; $row = mysqli_fetch_assoc($result);){
                echo '<p>id='.$row['id'].'; name='.$row["name"].'; age='. $row["age"].'; salary='.$row['salary'].'</p>';
        }echo '<br>';

    ?>


</body>
</html>