package metodo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Google {
	
	WebDriver driver;
	
	public void host() {
		//driver.get("http://somedomain/url_that_delays_loading");
		WebElement myDynamicElement = (new WebDriverWait(driver, 10))
		  .until(ExpectedConditions.presenceOfElementLocated(By.id("txtLogin_I")));
		myDynamicElement.sendKeys("teste");
	}

}
