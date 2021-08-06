package com.way;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Check
 */
@WebServlet("/check")
public class Check extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		HttpSession session = request.getSession();
		
		String path = "/";
		
		Integer loginCount = 1;
		Object o = session.getAttribute("loginCount");
		if(o != null) {
			loginCount = (Integer)o;
		}
		
		
		if(username.equals("abcd") && password.contentEquals("1234")) {
			//path += "memberIndex.jsp";
			session.setAttribute("loginOK", "OK");
		}else if(loginCount < 3){
			session.setAttribute("loginCount", ++loginCount);
			//path += "login.jsp";
			request.setAttribute("loginError","Er");
		}else{
			session.setAttribute("loginCount", ++loginCount);
			//path += "wrong.html";
		}
		
		//request.getRequestDispatcher(path).forward(request, response);
		request.getRequestDispatcher("/loginController").forward(request, response);
	}

}
