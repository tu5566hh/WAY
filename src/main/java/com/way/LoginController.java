package com.way;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginController
 */
@WebServlet("/loginController")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		javax.servlet.http.HttpSession session = request.getSession(false);
    	Object o = null;
    	Integer loginCount = 0;
    	if(session != null){
    		o = session.getAttribute("loginOK");
    		loginCount = (Integer)session.getAttribute("loginCount");
    	}
    	if(o != null ){
    		request.getRequestDispatcher("/WEB-INF/login/memberIndex.jsp").forward(request,response);
    		return;
    	}
    	if(loginCount > 3){
    		request.getRequestDispatcher("/WEB-INF/login/wrong.html").forward(request,response);
    		return;
    	}
    	request.getRequestDispatcher("/WEB-INF/login/login.jsp").forward(request,response);
	}

}
