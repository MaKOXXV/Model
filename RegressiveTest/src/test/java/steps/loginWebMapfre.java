package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import pacot.Modulo;
import metodo.Google;

public class loginWebMapfre {
	
	Modulo modulo = new Modulo();
	Google google = new Google();
	
	static String driverPath = "src/test/";
	public WebDriver driver;
	
	@Given("^esteja na tela web$")
	public void esteja_na_tela_web() throws Throwable {
		modulo.iniciacao();
	}

	@And("^senha$")
	public void senha() throws Throwable {	
		google.host();
	}

	@And("^user$")
	public void user() throws Throwable {

	}

	@Then("^login$")
	public void login() throws Throwable {

	}


}
