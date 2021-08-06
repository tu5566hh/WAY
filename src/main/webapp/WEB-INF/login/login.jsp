<%@ page language="java" contentType="text/html; charset=big5"
    pageEncoding="big5" session="false" %>
    <%--
    	javax.servlet.http.HttpSession session = request.getSession(false);
    	Object o = null;
    	Integer loginCount = 0;
    	if(session != null){
    		o = session.getAttribute("loginOK");
    		loginCount = (Integer)session.getAttribute("loginCount");
    }
    	if(o != null ){
    		request.getRequestDispatcher("/memberIndex.jsp").forward(request,response);
    		return;
    	}
    	if(loginCount >= 3){
    		request.getRequestDispatcher("/wrong.html").forward(request,response);
    		return;
    	}
    --%>
<!DOCTYPE html>
<html>
<head>
<meta charset="big5">
<title>登入頁面</title>
</head>
<body>
	<%
		Object strParam = request.getAttribute("loginError");
		if(strParam != null){
			out.print("Name or Password is Wrong.Try Again Later.");
		}
	%>
	<form method="get" action="/WAY/check">
		<div>使用者名稱</div>
		<input type="text" name="username"/>
		<div>密碼</div>
		<input type="password" name="password"/>
		<input type="submit" value="登入"/>
	</form>
</body>
</html>