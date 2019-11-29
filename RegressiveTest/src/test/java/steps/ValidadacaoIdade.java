package steps;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidadacaoIdade {

	WebDriver driver;

	@Before
	public void setUp() {
		
	}

	@After
	public void tearDown() {
		
	}

	@Given("^esteja na tela tela Swagger$")
	public void esteja_na_tela_tela_Swagger() throws Throwable {
		System.out.println("|---------> Instanciando Driver : ChromeDriver <------------|");
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

	@Given("^MapfreCap API \"([^\"]*)\"$")
	public void mapfrecap_API(String url) throws Throwable {
		System.out.println("Acessando URT : " + url);
		driver.get(url);
		Thread.sleep(3000);
	}

	@When("^validar que estou na pagina MapfreCap API$")
	public void validar_que_estou_na_pagina_MapfreCap_API() throws Throwable {
		String textoElement = driver.findElement(By.xpath("//*[@id=\"logo\"]/span")).getText();
		String temp = textoElement.toString();
		assertEquals("swagger", temp);
		System.out.println(temp);
		System.out.println("Confirmação de acesso ao :" + temp);
	}

	@When("^clicar em pessoa$")
	public void clicar_em_pessoa() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"resource_Pessoa\"]/div/h2/a")).click();
	}

	@When("^clicar em pessoa/validarIdade$")
	public void clicar_em_pessoa_validarIdade() throws Throwable {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"Pessoa_Pessoa_ValidarMenor16Anos\"]/div[1]/h3/span[2]/a")).click();
	}

	@When("^inserir dados com cpf \"([^\"]*)\" e \"([^\"]*)\"$")
	public void inserir_dados_com_cpf(String cpf) throws Throwable {
		Thread.sleep(1000);
		System.out.println("incerindo cpf : " + cpf);
		String value = null;

		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id='Pessoa_Pessoa_ValidarMenor16Anos_content']//textarea")).sendKeys(value);

	}

	@When("^inserir dados com a data \"([^\"]*)\" e \"([^\"]*)\"$$")
	public void inserir_dados_com_a_data(String data, String cpf) throws Throwable {
		Thread.sleep(1000);
		System.out.println("incerindo data : " + data);
		String value = null;
		String vant1 = "{\r\n" + 
				"  \"Login\": {\r\n" + 
				"    \"Usuario\": \"BITCS\",\r\n" + 
				"    \"Senha\": \"mapfre2019\"\r\n" + 
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

		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id='Pessoa_Pessoa_ValidarMenor16Anos_content']//textarea")).sendKeys(value);

	}

	@When("^clicar em Try it out$")
	public void clicar_em_Try_it_out() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"Pessoa_Pessoa_ValidarMenor16Anos_content\"]/form/div[2]/input")).click();
		Thread.sleep(3000);
	}

	@Then("^\"([^\"]*)\" para quem nasceu em \"([^\"]*)\"$")
	public void para_quem_nasceu_em(String result, String data) throws Throwable {
		String textoElement = driver
				.findElement(By.xpath(
						"//*[@id='Pessoa_Pessoa_ValidarMenor16Anos_content']//div[@class='block response_code']/pre"))
				.getText();
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
