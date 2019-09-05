        var password=""
        password=prompt('请输入密码(本网站需输入密码才可以进入):','');
        function custom_close()
        {
            window.opener=null;
            window.open('','_self');
            window.close();        
        }   
        if  (password !='123456')
            {alert("密码不正确，无法进入本站！！！")
            
            custom_close();            
            alert("即将打开百度")//加这一段是为了避免有些浏览器不支持关闭浏览器的js ,所以请求跳转到一个新页面！
            window.location.href='http://www.baidu.com';
   }
