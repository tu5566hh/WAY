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
<title>�n�J����</title>
</head>
<body>
	<%
		Object strParam = request.getAttribute("loginError");
		if(strParam != null){
			out.print("Name or Password is Wrong.Try Again Later.");
		}
	%>
	<form method="get" action="/WAY/check">
		<div>�ϥΪ̦W��</div>
		<input type="text" name="username"/>
		<div>�K�X</div>
		<input type="password" name="password"/>
		<input type="submit" value="�n�J"/>
	</form>
</body>
</html>