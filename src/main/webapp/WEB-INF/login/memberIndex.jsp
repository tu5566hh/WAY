<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5" session="false"%>
    <%--
    javax.servlet.http.HttpSession session = request.getSession(false);
    Object o = null;
    if(session != null){
    	o = session.getAttribute("loginOK");
    }
    if(session == null || o == null){
		request.getRequestDispatcher("/login.jsp").forward(request,response);
	}
    --%>
<!DOCTYPE html>
<html>
<head>
<meta charset="BIG5">
<title>Member Index</title>
</head>
<body>
<h1>Member Index</h1>
<a href="#">hr01</a><br/>
<a href="#">hr02</a><br/>
<a href="#">hr03</a><br/>
</body>
</html>