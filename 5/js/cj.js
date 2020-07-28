function chat()
{
$.ajax({
                        type: "POST",
                        dataType: "json",
                        url: "/caiji.php",
                        timeout: 30000, //ajax请求超时时间30秒    
                        data: {}, //40秒后无论结果服务器都返回数据    
						success: function(data, textStatus) {
                            //从服务器得到数据，显示数据并继续查询    

                            if (data.zt == "1") {
							
                            }
							if (data.zt == "2") {
							 
                             setTimeout("chat()",10000);
                            }
                            if (data.zt == "3") {
							 setTimeout("chat()",500);
                             
                            }
                        },
                        //Ajax请求超时，继续查询    
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            if (textStatus == "timeout") {
                            setTimeout("chat()",500);
                            }
                        }
		});
		}
		chat();
