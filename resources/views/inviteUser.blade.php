<h1 class="text-center">Laravel application</h1>
<p>Hello! Mr {{ $data['name']}} . Welcome to our team. </p>
<p>Admin invite you to Laravel application</p>

<h4>Account info: </h4>
<p> Username : {{ $data[ 'name'] }}</p>
<p> Email : {{ $data[ 'email'] }}</p>
<p> Password : {{ $data[ 'password'] }}</p>
<p> Role : {{ $data[ 'userType'] }}</p>

<p>Thank you.</p>
