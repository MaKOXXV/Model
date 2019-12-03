package metodo;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import pacot.Modulo;

public class HooksValidacao {
	
	Modulo modulo = new Modulo(); 
	
	public void host(String url, WebDriver driver) throws InterruptedException {				
		System.out.println("Acessando URL : " + url);
		driver.get(url);
		
	}
	
	public void valide(WebDriver driver) {
		String element = "//*[@id=\"logo\"]/span";
		modulo.waitingElemnt(driver, element);
		WebElement textoElement;
		textoElement = driver.findElement(By.xpath(element));
		textoElement.getText();
		modulo.highLight(textoElement, driver);	
	}
	
	public void pessoa(WebDriver driver) {
		String elementStr = "//*[@id=\"resource_Pessoa\"]/div/h2/a";
		modulo.waitingElemnt(driver, elementStr);
		WebElement element = driver.findElement(By.xpath(elementStr));
		modulo.highLight(element, driver);	
		element.click();
		
	}
	
	public void idade(WebDriver driver) throws InterruptedException {
		String elementStr = "//*[@id=\"Pessoa_Pessoa_ValidarMenor16Anos\"]/div[1]/h3/span[2]/a";
		modulo.waitingElemnt(driver, elementStr);
		WebElement element = driver.findElement(By.xpath(elementStr));
		modulo.highLight(element, driver);
		element.click();
	}
	
	public void cpf(String cpf, WebDriver driver) throws InterruptedException {
		System.out.println("incerindo cpf : " + cpf);
		String value = null;
		
		String elementStr = "//*[@id='Pessoa_Pessoa_ValidarMenor16Anos_content']//textarea";
		modulo.waitingElemnt(driver, elementStr);
		WebElement element = driver.findElement(By.xpath(elementStr));
		modulo.highLight(element, driver);
		element.sendKeys(value);
	}
	
	public void date(String data, String cpf, WebDriver driver) throws InterruptedException {
		System.out.println("incerindo data : " + data);
		String value = null;
		String vant1 = "{\r\n" + 
				"  \"Login\": {\r\n" + 
				"    \"Usuario\": \"elorezon\",\r\n" + 
				"    \"Senha\": \"mapfre10\"\r\n" + 
				"  },\r\n" + 
				"\"cpf\": \"";
		String vant2 = "\",\"dta_anv\": \"";
		String vant3 = "\r\n" + 
				"\"}";
		
		String cp = cpf;
		String dat = data;

		if (data.equals("2003-10-29T18:40:11.619Z") && cpf.equals("")) {
			value = vant1 + cp + vant2 + dat + vant3;
		}

		if (data.equals("2001-10-29T18:40:11.619Z") && cpf.equals("")) {
			value = vant1 + cp + vant2 + dat + vant3;
		}

		if (cpf.equals("46125050009") && data.equals("")) {
			value = vant1 + cp + vant2 + dat + vant3;
		}

		if (cpf.equals("16755397075") && data.equals("")) {
			value = vant1 + cp + vant2 + dat + vant3;
		}

		if (cpf.equals("46125050009") && data.equals("2003-10-29T18:40:11.619Z")) {
			value = vant1 + cp + vant2 + dat + vant3;
		}

		if (cpf.equals("16755397075") && data.equals("2001-10-29T18:40:11.619Z")) {
			value = vant1 + cp + vant2 + dat + vant3;
		}

		String elementStr = "//*[@id='Pessoa_Pessoa_ValidarMenor16Anos_content']//textarea";
		modulo.waitingElemnt(driver, elementStr);
		WebElement element = driver.findElement(By.xpath(elementStr));
		modulo.highLight(element, driver);
		element.sendKeys(value);
	}
	
	public void tryOut(WebDriver driver) throws InterruptedException {
		String elementStr = "//*[@id=\"Pessoa_Pessoa_ValidarMenor16Anos_content\"]/form/div[2]/input";
		modulo.waitingElemnt(driver, elementStr);
		WebElement element = driver.findElement(By.xpath(elementStr));
		modulo.highLight(element, driver);
		element.click();
	}
	
	public void result(String result, String data, WebDriver driver) throws InterruptedException {
		String elementStr = "//*[@id='Pessoa_Pessoa_ValidarMenor16Anos_content']//div[@class='block response_code']/pre";
		modulo.waitingElemnt(driver, elementStr);
		
		String textoElement = driver.findElement(By.xpath(elementStr)).getText();
		String temp = textoElement.toString();
		System.out.println("Obtendo resultado do ano de nascimento : " + data);
		System.out.println(temp);

		if (temp.equals("2001")) {
			assertEquals("200", temp);
			System.out.println("Response Code : " + temp);
			System.out.println(result);
		}

		if (temp.equals("2003")) {
			assertEquals("400", temp);
			System.out.println("Response Code : " + temp);
			System.out.println(result);
			
		}
		driver.quit();
	}

}
