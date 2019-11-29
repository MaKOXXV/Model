package pacot;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Modulo {
	
	static String driverPath = "src/test/";
	WebDriver driver;
	
	
	public void iniciacao(){
		
		String url = "www.google.com.br";
		System.out.println("*******************");
		System.out.println("launching IE browser");
		System.setProperty("webdriver.ie.driver", driverPath+"IEDriverServer.exe");
		driver = new InternetExplorerDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(url);
		
	}

}
